# ChoiceDX SEO Audit Template

## Audit 목적

### 문제
- ChoiceDX가 검색과 AI Search에서 발견되지 않으면 브랜드 인지도, 리드, 세일즈 기회가 줄어든다.

### 원인
- 검색노출은 단순 키워드 문제가 아니라 Index, Metadata, 페이지 구조, 내부 링크, 성능, Schema, 콘텐츠 신뢰도, AI Search 적합성이 함께 작동한다.

### 해결
- SEO/GEO 관점에서 웹사이트를 동일한 기준으로 점검하고 개선 우선순위를 정한다.

### 실행
- 각 항목별 현재 상태, 문제, 원인, 해결, 실행, 성과, Priority, Owner, Due를 기록한다.
- 확인 근거가 있는 경우 URL, 검색어, 캡처, 도구 결과를 Evidence에 남긴다.

### 성과
- ChoiceDX의 검색 발견 가능성과 AI Search 노출 가능성을 높일 수 있는 실행 리스트가 만들어진다.

---

## Audit Status 기준

| Status | 의미 |
|---|---|
| Good | 현재 기준 충족 |
| Needs Fix | 개선 필요 |
| Missing | 항목 없음 |
| Unknown | 확인 필요 |
| N/A | 해당 없음 |

## Priority 기준

| Priority | 의미 |
|---|---|
| P0 | 검색노출과 인덱싱에 직접 영향을 주는 즉시 수정 항목 |
| P1 | 검색 품질, 클릭률, 콘텐츠 이해도 개선 항목 |
| P2 | 고도화, 구조화, 장기 개선 항목 |

---

## SEO Audit Master Table

| Index | Audit Area | Current Status | 문제 | 원인 | 해결 | 실행 | 성과 | Priority | Owner | Due | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Index | Unknown |  |  |  |  |  | P0 | PM / 개발 |  |  |
| 2 | Metadata | Unknown |  |  |  |  |  | P0 | PM / 개발 |  |  |
| 3 | Title | Unknown |  |  |  |  |  | P0 | PM |  |  |
| 4 | Description | Unknown |  |  |  |  |  | P0 | PM |  |  |
| 5 | H1 | Unknown |  |  |  |  |  | P0 | PM / 개발 |  |  |
| 6 | H2 | Unknown |  |  |  |  |  | P1 | PM |  |  |
| 7 | Internal Link | Unknown |  |  |  |  |  | P1 | PM / 개발 |  |  |
| 8 | Schema | Unknown |  |  |  |  |  | P1 | PM / 개발 |  |  |
| 9 | Image | Unknown |  |  |  |  |  | P1 | PM / 디자인 / 개발 |  |  |
| 10 | Performance | Unknown |  |  |  |  |  | P1 | 개발 |  |  |
| 11 | Sitemap | Unknown |  |  |  |  |  | P0 | 개발 |  |  |
| 12 | Robots | Unknown |  |  |  |  |  | P0 | 개발 |  |  |
| 13 | Google Search Console | Unknown |  |  |  |  |  | P0 | PM / 개발 |  |  |
| 14 | Keyword | Unknown |  |  |  |  |  | P0 | PM |  |  |
| 15 | Discoverability | Unknown |  |  |  |  |  | P0 | PM |  |  |
| 16 | AI Search | Unknown |  |  |  |  |  | P1 | PM |  |  |

---

## 1. Index

### 점검 목적
- ChoiceDX 페이지가 Google에 인덱싱되어 검색 결과에 노출될 수 있는지 확인한다.

### 확인 항목
- 주요 페이지가 Google에 색인되어 있는가
- `site:` 검색에서 페이지가 확인되는가
- 브랜드명 검색 시 공식 페이지가 노출되는가
- noindex 설정이 없는가
- canonical 설정이 올바른가

### Audit Template
| Page URL | Indexed? | Canonical | Noindex | Issue | Priority | Recommended Action | Owner | Due |
|---|---|---|---|---|---|---|---|---|
|  | Unknown |  |  |  | P0 |  | 개발 |  |

---

## 2. Metadata

### 점검 목적
- 각 페이지가 검색엔진과 AI Search에 명확히 이해될 수 있도록 기본 메타데이터를 확인한다.

### 확인 항목
- Title이 있는가
- Description이 있는가
- OG Title / OG Description이 있는가
- Canonical URL이 있는가
- Language 설정이 적절한가

### Audit Template
| Page URL | Title | Description | OG Title | OG Description | Canonical | Lang | Issue | Priority | Action |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  | P0 |  |

---

## 3. Title

### 점검 목적
- 검색 결과에서 클릭을 유도하고 페이지 주제를 명확히 전달하는 Title을 만든다.

### 확인 항목
- 페이지별 Title이 고유한가
- 핵심 키워드가 포함되어 있는가
- 브랜드명이 적절히 포함되어 있는가
- 너무 길거나 짧지 않은가
- 고객 검색 의도와 연결되는가

### Audit Template
| Page URL | Current Title | Target Keyword | Issue | Recommended Title | Priority | Owner |
|---|---|---|---|---|---|---|
|  |  |  |  |  | P0 | PM |

---

## 4. Description

### 점검 목적
- 검색 결과에서 ChoiceDX의 가치와 클릭 이유를 명확히 전달한다.

### 확인 항목
- 페이지별 Description이 고유한가
- 고객 문제와 제품 가치가 포함되어 있는가
- 핵심 키워드가 자연스럽게 포함되어 있는가
- CTA 또는 다음 행동이 암시되어 있는가
- 너무 길거나 짧지 않은가

### Audit Template
| Page URL | Current Description | Issue | Recommended Description | Target Keyword | Priority | Owner |
|---|---|---|---|---|---|---|
|  |  |  |  |  | P0 | PM |

---

## 5. H1

### 점검 목적
- 페이지의 핵심 주제를 사용자와 검색엔진 모두에게 명확히 전달한다.

### 확인 항목
- 페이지당 H1이 하나인가
- H1이 페이지 목적과 일치하는가
- 핵심 키워드 또는 가치 제안이 포함되어 있는가
- 브랜드 중심이 아니라 고객 관점으로 쓰였는가

### Audit Template
| Page URL | Current H1 | Issue | Recommended H1 | Target Keyword | Priority | Owner |
|---|---|---|---|---|---|---|
|  |  |  |  |  | P0 | PM |

---

## 6. H2

### 점검 목적
- 페이지 내용을 검색엔진과 사용자가 이해하기 쉬운 섹션 구조로 나눈다.

### 확인 항목
- H2가 논리적인 정보 흐름을 만드는가
- 고객 문제, 제품 가치, 기술, 신뢰, CTA를 구분하는가
- 키워드를 과도하지 않게 포함하는가
- H2 아래 내용이 충분한가

### Audit Template
| Page URL | Current H2 Structure | Issue | Recommended H2 Structure | Priority | Owner |
|---|---|---|---|---|---|
|  |  |  |  | P1 | PM |

---

## 7. Internal Link

### 점검 목적
- 주요 페이지와 콘텐츠가 서로 연결되어 검색엔진 크롤링과 사용자 탐색을 돕는다.

### 확인 항목
- 홈페이지에서 주요 페이지로 연결되는가
- 제품, 기술, 사례, 문의 페이지가 연결되는가
- 앵커 텍스트가 의미 있는가
- 중요한 페이지가 고립되어 있지 않은가

### Audit Template
| Source Page | Target Page | Anchor Text | Issue | Recommended Link | Priority | Owner |
|---|---|---|---|---|---|---|
|  |  |  |  |  | P1 | PM / 개발 |

---

## 8. Schema

### 점검 목적
- 검색엔진과 AI Search가 ChoiceDX의 회사, 제품, FAQ, 콘텐츠를 구조적으로 이해할 수 있게 한다.

### 확인 항목
- Organization Schema가 있는가
- Product 또는 SoftwareApplication Schema 적용 가능성이 있는가
- FAQ Schema 적용 가능성이 있는가
- Breadcrumb Schema가 있는가
- 구조화 데이터 오류가 없는가

### Audit Template
| Page URL | Schema Type | Current Status | Issue | Recommended Schema | Priority | Owner |
|---|---|---|---|---|---|---|
|  | Organization / Product / FAQ / Breadcrumb | Unknown |  |  | P1 | 개발 |

---

## 9. Image

### 점검 목적
- 이미지가 검색, 접근성, 성능, 제품 이해에 기여하도록 관리한다.

### 확인 항목
- 이미지 alt text가 있는가
- 파일명이 의미 있는가
- 이미지 용량이 최적화되어 있는가
- 제품이나 결과를 설명하는 이미지가 충분한가
- OG Image가 설정되어 있는가

### Audit Template
| Page URL | Image | Alt Text | File Size | Issue | Recommended Action | Priority | Owner |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  | P1 | 디자인 / 개발 |

---

## 10. Performance

### 점검 목적
- 페이지 로딩 속도와 사용자 경험을 개선해 검색 품질과 전환 가능성을 높인다.

### 확인 항목
- 모바일 로딩 속도가 적절한가
- Core Web Vitals 문제가 있는가
- 이미지, JS, CSS가 과도하지 않은가
- 첫 화면 콘텐츠가 빠르게 표시되는가

### Audit Template
| Page URL | Mobile Score | Desktop Score | LCP | CLS | INP | Issue | Priority | Owner |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  | P1 | 개발 |

---

## 11. Sitemap

### 점검 목적
- 검색엔진이 주요 페이지를 발견하고 색인할 수 있게 한다.

### 확인 항목
- XML sitemap이 있는가
- sitemap에 주요 페이지가 포함되어 있는가
- 깨진 URL이나 불필요한 URL이 없는가
- Google Search Console에 제출되어 있는가

### Audit Template
| Sitemap URL | Exists? | Submitted to GSC? | Issue | Recommended Action | Priority | Owner |
|---|---|---|---|---|---|---|
|  | Unknown | Unknown |  |  | P0 | 개발 |

---

## 12. Robots

### 점검 목적
- 검색엔진 크롤링이 의도대로 허용되거나 제한되는지 확인한다.

### 확인 항목
- robots.txt가 있는가
- 주요 페이지가 차단되어 있지 않은가
- sitemap 경로가 robots.txt에 포함되어 있는가
- 불필요한 차단 규칙이 없는가

### Audit Template
| Robots URL | Exists? | Blocks Important Pages? | Sitemap Included? | Issue | Priority | Owner |
|---|---|---|---|---|---|---|
|  | Unknown | Unknown | Unknown |  | P0 | 개발 |

---

## 13. Google Search Console

### 점검 목적
- 실제 검색노출, 색인, 클릭, 쿼리 데이터를 확인한다.

### 확인 항목
- GSC 접근 권한이 있는가
- 색인 오류가 있는가
- 노출/클릭/CTR/평균 순위를 확인했는가
- 주요 검색어가 확인되는가
- sitemap 제출 상태를 확인했는가

### Audit Template
| Property | Access | Index Issues | Top Queries | Clicks | Impressions | CTR | Avg Position | Issue | Action |
|---|---|---|---|---|---|---|---|---|---|
|  | Unknown |  |  |  |  |  |  |  |  |

---

## 14. Keyword

### 점검 목적
- ChoiceDX가 어떤 검색어로 발견되어야 하는지 정의한다.

### 확인 항목
- 브랜드 키워드가 있는가
- 제품 키워드가 있는가
- 고객 문제 키워드가 있는가
- 경쟁사 대비 선점 가능한 키워드가 있는가
- 국문/영문 키워드가 구분되어 있는가

### Audit Template
| Keyword | Type | Intent | Current Ranking | Target Page | Priority | Notes |
|---|---|---|---|---|---|---|
|  | Brand / Product / Problem / Competitor / Global | Informational / Commercial / Navigational | Unknown |  | P0 |  |

---

## 15. Discoverability

### 점검 목적
- 고객이 검색, 외부 링크, SNS, PR, 콘텐츠를 통해 ChoiceDX를 발견할 수 있는지 확인한다.

### 확인 항목
- 브랜드명 검색에서 공식 웹사이트가 보이는가
- 제품 카테고리 검색에서 발견되는가
- 외부 매체나 레퍼런스에서 언급되는가
- SNS와 PR에서 웹사이트로 연결되는가
- 영문 검색에서도 발견 가능한가

### Audit Template
| Channel | Query / Source | Current Result | Issue | Opportunity | Priority | Action |
|---|---|---|---|---|---|---|
| Google / AI Search / SNS / PR / External Link |  |  |  |  | P0 |  |

---

## 16. AI Search

### 점검 목적
- AI 검색 환경에서 ChoiceDX가 정확하고 신뢰도 있게 설명될 수 있는지 확인한다.

### 확인 항목
- AI가 ChoiceDX를 정확히 설명하는가
- 공식 출처와 외부 출처가 충분한가
- 제품 카테고리와 차별점이 명확한가
- FAQ, 비교, 기술 설명, 사례 콘텐츠가 있는가
- AI가 잘못 설명할 가능성이 있는 표현이 있는가

### Audit Template
| Prompt / Query | AI Result Summary | Accuracy | Missing Point | Risk | Recommended Content | Priority |
|---|---|---|---|---|---|---|
|  |  | Unknown |  |  |  | P1 |

---

## SEO Issue Backlog

| Priority | Issue | Area | Page URL | Recommended Action | Owner | Due | Status |
|---|---|---|---|---|---|---|---|
| P0 |  |  |  |  |  |  | Todo |
| P1 |  |  |  |  |  |  | Todo |
| P2 |  |  |  |  |  |  | Todo |

---

## SEO Audit Summary

### 문제
-

### 원인
-

### 해결
-

### 실행
-

### 성과
-

