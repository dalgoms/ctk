# ChoiceDX GEO Audit Framework

## GEO Audit 목적

### 문제
- ChoiceDX가 Google 검색뿐 아니라 ChatGPT, Gemini, Claude, Perplexity 같은 AI Search 환경에서 정확히 발견되고 설명되지 않으면 브랜드 존재감과 리드 기회가 줄어든다.

### 원인
- AI Search는 단순 키워드보다 Entity, Authority, Citation, Content Structure, Metadata, FAQ, Structured Data, 외부 언급을 함께 참고한다.

### 해결
- ChoiceDX를 AI Search Ready 상태로 만들기 위해 Google과 주요 AI Search 플랫폼 기준으로 GEO 상태를 점검한다.

### 실행
- Discoverability, Knowledge, Entity, Metadata, Citation, Authority, Internal Link, Content Structure, Language, FAQ, Structured Data, AI Friendly Score를 점검한다.
- 플랫폼별 검색 결과와 답변 품질을 기록한다.
- 부족한 항목은 SEO/GEO 실행 과제로 전환한다.

### 성과
- ChoiceDX가 검색엔진과 AI Search에서 더 잘 발견되고, 더 정확하게 설명되며, 신뢰 가능한 브랜드로 인식될 수 있다.

---

## Audit Platforms

| Platform | Audit Purpose | Main Question |
|---|---|---|
| Google | 전통 검색 노출과 색인 상태 확인 | ChoiceDX가 검색 결과에서 발견되는가 |
| ChatGPT | AI 답변 내 브랜드 이해도 확인 | ChoiceDX를 정확히 설명하는가 |
| Gemini | Google 생태계 기반 AI 검색 가능성 확인 | Google 기반 정보와 연결되는가 |
| Claude | 긴 문맥 기반 브랜드/제품 이해도 확인 | 제품 설명과 차별점을 구조적으로 이해하는가 |
| Perplexity | 출처 기반 AI 검색 노출 확인 | 신뢰 가능한 Citation과 함께 언급되는가 |

---

## Status 기준

| Status | Meaning |
|---|---|
| Good | 기준 충족 |
| Needs Fix | 개선 필요 |
| Missing | 항목 없음 |
| Unknown | 확인 필요 |
| N/A | 해당 없음 |

## Priority 기준

| Priority | Meaning |
|---|---|
| P0 | AI Search 발견 가능성에 직접 영향을 주는 핵심 항목 |
| P1 | 답변 품질, 신뢰도, 인용 가능성을 높이는 항목 |
| P2 | 장기 고도화 및 운영 개선 항목 |

---

## GEO Audit Master Table

| Index | Area | Google | ChatGPT | Gemini | Claude | Perplexity | Current Status | Issue | Recommended Action | Priority | Owner | Due | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Discoverability |  |  |  |  |  | Unknown |  |  | P0 | PM |  |  |
| 2 | Knowledge |  |  |  |  |  | Unknown |  |  | P0 | PM |  |  |
| 3 | Entity |  |  |  |  |  | Unknown |  |  | P0 | PM / 개발 |  |  |
| 4 | Metadata |  |  |  |  |  | Unknown |  |  | P0 | PM / 개발 |  |  |
| 5 | Citation |  |  |  |  |  | Unknown |  |  | P1 | PM / PR |  |  |
| 6 | Authority |  |  |  |  |  | Unknown |  |  | P1 | PM / PR |  |  |
| 7 | Internal Link |  |  |  |  |  | Unknown |  |  | P1 | PM / 개발 |  |  |
| 8 | Content Structure |  |  |  |  |  | Unknown |  |  | P0 | PM |  |  |
| 9 | Language |  |  |  |  |  | Unknown |  |  | P1 | PM |  |  |
| 10 | FAQ |  |  |  |  |  | Unknown |  |  | P1 | PM |  |  |
| 11 | Structured Data |  |  |  |  |  | Unknown |  |  | P1 | PM / 개발 |  |  |
| 12 | AI Friendly Score |  |  |  |  |  | Unknown |  |  | P0 | PM |  |  |

---

## 1. Discoverability

### 분석 질문
- ChoiceDX가 브랜드명, 제품명, 문제 키워드, 카테고리 키워드로 발견되는가
- 공식 웹사이트가 검색 결과와 AI 답변에서 확인되는가
- AI Search가 ChoiceDX를 다른 브랜드와 혼동하지 않는가

### Audit Template
| Platform | Query | Result | Official Site Found? | Accuracy | Issue | Priority | Action |
|---|---|---|---|---|---|---|---|
| Google | ChoiceDX |  | Unknown | Unknown |  | P0 |  |
| ChatGPT | What is ChoiceDX? |  | Unknown | Unknown |  | P0 |  |
| Gemini | ChoiceDX |  | Unknown | Unknown |  | P0 |  |
| Claude | Explain ChoiceDX |  | Unknown | Unknown |  | P0 |  |
| Perplexity | ChoiceDX |  | Unknown | Unknown |  | P0 |  |

---

## 2. Knowledge

### 분석 질문
- AI가 ChoiceDX의 회사, 제품, 카테고리, 고객, 가치 제안을 정확히 설명하는가
- 답변에 빠진 핵심 정보는 무엇인가
- 잘못 설명되거나 추측되는 정보가 있는가

### Audit Template
| Platform | AI Answer Summary | Correct Points | Missing Points | Wrong Points | Recommended Source Content | Priority |
|---|---|---|---|---|---|---|
| ChatGPT |  |  |  |  |  | P0 |
| Gemini |  |  |  |  |  | P0 |
| Claude |  |  |  |  |  | P0 |
| Perplexity |  |  |  |  |  | P0 |

---

## 3. Entity

### 분석 질문
- ChoiceDX가 독립적인 브랜드/제품 Entity로 인식될 수 있는가
- 회사명, 제품명, 카테고리, URL, 설명, 관련 조직이 일관되게 연결되는가
- 다른 ChoiceDX 또는 유사 명칭과 혼동될 가능성은 없는가

### Audit Template
| Entity Element | Current Value | Consistency | Issue | Recommended Fix | Priority | Owner |
|---|---|---|---|---|---|---|
| Brand Name | ChoiceDX | Unknown |  |  | P0 | PM |
| Company | CTK | Unknown |  |  | P0 | PM |
| Product Category |  | Unknown |  |  | P0 | PM |
| Official URL |  | Unknown |  |  | P0 | PM |
| Social Profiles |  | Unknown |  |  | P1 | PM / 마케팅 |
| External Mentions |  | Unknown |  |  | P1 | PR |

---

## 4. Metadata

### 분석 질문
- Title, Description, OG, canonical, language 설정이 AI와 검색엔진이 이해하기 쉽게 작성되어 있는가
- 페이지별 메타데이터가 중복되지 않는가
- 브랜드, 카테고리, 가치 제안이 포함되어 있는가

### Audit Template
| Page URL | Title | Description | OG Title | OG Description | Canonical | Lang | Issue | Action | Priority |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  | P0 |

---

## 5. Citation

### 분석 질문
- AI Search가 인용할 수 있는 공식 출처와 외부 출처가 충분한가
- Perplexity에서 Citation이 붙는가
- 외부 기사, 파트너 페이지, 보도자료, 디렉토리, 리포트가 존재하는가

### Audit Template
| Source Type | Source URL | Mention Quality | Citation Value | Issue | Recommended Action | Priority |
|---|---|---|---|---|---|---|
| Official Website |  | Unknown | High |  |  | P0 |
| PR / News |  | Unknown | High |  |  | P1 |
| Partner |  | Unknown | Medium |  |  | P1 |
| Social |  | Unknown | Low |  |  | P2 |
| Directory / Listing |  | Unknown | Medium |  |  | P2 |

---

## 6. Authority

### 분석 질문
- ChoiceDX와 CTK가 신뢰 가능한 출처로 보이는가
- 인증, 고객 사례, 파트너, 논문, 수상, 언론 보도 등 권위 신호가 있는가
- 의료/진단/기술 관련 신뢰 요소가 명확한가

### Audit Template
| Authority Signal | Current Status | Evidence | Gap | Recommended Action | Priority | Owner |
|---|---|---|---|---|---|---|
| Certification | Unknown |  |  |  | P1 | PM / 법무 |
| Client / Case | Unknown |  |  |  | P1 | 영업 |
| Partner | Unknown |  |  |  | P1 | PM |
| PR / Media | Unknown |  |  |  | P1 | PR |
| Technology Proof | Unknown |  |  |  | P1 | PO |

---

## 7. Internal Link

### 분석 질문
- AI와 검색엔진이 ChoiceDX의 핵심 페이지를 따라가며 이해할 수 있는가
- 제품, 기술, 사례, FAQ, 문의 페이지가 서로 연결되어 있는가
- 앵커 텍스트가 의미 있게 작성되어 있는가

### Audit Template
| Source Page | Target Page | Anchor Text | Relevance | Issue | Recommended Link | Priority |
|---|---|---|---|---|---|---|
| Homepage | Product |  | Unknown |  |  | P1 |
| Product | Technology |  | Unknown |  |  | P1 |
| Product | FAQ |  | Unknown |  |  | P1 |
| FAQ | Contact |  | Unknown |  |  | P1 |

---

## 8. Content Structure

### 분석 질문
- AI가 ChoiceDX를 짧고 정확하게 요약할 수 있는 구조인가
- 페이지에 정의, 대상 고객, 문제, 해결, 기능, 기술, 신뢰, FAQ가 명확히 구분되어 있는가
- H1/H2/H3 구조가 논리적인가

### Audit Template
| Content Block | Exists? | Quality | Issue | Recommended Structure | Priority |
|---|---|---|---|---|---|
| What is ChoiceDX | Unknown | Unknown |  | 제품 정의 섹션 | P0 |
| Who it is for | Unknown | Unknown |  | 타깃 고객 섹션 | P0 |
| Problem | Unknown | Unknown |  | 고객 문제 섹션 | P0 |
| Solution | Unknown | Unknown |  | 해결 방식 섹션 | P0 |
| Features | Unknown | Unknown |  | 기능 섹션 | P1 |
| Technology | Unknown | Unknown |  | 기술 설명 섹션 | P1 |
| Trust | Unknown | Unknown |  | 신뢰 요소 섹션 | P1 |
| FAQ | Unknown | Unknown |  | 질문/답변 섹션 | P1 |

---

## 9. Language

### 분석 질문
- 고객이 검색하는 언어와 웹사이트 언어가 일치하는가
- 전문 용어가 고객에게 이해 가능한 방식으로 설명되는가
- 국문/영문 메시지가 일관적인가
- 글로벌 AI Search에 대응할 영어 설명이 있는가

### Audit Template
| Language Area | Current Expression | Issue | Recommended Expression | Target User | Priority |
|---|---|---|---|---|---|
| One-line Description |  |  |  | First-time Visitor | P0 |
| Product Category |  |  |  | Search User | P0 |
| Customer Problem |  |  |  | Buyer | P0 |
| Technology Explanation |  |  |  | Decision Maker | P1 |
| English Summary |  |  |  | Global User / AI Search | P1 |

---

## 10. FAQ

### 분석 질문
- AI Search가 답변으로 가져가기 쉬운 Q&A가 있는가
- 고객 질문, 세일즈 질문, 법무상 안전한 답변이 구조화되어 있는가
- FAQ가 검색 키워드와 연결되는가

### Audit Template
| Question | Answer Exists? | Answer Quality | Keyword | Legal Risk | Recommended Answer | Priority |
|---|---|---|---|---|---|---|
| What is ChoiceDX? | Unknown | Unknown | ChoiceDX | Unknown |  | P0 |
| Who is ChoiceDX for? | Unknown | Unknown |  | Unknown |  | P0 |
| How does ChoiceDX work? | Unknown | Unknown |  | Unknown |  | P1 |
| What makes ChoiceDX different? | Unknown | Unknown |  | Unknown |  | P1 |
| How can customers contact or request demo? | Unknown | Unknown |  | Low |  | P1 |

---

## 11. Structured Data

### 분석 질문
- Organization, Product, FAQ, Breadcrumb 등 구조화 데이터가 적용되어 있는가
- 검색엔진과 AI가 ChoiceDX Entity를 이해할 수 있는가
- 구조화 데이터 오류가 없는가

### Audit Template
| Schema Type | Applicable? | Current Status | Issue | Recommended Properties | Priority | Owner |
|---|---|---|---|---|---|---|
| Organization | Yes | Unknown |  | name, url, logo, sameAs | P0 | 개발 |
| Product | TBD | Unknown |  | name, description, brand, category | P1 | 개발 |
| SoftwareApplication | TBD | Unknown |  | name, applicationCategory, operatingSystem | P1 | 개발 |
| FAQPage | Yes | Unknown |  | question, answer | P1 | 개발 |
| BreadcrumbList | Yes | Unknown |  | itemListElement | P1 | 개발 |

---

## 12. AI Friendly Score

### 점수 기준
| Score | Meaning |
|---|---|
| 5 | AI가 정확히 발견하고 설명할 수 있음 |
| 4 | 대부분 설명 가능하나 일부 보강 필요 |
| 3 | 기본 정보는 있으나 구조와 출처가 부족함 |
| 2 | AI가 추측하거나 부정확하게 설명할 가능성이 큼 |
| 1 | 정보가 거의 없어 AI Search Ready 상태가 아님 |

### Score Template
| Area | Score 1-5 | Reason | Required Fix | Priority |
|---|---|---|---|---|
| Discoverability |  |  |  | P0 |
| Knowledge |  |  |  | P0 |
| Entity |  |  |  | P0 |
| Metadata |  |  |  | P0 |
| Citation |  |  |  | P1 |
| Authority |  |  |  | P1 |
| Internal Link |  |  |  | P1 |
| Content Structure |  |  |  | P0 |
| Language |  |  |  | P1 |
| FAQ |  |  |  | P1 |
| Structured Data |  |  |  | P1 |

### Total AI Friendly Score
| Total Score | Readiness Level | Interpretation |
|---|---|---|
| 45-55 | AI Search Ready | 발견, 설명, 인용 가능성이 높음 |
| 34-44 | Partially Ready | 핵심 구조는 있으나 보강 필요 |
| 23-33 | Weak | 일부 정보는 있으나 AI 답변 품질이 낮을 수 있음 |
| 11-22 | Not Ready | AI Search 대응이 거의 되어 있지 않음 |

---

## Platform-Specific Audit

### Google
| Query | Result Rank | Official Page Found? | Snippet Quality | Issue | Action |
|---|---|---|---|---|---|
| ChoiceDX |  | Unknown |  |  |  |
| CTK ChoiceDX |  | Unknown |  |  |  |
|  |  | Unknown |  |  |  |

### ChatGPT
| Prompt | Answer Accuracy | Source Mentioned? | Missing Info | Risk | Action |
|---|---|---|---|---|---|
| What is ChoiceDX? | Unknown | Unknown |  |  |  |
| Explain CTK ChoiceDX. | Unknown | Unknown |  |  |  |
|  | Unknown | Unknown |  |  |  |

### Gemini
| Prompt | Answer Accuracy | Google Source Alignment | Missing Info | Risk | Action |
|---|---|---|---|---|---|
| What is ChoiceDX? | Unknown | Unknown |  |  |  |
|  | Unknown | Unknown |  |  |  |

### Claude
| Prompt | Answer Accuracy | Reasoning Quality | Missing Info | Risk | Action |
|---|---|---|---|---|---|
| Explain ChoiceDX for a business buyer. | Unknown | Unknown |  |  |  |
|  | Unknown | Unknown |  |  |  |

### Perplexity
| Query | Answer Accuracy | Citations | Citation Quality | Missing Info | Action |
|---|---|---|---|---|---|
| ChoiceDX | Unknown |  | Unknown |  |  |
| CTK ChoiceDX | Unknown |  | Unknown |  |  |
|  | Unknown |  | Unknown |  |  |

---

## GEO Issue Backlog

| Priority | Issue | Area | Platform | Recommended Action | Owner | Due | Status |
|---|---|---|---|---|---|---|---|
| P0 |  | Discoverability | Google / AI Search |  | PM |  | Todo |
| P0 |  | Entity | All |  | PM / 개발 |  | Todo |
| P1 |  | Citation | Perplexity / Google |  | PM / PR |  | Todo |
| P1 |  | Structured Data | Google / AI Search |  | 개발 |  | Todo |

---

## GEO Audit Summary

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

