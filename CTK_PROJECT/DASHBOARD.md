# CTK ChoiceDX Project Dashboard

## Dashboard 목적

### 문제
- 프로젝트가 3개월 동안 여러 산출물, 담당자, 리뷰, 실행 항목으로 나뉘기 때문에 현재 상태를 한눈에 보기 어렵다.

### 원인
- 진행률, Issue, Risk, Decision, Done, Next Action, Blocked, Priority, Weekly Status가 분리되어 관리되면 실행 속도와 의사결정이 느려진다.

### 해결
- 프로젝트 상태를 하나의 Dashboard에서 주간 단위로 관리한다.

### 실행
- 매주 업데이트한다.
- Blocked와 P0 Issue를 가장 먼저 확인한다.
- Decision은 날짜와 결정자를 함께 기록한다.
- Done은 산출물 기준으로 기록한다.

### 성과
- PM, 영업, 법무, PO, 디자인, 내부 담당자가 같은 상태를 보고 다음 액션을 결정할 수 있다.

---

## 1. Overall Progress

| Area | Progress | Status | Owner | Due | Notes |
|---|---:|---|---|---|---|
| Project Context | 0% | Not Started | PM | July Week 1 |  |
| Competitor Analysis | 0% | Not Started | PM | July Week 1 |  |
| SEO/GEO Audit | 0% | Not Started | PM | July Week 1 |  |
| Website / IA Diagnosis | 0% | Not Started | PM | July Week 1 |  |
| Brand Positioning | 0% | Not Started | PM | July Week 2 |  |
| Strategy Document | 0% | Not Started | PM | July Week 2 |  |
| Execution Package | 0% | Not Started | PM | July Week 3 |  |
| UX Planning | 0% | Not Started | PM | July Week 4 |  |
| Figma Review | 0% | Not Started | PM / Design | July Week 4 - August |  |
| August Execution Review | 0% | Not Started | PM / Internal | August |  |
| Handover | 0% | Not Started | PM | September |  |

---

## 2. Priority Board

| Priority | Item | Type | Owner | Due | Status | Next Action |
|---|---|---|---|---|---|---|
| P0 | 공식 웹사이트 URL 확보 | Missing Info | PM | July Week 1 | Done | 현재 노출 URL 14개 확보 |
| P0 | 제품 정의 한 문장 확보 | Missing Info | PM / PO | July Week 1 | Todo | PO 인풋 요청 |
| P0 | 타깃 고객 정의 | Missing Info | PM / Sales | July Week 1 | Todo | 영업 인풋 요청 |
| P0 | 직접 경쟁사 3-5곳 확정 | Missing Info | PM / Sales | July Week 1 | Todo | 경쟁사 후보 수집 |
| P0 | 1순위 KPI 확정 | Decision | PM / Decision Maker | July Week 1 | Todo | KPI 미팅 필요 |
| P0 | 법무상 금지 표현 확인 | Risk | PM / Legal | July Week 1 | Todo | Jay 확인 필요 |
| P0 | Sales Deck 확보 | Missing Info | PM / Sales | July Week 1 | Todo | 기존 자료 요청 |

---

## 3. Issue Tracker

| ID | Issue | Area | Priority | Owner | Status | Due | Resolution |
|---|---|---|---|---|---|---|---|
| I-001 | 웹사이트 URL 미확보 | Website / SEO | P0 | PM | Resolved | July Week 1 | 현재 노출 URL 14개 확보 |
| I-002 | 직접 경쟁사 미확정 | Competitor | P0 | PM / Sales | Open | July Week 1 |  |
| I-003 | KPI 수치 미확정 | KPI | P0 | PM | Open | July Week 1 |  |
| I-004 | 법무 표현 기준 미확보 | Legal | P0 | Jay / PM | Open | July Week 1 |  |

---

## 4. Risk Register

| ID | Risk | Impact | Likelihood | Priority | Owner | Mitigation | Status |
|---|---|---|---|---|---|---|---|
| R-001 | 분석 전에 실행이 시작될 가능성 | High | Medium | P0 | PM | 진단 완료 전 실행 범위 제한 | Open |
| R-002 | 법무 검토 누락으로 메시지 수정 발생 | High | Medium | P0 | Jay / PM | 금지 표현과 검토 기준 사전 확보 | Open |
| R-003 | 경쟁사 정보 부족으로 포지셔닝 약화 | Medium | High | P0 | PM | 직접/간접 경쟁사 URL 우선 수집 | Open |
| R-004 | KPI 미정으로 성과 판단 어려움 | High | Medium | P0 | PM | Week 1에 KPI 초안 확정 | Open |
| R-005 | Figma Review가 디자인 취향 중심으로 흐를 가능성 | Medium | Medium | P1 | PM / Design | UX Flow와 Screen Purpose 기준으로 리뷰 | Open |

---

## 5. Decision Log

| Date | Decision | Why | Owner / Decision Maker | Related Area | Follow-up |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

---

## 6. Done

| Date | Done Item | Output | Owner | Related Deliverable | Notes |
|---|---|---|---|---|---|
|  | Missing Information Checklist 작성 | MISSING_INFORMATION_CHECKLIST.md | PM | Missing Information Checklist |  |
|  | Task Backlog 작성 | TASK_BACKLOG.md | PM | Task Backlog |  |
|  | Deliverables 정리 | DELIVERABLES.md | PM | Deliverables |  |
|  | Competitor Analysis Framework 작성 | COMPETITOR_ANALYSIS_FRAMEWORK.md | PM | Competitor Report |  |
|  | SEO Audit Template 작성 | CHOICEDX_SEO_AUDIT_TEMPLATE.md | PM | SEO/GEO Diagnosis |  |
|  | BECON UX Audit Framework 작성 | BECON_UX_AUDIT_FRAMEWORK.md | PM | UX Planning |  |
|  | GEO Audit Framework 작성 | CHOICEDX_GEO_AUDIT_FRAMEWORK.md | PM | GEO Audit |  |
|  | 현재 노출 URL 인벤토리 작성 | CHOICEDX_CURRENT_EXPOSURE_URLS.md | PM | Website / SEO / GEO Diagnosis |  |
|  | ARAM Huvis 노출 URL 인벤토리 작성 | ARAMHUVIS_CURRENT_EXPOSURE_URLS.md | PM | Competitor Analysis |  |
|  | ARAM Huvis Evidence-Based SWOT 반영 | COMPETITOR_ANALYSIS_FRAMEWORK.md | PM | Competitor Report | URL 구조 기준 1차 분석 |
|  | 경쟁사 SWOT 재분석 및 ChoiceDX 차별화 전략 작성 | COMPETITOR_SWOT_ANALYSIS.md | PM | Competitor Report | 파일명 기준으로 BECON / ARAM Huvis / ChoiceDX 재분류 |

---

## 7. Next Action

| Priority | Next Action | Owner | Due | Dependency | Expected Output |
|---|---|---|---|---|---|
| P0 | URL별 Metadata / H1 / H2 진단 시작 | PM | July Week 1 | 현재 노출 URL 14개 | Metadata Audit |
| P0 | 직접 경쟁사 3-5곳 확정 | PM / Sales | July Week 1 | 영업 인풋 | Competitor Shortlist |
| P0 | ARAM Huvis 상세 본문/화면 분석 | PM | July Week 1 | ARAM Huvis URL 170개 | Competitor Detail Notes |
| P0 | 제품 정의 한 문장 작성 | PM / PO | July Week 1 | 제품 정보 | Product Statement |
| P0 | 핵심 타깃 고객 정의 | PM / Sales | July Week 1 | 영업 인풋 | Target Customer |
| P0 | 1순위 KPI 확정 | PM / Decision Maker | July Week 1 | 프로젝트 목표 | Primary KPI |
| P0 | 법무상 금지 표현 확인 | PM / Jay | July Week 1 | 법무 인풋 | Legal Guardrails |
| P0 | Sales Deck 확보 | PM / Sales | July Week 1 | 기존 자료 | Sales Deck |

---

## 8. Blocked

| Blocked Item | Blocker | Impact | Owner | Needed Decision / Input | Due |
|---|---|---|---|---|---|
| Website Diagnosis | URL별 메타데이터 확인 필요 | SEO/IA 진단 시작 전 페이지별 역할 정의 필요 | PM | 14개 URL별 Title/Description/H1/H2 확인 | July Week 1 |
| Competitor Report | 경쟁사 목록 필요 | 비교 분석 지연 | PM / Sales | 경쟁사 3-5곳 확정 | July Week 1 |
| Brand Positioning | 제품 정의와 타깃 고객 필요 | 메시지 전략 지연 | PM / PO / Sales | 제품/고객 정보 공유 | July Week 1 |
| SEO/GEO Audit | 웹사이트 URL과 키워드 후보 필요 | 검색 진단 지연 | PM | URL/키워드 공유 | July Week 1 |
| PR / Homepage Copy | 법무 기준 필요 | 표현 리스크 발생 | Jay / PM | 금지 표현 확인 | July Week 1 |

---

## 9. Weekly Status

### Week: July Week 1

| 항목 | 내용 |
|---|---|
| Focus | Diagnosis |
| Goal | Project Context, Competitor Report, SEO/GEO Diagnosis, Website Diagnosis 시작 |
| Progress | 0% |
| Done | Dashboard 구조 작성 |
| Issue | P0 입력 정보 미확보 |
| Risk | 분석 지연 가능성 |
| Decision Needed | KPI, 경쟁사, 법무 기준 |
| Blocked | 웹사이트 URL, 제품 정의, 경쟁사 목록 |
| Next Action | P0 정보 수집 |

### Week: July Week 2

| 항목 | 내용 |
|---|---|
| Focus | Strategy |
| Goal | Brand Positioning, Keyword/GEO Strategy, IA Strategy 작성 |
| Progress | 0% |
| Done |  |
| Issue |  |
| Risk |  |
| Decision Needed |  |
| Blocked |  |
| Next Action |  |

### Week: July Week 3

| 항목 | 내용 |
|---|---|
| Focus | Execution Package |
| Goal | Homepage Guide, SEO Guide, Sales/PR/SNS Package 작성 |
| Progress | 0% |
| Done |  |
| Issue |  |
| Risk |  |
| Decision Needed |  |
| Blocked |  |
| Next Action |  |

### Week: July Week 4

| 항목 | 내용 |
|---|---|
| Focus | UX Planning |
| Goal | BECON Analysis, UX Flow, IA, Screen Guide 작성 |
| Progress | 0% |
| Done |  |
| Issue |  |
| Risk |  |
| Decision Needed |  |
| Blocked |  |
| Next Action |  |

### August

| 항목 | 내용 |
|---|---|
| Focus | Execution Review |
| Goal | SEO Apply, Homepage, Sales Material, PR, SNS, UX Review |
| Progress | 0% |
| Done |  |
| Issue |  |
| Risk |  |
| Decision Needed |  |
| Blocked |  |
| Next Action |  |

### September

| 항목 | 내용 |
|---|---|
| Focus | Review & Handover |
| Goal | Documentation, Onboarding, Handover |
| Progress | 0% |
| Done |  |
| Issue |  |
| Risk |  |
| Decision Needed |  |
| Blocked |  |
| Next Action |  |

---

## 10. Dashboard Update Rule

### 문제
- Dashboard가 업데이트되지 않으면 실제 진행 상황을 반영하지 못한다.

### 원인
- 프로젝트 중 이슈, 결정, 완료 항목, 막힌 항목은 매주 바뀐다.

### 해결
- 매주 회의 전 Dashboard를 업데이트한다.

### 실행
1. Overall Progress를 업데이트한다.
2. Done을 추가한다.
3. Issue와 Risk 상태를 갱신한다.
4. Blocked 항목을 확인한다.
5. Decision Needed를 정리한다.
6. Next Action을 P0/P1/P2로 재정렬한다.

### 성과
- 프로젝트 상태가 항상 최신으로 유지되고, 다음 의사결정이 명확해진다.
