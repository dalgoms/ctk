# ARAM Huvis Current Exposure URLs

## Why
ARAM Huvis는 ChoiceDX의 주요 비교 대상이므로, 경쟁 분석 전에 현재 노출 URL 구조를 먼저 파악해야 한다.

## What
사용자가 제공한 `sitemap-filtered-urls (4).txt` 기준 ARAM Huvis 관련 URL은 총 170개다.

## How
URL 구조만 기준으로 도메인, 언어, 제품, 파트너, 앱, 외부 신뢰 신호, 이미지 자산을 분류했다.

## Result
ARAM Huvis는 다국어 웹사이트, 제품군, 글로벌 파트너/디스트리뷰터, 앱스토어, CES 수상, YouTube, LILAI 도메인까지 연결된 넓은 검색 노출 구조를 가진다.

---

## Domain Summary

| Domain / Source | Count | Role |
|---|---:|---|
| `www.aramhuvis.com` | 130 | 공식 웹사이트, 제품, 회사, 다국어 페이지 |
| `play.google.com` | 4 | 앱 다운로드 / 모바일 서비스 노출 |
| `update.aramhuvis.com` | 4 | 소프트웨어 업데이트 / 다운로드 |
| `lilai.ai` | 3 | LILAI 관련 제품/브랜드 도메인 |
| `apps.apple.com` | 3 | iOS 앱 다운로드 |
| `itunes.apple.com` | 2 | iOS 앱 다운로드 레거시 링크 |
| 기타 외부 도메인 | 24 | 파트너, 디스트리뷰터, 미디어, 수상, 유통 링크 |

---

## URL Type Summary

| Type | Count | Examples | Analysis Use |
|---|---:|---|---|
| Korean Official Pages | 51 | `/ko/`, `/ko/about-us/`, `/ko/aiscalpgrader/` | 국내 고객용 IA, 메시지, SEO 분석 |
| English Official Pages | 33 | `/`, `/about-us/`, `/apm-pro`, `/api` | 글로벌 SEO/GEO 분석 |
| Chinese Official Pages | 22 | `/zh-hans/`, `/zh-hans/about-us/` | 글로벌 확장성, hreflang 가능성 |
| Product / Business Pages | 61 | `aiscalpgrader`, `asm`, `apm-pro`, `api`, `asw`, `lilai-view` | 제품 포트폴리오, Keyword, Sales 분석 |
| Partner / Distributor Links | 23 | `partners`, `distributor`, 외부 국가별 파트너 | Global, Trust, Citation 분석 |
| App / Download Links | 11 | Google Play, App Store, update server | Product ecosystem, Technology 분석 |
| Image Assets | 24 | `/wp-content/uploads/...jpg` | Crawl bloat, 이미지 SEO, UX 자료 |
| Trust / Media | 3 | CES, YouTube | PR, Authority, Trust 분석 |
| Invalid / Noisy URLs | 2 | `http://www.youtube.com&/`, `/ko/&` | Technical SEO 리스크 |

---

## Initial IA Grouping

| IA Group | Representative URLs | Competitive Meaning |
|---|---|---|
| Corporate | `/ko/about-us/`, `/ko/ceo-message/`, `/ko/history-2/` | 회사 신뢰와 브랜드 히스토리 강조 |
| Product / Analyzer | `/ko/analyzer-business-division/`, `/ko/aiscalpgrader/`, `/ko/asm/`, `/ko/apm-pro/`, `/ko/api/`, `/ko/asw/` | 진단기기 제품군과 기술 라인업 노출 |
| Global | `/`, `/zh-hans/`, `/analyzer-business-division/partners/`, `/distributor/` | 다국어/글로벌 파트너 네트워크 |
| Content / Download | `/ko/downloads/`, App Store, Google Play, update server | 소프트웨어와 자료 다운로드 기반 |
| Trust / PR | CES Innovation Awards, YouTube | 외부 권위와 미디어 신뢰 |
| LILAI | `https://lilai.ai/`, LILAI product pages | 별도 브랜드/커머스/스킨케어 연결 가능성 |

---

## SEO/GEO Implications

| Area | Strength | Risk | ChoiceDX Implication |
|---|---|---|---|
| Discoverability | 공식 도메인과 외부 도메인 노출 범위가 넓다 | 중복/노이즈 URL이 섞여 있다 | ChoiceDX는 작지만 깨끗한 URL 구조로 차별화 가능 |
| Entity | 회사, 제품, 앱, 파트너, 수상 정보가 연결되어 있다 | ARAM Huvis/LILAI 등 Entity가 분산될 수 있다 | ChoiceDX는 CTK/ChoiceDX 관계를 명확히 해야 함 |
| Product SEO | 제품별 개별 페이지가 많다 | 제품명이 고객 문제 키워드와 연결되는지는 추가 확인 필요 | ChoiceDX도 DX Smart/Prime/Pico/Self별 Keyword Map 필요 |
| Trust | CES, 파트너, 디스트리뷰터, 앱스토어 노출이 있다 | 근거가 흩어져 AI가 요약하기 어려울 수 있다 | ChoiceDX는 Trust 섹션과 Citation을 구조화해야 함 |
| Global | 한국어/영어/중국어 페이지와 글로벌 파트너가 있다 | hreflang/canonical 관리가 중요하다 | ChoiceDX 글로벌 페이지의 언어/검색 전략 필요 |

---

## Next Action

| Priority | Action | Owner | Expected Output |
|---|---|---|---|
| P0 | ARAM Huvis URL 기반 SWOT을 Competitor Framework에 반영 | PM | Filled Competitor Analysis |
| P1 | ARAM Huvis 제품군과 ChoiceDX 제품군 비교 | PM | Product Comparison Matrix |
| P1 | ARAM Huvis Trust 요소와 ChoiceDX Trust gap 비교 | PM | Trust Gap Analysis |
| P1 | ARAM Huvis 다국어/글로벌 구조와 ChoiceDX Global 구조 비교 | PM | Global SEO/GEO Notes |

