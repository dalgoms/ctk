const docs = window.CTK_DOCS || [];

const state = {
  activeSlug: "",
  search: "",
};

const docNav = document.getElementById("docNav");
const tocNav = document.getElementById("tocNav");
const content = document.getElementById("documentContent");
const currentTitle = document.getElementById("currentTitle");
const docFile = document.getElementById("docFile");
const docCount = document.getElementById("docCount");
const sourceLink = document.getElementById("sourceLink");
const searchInput = document.getElementById("searchInput");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("overlay");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function isTableDivider(line) {
  return /^\s*\|?[\s:-]+\|[\s|:-]+\|?\s*$/.test(line);
}

function renderTable(lines) {
  const rows = lines
    .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));

  if (rows.length < 2) return "";

  const header = rows[0];
  const body = rows.slice(2);
  const thead = `<thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;

  return `<div class="table-wrap"><table>${thead}${tbody}</table></div>`;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const headings = [];
  let i = 0;
  let inList = false;
  let inCode = false;
  let codeLines = [];

  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      i += 1;
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      i += 1;
      continue;
    }

    if (line.trim().includes("|") && lines[i + 1] && isTableDivider(lines[i + 1])) {
      closeList();
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (lines[i] && lines[i].trim().includes("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = `${slugify(text)}-${headings.length}`;
      headings.push({ level, text, id });
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      i += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inlineMarkdown(line.replace(/^\s*[-*]\s+/, ""))}</li>`);
      i += 1;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      closeList();
      html.push(`<p>${inlineMarkdown(line.trim())}</p>`);
      i += 1;
      continue;
    }

    if (/^\s*---+\s*$/.test(line)) {
      closeList();
      html.push("<hr />");
      i += 1;
      continue;
    }

    if (!line.trim()) {
      closeList();
      i += 1;
      continue;
    }

    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
    i += 1;
  }

  closeList();
  return { html: html.join("\n"), headings };
}

function getFilteredDocs() {
  const query = state.search.trim().toLowerCase();
  if (!query) return docs;

  return docs.filter((doc) => {
    const haystack = `${doc.title} ${doc.file} ${doc.markdown}`.toLowerCase();
    return haystack.includes(query);
  });
}

function renderNav() {
  const filtered = getFilteredDocs();
  docNav.innerHTML = "";

  if (!filtered.length) {
    docNav.innerHTML = '<div class="empty-state">검색 결과가 없습니다.</div>';
    return;
  }

  filtered.forEach((doc) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `doc-button${doc.slug === state.activeSlug ? " active" : ""}`;
    button.innerHTML = `${escapeHtml(doc.title)}<small>${escapeHtml(doc.file)}</small>`;
    button.addEventListener("click", () => {
      setActiveDoc(doc.slug);
      closeSidebar();
    });
    docNav.appendChild(button);
  });
}

function renderToc(headings) {
  const visibleHeadings = headings.filter((heading) => heading.level === 2 || heading.level === 3).slice(0, 24);
  tocNav.innerHTML = visibleHeadings
    .map((heading) => `<a class="toc-link" href="#${heading.id}">${escapeHtml(heading.text)}</a>`)
    .join("");
}

function setActiveDoc(slug) {
  const doc = docs.find((item) => item.slug === slug) || docs[0];
  if (!doc) return;

  state.activeSlug = doc.slug;
  const rendered = renderMarkdown(doc.markdown);
  content.innerHTML = rendered.html;
  currentTitle.textContent = doc.title;
  docFile.textContent = doc.file;
  docCount.textContent = `${docs.length} docs`;
  sourceLink.href = `../CTK_PROJECT/${doc.file}`;
  renderNav();
  renderToc(rendered.headings);
  history.replaceState(null, "", `#${doc.slug}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderNav();
});

menuButton.addEventListener("click", openSidebar);
overlay.addEventListener("click", closeSidebar);

const initialSlug = window.location.hash.replace("#", "") || "master-roadmap";
state.activeSlug = docs.some((doc) => doc.slug === initialSlug) ? initialSlug : docs[0]?.slug || "";
setActiveDoc(state.activeSlug);

