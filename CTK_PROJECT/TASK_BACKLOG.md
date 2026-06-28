# CTK ChoiceDX Task Backlog

## Backlog 기준

### 문제
- 프로젝트 범위가 SEO, 홈페이지, UX, 세일즈, PR, SNS, 문서화까지 넓기 때문에 작업 단위가 명확하지 않으면 실행 순서와 책임이 흐려진다.

### 원인
- 분석, 전략, 실행, 검수, 인수인계가 서로 연결되어 있고 각 단계의 산출물이 다음 단계의 선행조건이 된다.

### 해결
- 전체 프로젝트를 `Epic → Task → Sub Task` 구조로 분해하고, 각 작업에 Priority, Owner, Due, Dependency, Expected Output을 지정한다.

### 실행
- `P0`: 프로젝트 진행을 위해 즉시 필요한 핵심 작업
- `P1`: 7월 전략 및 실행 패키지에 필요한 주요 작업
- `P2`: 8-9월 실행 고도화 및 인수인계 작업

### 성과
- 담당자별 실행 범위, 선행조건, 산출물이 명확해지고 일정 관리가 가능해진다.

---

## Epic 1. Project Setup & Context

### Task 1.1 Project Context 정리

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 없음 |
| Expected Output | Project Context 초안 |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 회사 소개 및 사업 구조 수집 | P0 | PM / 내부 담당자 | July Week 1 | 없음 | 회사 정보 요약 |
| CTK ChoiceDX 제품 정의 수집 | P0 | PO / PM | July Week 1 | 없음 | 제품 정의 문장 |
| 타깃 고객 및 구매 의사결정자 정리 | P0 | 영업 / PM | July Week 1 | 영업 인풋 | 고객 세그먼트 |
| 프로젝트 KPI 초안 정의 | P0 | PM / 의사결정자 | July Week 1 | 프로젝트 목표 | KPI 초안 |
| 법무 검토 기준 수집 | P0 | Jay / PM | July Week 1 | 법무 인풋 | 사용 가능/금지 표현 목록 |

### Task 1.2 자료 및 링크 수집

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 내부 자료 접근 |
| Expected Output | Reference & Asset Inventory |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 공식 웹사이트 URL 확보 | P0 | PM | July Week 1 | 없음 | 웹사이트 URL |
| Sales Deck / 브로슈어 확보 | P0 | 영업 / PM | July Week 1 | 영업 자료 | 영업자료 목록 |
| Figma 링크 확보 | P1 | 디자인 / PM | July Week 2 | 디자인 자료 접근 | Figma URL |
| 기존 PR / SNS 자료 확보 | P1 | 마케팅 / PM | July Week 2 | 기존 자료 | PR/SNS 자료 목록 |
| 경쟁사 및 레퍼런스 URL 수집 | P1 | PM | July Week 2 | 경쟁사 후보 | Reference List |

---

## Epic 2. Diagnosis

### Task 2.1 Competitor Diagnosis

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 경쟁사 목록, 경쟁사 URL |
| Expected Output | Competitor Report |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 직접 경쟁사 3-5곳 확정 | P0 | PM / 영업 | July Week 1 | 영업 인풋 | 경쟁사 Shortlist |
| 간접 경쟁사 및 대체재 정리 | P1 | PM | July Week 1 | 시장 리서치 | 경쟁 구도 맵 |
| 경쟁사 홈페이지 메시지 분석 | P1 | PM | July Week 1 | 경쟁사 URL | 메시지 비교표 |
| 경쟁사 IA / UX Flow 분석 | P1 | PM | July Week 1 | 경쟁사 URL | IA/UX 비교표 |
| 경쟁사 SEO 키워드 확인 | P1 | PM | July Week 1 | 검색 리서치 | 키워드 비교표 |
| CTK 차별화 포인트 도출 | P1 | PM | July Week 1 | 경쟁사 분석 | 차별화 인사이트 |

### Task 2.2 Website Diagnosis

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 공식 웹사이트 URL |
| Expected Output | Website Diagnosis Notes |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 현재 홈페이지 구조 파악 | P0 | PM | July Week 1 | 웹사이트 URL | Current IA |
| 페이지별 핵심 메시지 분석 | P0 | PM | July Week 1 | 웹사이트 URL | Message Audit |
| CTA 및 전환 경로 확인 | P1 | PM | July Week 1 | 웹사이트 URL | CTA Audit |
| 고객 이해 흐름 진단 | P1 | PM | July Week 1 | Current IA | UX Issue List |
| 개선 우선순위 초안 작성 | P1 | PM | July Week 1 | 진단 결과 | Website Priority List |

### Task 2.3 SEO/GEO Diagnosis

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 웹사이트 URL, 핵심 키워드 후보 |
| Expected Output | SEO/GEO Diagnosis |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 브랜드 검색 결과 확인 | P0 | PM | July Week 1 | 웹사이트 URL | Brand SERP Notes |
| 핵심 키워드 후보 수집 | P0 | PM / 영업 | July Week 1 | 고객/제품 정보 | Keyword Candidate List |
| 메타데이터 확인 | P1 | PM / 개발 담당 | July Week 1 | 웹사이트 접근 | Metadata Audit |
| 페이지 제목 / H1 / 설명 구조 확인 | P1 | PM | July Week 1 | 웹사이트 URL | On-page SEO Audit |
| AI 검색 노출 여부 확인 | P1 | PM | July Week 1 | 브랜드/제품 키워드 | GEO Visibility Notes |
| SEO 개선 우선순위 작성 | P1 | PM | July Week 1 | SEO 진단 | SEO Priority List |

### Task 2.4 SNS / PR / Sales Material Diagnosis

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM |
| Due | July Week 1 |
| Dependency | 기존 SNS, PR, Sales 자료 |
| Expected Output | Channel & Message Diagnosis |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| SNS 채널 목록 확인 | P1 | PM / 마케팅 | July Week 1 | SNS URL | SNS Inventory |
| 기존 SNS 콘텐츠 유형 분석 | P1 | PM / 마케팅 | July Week 1 | SNS 자료 | SNS Pattern Notes |
| PR 메시지와 기사 자료 확인 | P1 | PM | July Week 1 | PR 자료 | PR Message Audit |
| Sales Deck 메시지 분석 | P0 | PM / 영업 | July Week 1 | Sales Deck | Sales Message Audit |
| 채널별 메시지 일관성 확인 | P1 | PM | July Week 1 | 진단 자료 | Message Consistency Notes |

---

## Epic 3. Strategy

### Task 3.1 Brand Positioning

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 2 |
| Dependency | Project Context, Competitor Report |
| Expected Output | Brand Positioning Draft |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 고객 문제 정의 | P0 | PM / 영업 | July Week 2 | 고객 정보 | Customer Problem Statement |
| CTK ChoiceDX 가치 제안 정리 | P0 | PM / PO | July Week 2 | 제품 정보 | Value Proposition |
| 경쟁사 대비 차별점 정리 | P0 | PM | July Week 2 | Competitor Report | Differentiation Map |
| 핵심 메시지 초안 작성 | P0 | PM | July Week 2 | 가치 제안 | Core Message Draft |
| 법무 검토 필요 표현 표시 | P1 | PM / Jay | July Week 2 | 법무 기준 | Legal Review Notes |

### Task 3.2 Keyword & GEO Strategy

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 2 |
| Dependency | SEO/GEO Diagnosis, 제품 정보 |
| Expected Output | Keyword & GEO Strategy |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 핵심 키워드 그룹 정의 | P0 | PM | July Week 2 | Keyword Candidate List | Keyword Map |
| 브랜드 키워드와 문제 키워드 구분 | P0 | PM | July Week 2 | Keyword Map | Keyword Grouping |
| 페이지별 타깃 키워드 매핑 | P1 | PM | July Week 2 | Current IA | Page Keyword Map |
| AI 검색용 설명 구조 정리 | P1 | PM | July Week 2 | 제품/브랜드 정보 | GEO Content Guide |
| SEO/GEO KPI 정의 | P1 | PM | July Week 2 | KPI 초안 | SEO KPI Table |

### Task 3.3 Information Architecture Strategy

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 2 |
| Dependency | Website Diagnosis, Brand Positioning, Keyword Map |
| Expected Output | IA Strategy |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 현재 IA 문제 정리 | P0 | PM | July Week 2 | Website Diagnosis | IA Issue List |
| 고객 이해 순서 설계 | P0 | PM | July Week 2 | 고객 문제 정의 | Customer Understanding Flow |
| 홈페이지 섹션 구조 제안 | P0 | PM | July Week 2 | Brand Positioning | Homepage IA Draft |
| 세일즈/PR/SNS와 연결되는 콘텐츠 구조 설계 | P1 | PM | July Week 2 | Channel Diagnosis | Cross-channel IA Notes |
| 내부 리뷰용 IA 문서 작성 | P1 | PM | July Week 2 | IA Draft | IA Strategy Document |

---

## Epic 4. Execution Package

### Task 4.1 Homepage Execution Guide

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 3 |
| Dependency | IA Strategy, Brand Positioning |
| Expected Output | Homepage Execution Guide |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 페이지별 목적 정의 | P0 | PM | July Week 3 | IA Strategy | Page Purpose Table |
| 섹션별 메시지 가이드 작성 | P0 | PM | July Week 3 | Core Message Draft | Section Message Guide |
| CTA 기준 정리 | P1 | PM / 영업 | July Week 3 | 고객 구매 여정 | CTA Guide |
| 디자인 전달용 화면 가이드 작성 | P1 | PM / 디자인 | July Week 3 | Section Guide | Screen Guide Notes |
| 홈페이지 적용 우선순위 정리 | P0 | PM | July Week 3 | 전체 실행 범위 | Homepage Priority List |

### Task 4.2 SEO Execution Guide

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | July Week 3 |
| Dependency | Keyword & GEO Strategy |
| Expected Output | SEO Guide |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| 페이지별 Title / Description 가이드 작성 | P0 | PM | July Week 3 | Page Keyword Map | Metadata Guide |
| H1/H2 구조 제안 | P1 | PM | July Week 3 | IA Strategy | Heading Structure Guide |
| 검색 의도별 콘텐츠 보강안 작성 | P1 | PM | July Week 3 | Keyword Map | Content Gap Notes |
| GEO용 Q&A / 설명 구조 제안 | P1 | PM | July Week 3 | GEO Content Guide | GEO Content Template |
| SEO 적용 체크리스트 작성 | P0 | PM | July Week 3 | SEO Guide | SEO Apply Checklist |

### Task 4.3 Sales / PR / SNS Execution Package

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM |
| Due | July Week 3 |
| Dependency | Brand Positioning, Channel Diagnosis |
| Expected Output | Sales / PR / SNS Execution Package |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| Sales Deck 메시지 개선안 작성 | P1 | PM / 영업 | July Week 3 | Sales Message Audit | Sales Message Guide |
| 세일즈 FAQ 초안 작성 | P2 | PM / 영업 | August | 고객 질문 | Sales FAQ Draft |
| PR 메시지 방향 정리 | P1 | PM | July Week 3 | Brand Positioning | PR Message Guide |
| SNS 역할 정의 | P1 | PM / 마케팅 | July Week 3 | SNS Diagnosis | SNS Strategy Draft |
| 채널별 메시지 연결표 작성 | P1 | PM | July Week 3 | 전체 메시지 | Message Alignment Table |

---

## Epic 5. UX Planning & Figma Review

### Task 5.1 UX Research & Flow

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM |
| Due | July Week 4 |
| Dependency | Website Diagnosis, Competitor UX Analysis |
| Expected Output | UX Planning |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| BECON 또는 주요 레퍼런스 UX 분석 | P1 | PM | July Week 4 | 레퍼런스 URL | BECON Analysis Notes |
| 주요 사용자 Flow 정의 | P1 | PM / PO | July Week 4 | 사용자 정보 | UX Flow |
| 화면별 고객 이해 목표 정의 | P1 | PM | July Week 4 | UX Flow | Screen Purpose Table |
| UX 병목 지점 정리 | P1 | PM | July Week 4 | Current IA / Figma | UX Issue List |
| UX Planning 문서 작성 | P1 | PM | July Week 4 | UX 분석 | UX Planning Document |

### Task 5.2 Figma Review

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM / 디자인 |
| Due | July Week 4 - August |
| Dependency | Figma Link, UX Planning |
| Expected Output | Figma Review Notes |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| Figma 화면 구조 확인 | P1 | PM / Internal Designer | July Week 4 | Figma Link | Figma Structure Notes |
| 화면별 메시지와 CTA 검수 | P1 | PM | July Week 4 | Screen Purpose Table | Screen Review Notes |
| 고객 이해 흐름 기준 리뷰 | P1 | PM | August | UX Flow | UX Review Comments |
| 디자인 적용 후 재검수 | P2 | PM / 디자인 | August | 디자인 반영 | Review Log |
| PO/디자인 전달용 수정 요청 정리 | P1 | PM | August | Figma Review | Revision Request List |

---

## Epic 6. August Execution Management

### Task 6.1 SEO / Homepage Apply Review

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM / 내부 담당자 |
| Due | August |
| Dependency | SEO Guide, Homepage Execution Guide |
| Expected Output | Apply Review Log |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| SEO 적용 현황 확인 | P1 | PM / 개발 담당 | August | SEO Apply Checklist | SEO Apply Log |
| 홈페이지 메시지 반영 여부 확인 | P1 | PM / 디자인 | August | Homepage Guide | Homepage Review Notes |
| 메타데이터 적용 검수 | P1 | PM / 개발 담당 | August | Metadata Guide | Metadata Review |
| CTA 및 전환 경로 검수 | P2 | PM / 영업 | August | Homepage Update | CTA Review |
| 수정 요청 목록 업데이트 | P1 | PM | August | Apply Review | Revision Backlog |

### Task 6.2 Sales / PR / SNS Execution Review

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM / 영업 / 마케팅 |
| Due | August |
| Dependency | Sales / PR / SNS Execution Package |
| Expected Output | Channel Execution Review |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| Sales Material 반영 여부 확인 | P1 | PM / 영업 | August | Sales Message Guide | Sales Material Review |
| PR 메시지 검수 | P1 | PM / PR 담당 | August | PR Message Guide | PR Review Notes |
| SNS 콘텐츠 방향 검수 | P2 | PM / 마케팅 | August | SNS Strategy Draft | SNS Review Notes |
| 채널별 메시지 일관성 재확인 | P1 | PM | August | 반영 자료 | Message Consistency Review |
| 실행 이슈와 다음 수정사항 정리 | P1 | PM | August | 리뷰 결과 | Execution Issue Log |

---

## Epic 7. Review, Documentation & Handover

### Task 7.1 Project Review

| Field | Detail |
|---|---|
| Priority | P1 |
| Owner | PM |
| Due | September |
| Dependency | August Execution Review |
| Expected Output | Project Review Document |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| KPI 기준 성과 점검 | P1 | PM / 의사결정자 | September | KPI Table | KPI Review |
| 산출물별 완료 기준 점검 | P1 | PM | September | Deliverables | Deliverable Review |
| 미완료 작업 정리 | P1 | PM | September | Task Backlog | Open Issue List |
| 다음 개선 과제 도출 | P1 | PM | September | Review 결과 | Next Action List |
| 프로젝트 리뷰 문서 작성 | P1 | PM | September | 전체 자료 | Review Document |

### Task 7.2 Documentation & Handover

| Field | Detail |
|---|---|
| Priority | P0 |
| Owner | PM |
| Due | September |
| Dependency | 모든 핵심 산출물 |
| Expected Output | Handover Document |

#### Sub Tasks
| Sub Task | Priority | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| Brand Growth Guide 정리 | P1 | PM | September | Brand Positioning | Brand Growth Guide |
| SEO/GEO Guide 정리 | P1 | PM | September | SEO Guide | SEO/GEO Guide |
| UX/IA Guide 정리 | P1 | PM | September | UX Planning / IA | UX/IA Guide |
| Sales / PR / SNS 운영 기준 정리 | P1 | PM | September | Execution Package | Channel Guide |
| 담당자별 운영 체크리스트 작성 | P0 | PM | September | Stakeholder Map | Owner Checklist |
| 인수인계 미팅 진행 | P0 | PM / 이해관계자 | September | Handover Document | Handover Meeting Notes |

---

## Dependency Map

### 문제
- 선행 작업이 완료되지 않으면 후속 작업의 품질이 낮아지거나 일정이 지연된다.

### 원인
- Context 수집, Diagnosis, Strategy, Execution, Review가 순차적으로 연결되어 있다.

### 해결
- 핵심 의존성을 명확히 관리한다.

### 실행
| Blocking Item | Blocks |
|---|---|
| 웹사이트 URL | Website Diagnosis, SEO Diagnosis, Homepage Guide |
| 제품 정의 | Brand Positioning, Keyword Strategy, Sales Message |
| 타깃 고객 | IA Strategy, UX Flow, CTA Guide |
| 경쟁사 목록 | Competitor Report, Differentiation Map |
| 법무 기준 | Brand Message, PR Message, Homepage Copy |
| Sales Deck | Sales Material Diagnosis, Sales Kit |
| Figma Link | UX Planning, Figma Review |
| KPI | Priority, Review, Handover |

### 성과
- 병목이 되는 입력값을 먼저 확보할 수 있다.

---

## Immediate P0 Tasks

### 문제
- 프로젝트를 시작하려면 최소한의 핵심 정보가 먼저 확보되어야 한다.

### 원인
- P0 정보가 없으면 진단과 전략이 추측에 기반하게 된다.

### 해결
- 아래 작업을 가장 먼저 진행한다.

### 실행
| Priority | Task | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| P0 | 공식 웹사이트 URL 확보 | PM | July Week 1 | 없음 | Website URL |
| P0 | 제품 정의 한 문장 확보 | PM / PO | July Week 1 | 없음 | Product Statement |
| P0 | 타깃 고객 정의 | PM / 영업 | July Week 1 | 영업 인풋 | Target Customer |
| P0 | 직접 경쟁사 3-5곳 확정 | PM / 영업 | July Week 1 | 영업 인풋 | Competitor Shortlist |
| P0 | 프로젝트 1순위 KPI 확정 | PM / 의사결정자 | July Week 1 | 프로젝트 목표 | Primary KPI |
| P0 | 법무상 금지 표현 확인 | PM / Jay | July Week 1 | 법무 인풋 | Legal Guardrails |
| P0 | 기존 Sales Deck 확보 | PM / 영업 | July Week 1 | 영업 자료 | Sales Deck |

### 성과
- Week 1 Diagnosis를 바로 시작할 수 있다.

