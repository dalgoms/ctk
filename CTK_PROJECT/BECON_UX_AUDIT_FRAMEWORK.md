# BECON UX Audit Framework

## Audit 목적

### 문제
- BECON UX를 단순히 “좋다/나쁘다”로 보면 ChoiceDX에 적용할 수 있는 구체적인 개선점이 나오기 어렵다.

### 원인
- UX는 Information Architecture, Navigation, Flow, Interaction, Visual, Accessibility, Trust, Performance, User Journey가 함께 작동하기 때문이다.

### 해결
- BECON UX를 동일한 기준으로 분석하고, Pain Point와 Improvement를 Severity / Priority 기준으로 정리한다.

### 실행
- 각 화면과 흐름을 아래 항목별로 점검한다.
- 문제의 심각도는 Severity로 표시한다.
- ChoiceDX에 반영할 우선순위는 Priority로 표시한다.

### 성과
- BECON UX 분석 결과가 ChoiceDX IA, UX Flow, Screen Guide, Figma Review로 연결된다.

---

## Severity 기준

| Severity | 의미 |
|---|---|
| Critical | 사용자가 핵심 목적을 달성하지 못하게 만드는 문제 |
| High | 이해, 탐색, 전환에 큰 방해가 되는 문제 |
| Medium | 사용성은 가능하지만 개선 시 경험이 좋아지는 문제 |
| Low | 세부 개선 또는 선호도에 가까운 문제 |

## Priority 기준

| Priority | 의미 |
|---|---|
| P0 | ChoiceDX에 반드시 반영하거나 피해야 할 핵심 UX 인사이트 |
| P1 | UX 품질과 전환 개선에 중요한 항목 |
| P2 | 고도화 또는 세부 개선 항목 |

---

## UX Audit Master Table

| Section / Screen | Information Architecture | Navigation | Flow | Interaction | Visual | Accessibility | Trust | Performance | User Journey | Pain Point | Improvement | Severity | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Homepage Hero |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Product Overview |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Diagnosis / Solution Flow |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Technology / Method |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Case / Trust Section |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Pricing / Inquiry / CTA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Mobile Experience |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

---

## 1. Information Architecture

### 분석 질문
- 정보가 고객이 이해해야 하는 순서대로 배열되어 있는가
- 제품, 기술, 효과, 신뢰, 문의가 논리적으로 연결되는가
- 메뉴와 페이지 구조가 복잡하지 않은가
- 중요한 정보가 너무 아래에 있거나 숨겨져 있지 않은가

### Audit Template
| Screen / Page | Current Structure | Problem | Cause | Improvement | Severity | Priority | ChoiceDX Implication |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  | Medium | P1 |  |

---

## 2. Navigation

### 분석 질문
- 사용자가 원하는 정보로 쉽게 이동할 수 있는가
- 메뉴명이 고객 언어로 되어 있는가
- 현재 위치와 다음 행동이 명확한가
- 모바일 내비게이션이 사용하기 쉬운가

### Audit Template
| Navigation Element | Problem | Cause | Improvement | Severity | Priority | Evidence |
|---|---|---|---|---|---|---|
|  |  |  |  | Medium | P1 |  |

---

## 3. Flow

### 분석 질문
- 고객이 문제 인식에서 제품 이해, 신뢰 형성, 문의까지 자연스럽게 이동하는가
- 중간에 흐름이 끊기는 지점이 있는가
- CTA가 적절한 타이밍에 등장하는가
- 정보의 순서가 구매 의사결정 과정과 맞는가

### Audit Template
| Flow Step | User Goal | Current Experience | Pain Point | Improvement | Severity | Priority |
|---|---|---|---|---|---|---|
| Problem Recognition |  |  |  |  | High | P0 |
| Product Understanding |  |  |  |  | High | P0 |
| Trust Building |  |  |  |  | Medium | P1 |
| Conversion / Inquiry |  |  |  |  | High | P0 |

---

## 4. Interaction

### 분석 질문
- 버튼, 링크, 탭, 폼, 스크롤 요소가 직관적인가
- 클릭 가능한 요소와 정보 요소가 명확히 구분되는가
- 사용자의 행동에 대한 피드백이 있는가
- 문의 또는 상담 전환 과정이 간단한가

### Audit Template
| Interaction | Expected Behavior | Current Behavior | Pain Point | Improvement | Severity | Priority |
|---|---|---|---|---|---|---|
| CTA Button |  |  |  |  | High | P0 |
| Form |  |  |  |  | High | P0 |
| Tab / Accordion |  |  |  |  | Medium | P1 |

---

## 5. Visual

### 분석 질문
- 시각적 위계가 명확한가
- 중요한 메시지와 CTA가 눈에 잘 들어오는가
- 제품과 결과를 이해시키는 이미지가 충분한가
- 디자인이 신뢰감과 전문성을 주는가

### Audit Template
| Visual Element | Strength | Weakness | Pain Point | Improvement | Severity | Priority |
|---|---|---|---|---|---|---|
| Hero |  |  |  |  | Medium | P1 |
| Product Image |  |  |  |  | Medium | P1 |
| CTA |  |  |  |  | High | P0 |

---

## 6. Accessibility

### 분석 질문
- 텍스트 대비가 충분한가
- 버튼과 링크가 명확히 인식되는가
- 모바일에서 글자와 터치 영역이 충분한가
- 이미지 대체 텍스트와 기본 접근성이 고려되어 있는가

### Audit Template
| Accessibility Item | Current Status | Problem | Improvement | Severity | Priority |
|---|---|---|---|---|---|
| Contrast | Unknown |  |  | Medium | P1 |
| Text Size | Unknown |  |  | Medium | P1 |
| Tap Target | Unknown |  |  | Medium | P1 |
| Alt Text | Unknown |  |  | Low | P2 |

---

## 7. Trust

### 분석 질문
- 고객이 제품과 회사의 신뢰성을 빠르게 확인할 수 있는가
- 인증, 파트너, 사례, 데이터, 리뷰, 언론 보도 등이 제시되는가
- 의료/진단/기술 관련 신뢰 요소가 법무 리스크 없이 표현되는가
- 신뢰 요소가 전환 전에 충분히 노출되는가

### Audit Template
| Trust Element | Current Status | Pain Point | Improvement | Severity | Priority | ChoiceDX Implication |
|---|---|---|---|---|---|---|
| Certification |  |  |  | High | P0 |  |
| Partner / Client |  |  |  | Medium | P1 |  |
| Case Study |  |  |  | Medium | P1 |  |
| Media / PR |  |  |  | Medium | P1 |  |

---

## 8. Performance

### 분석 질문
- 페이지가 빠르게 로딩되는가
- 모바일에서 첫 화면이 지연 없이 표시되는가
- 이미지와 영상이 UX를 방해하지 않는가
- 성능 문제가 이탈이나 전환 저하로 이어질 가능성이 있는가

### Audit Template
| Page / Screen | Load Experience | Issue | Impact | Improvement | Severity | Priority |
|---|---|---|---|---|---|---|
| Homepage | Unknown |  |  |  | Medium | P1 |
| Mobile | Unknown |  |  |  | High | P1 |

---

## 9. User Journey

### 분석 질문
- 사용자가 어떤 진입 경로로 들어오는가
- 첫 방문자가 제품을 이해하는 데 필요한 정보가 충분한가
- 재방문자나 구매 검토자가 더 깊은 정보를 찾을 수 있는가
- 문의 전환까지의 여정이 명확한가

### Audit Template
| Journey Stage | User Question | Current UX | Pain Point | Improvement | Severity | Priority |
|---|---|---|---|---|---|---|
| Awareness | 이 브랜드는 무엇인가? |  |  |  | High | P0 |
| Consideration | 내 문제를 해결하는가? |  |  |  | High | P0 |
| Trust | 믿을 수 있는가? |  |  |  | High | P0 |
| Conversion | 어떻게 문의하거나 도입하는가? |  |  |  | High | P0 |

---

## 10. Pain Point

### 분석 질문
- 사용자가 이해하지 못하는 지점은 어디인가
- 행동을 멈추거나 이탈할 가능성이 있는 지점은 어디인가
- 정보가 부족하거나 과한 지점은 어디인가
- ChoiceDX가 반드시 피해야 할 UX 문제는 무엇인가

### Pain Point Log
| ID | Page / Screen | Pain Point | Cause | User Impact | Severity | Priority | Evidence |
|---|---|---|---|---|---|---|---|
| UX-001 |  |  |  |  | High | P0 |  |

---

## 11. Improvement

### 분석 질문
- BECON에서 배울 수 있는 UX 패턴은 무엇인가
- ChoiceDX에 그대로 적용하면 안 되는 패턴은 무엇인가
- ChoiceDX에 맞게 변형해야 하는 개선점은 무엇인가
- 개선 작업의 우선순위는 무엇인가

### Improvement Backlog
| Priority | Improvement | Related Pain Point | Expected Impact | Owner | Due | Dependency |
|---|---|---|---|---|---|---|
| P0 |  |  |  | PM / 디자인 |  |  |
| P1 |  |  |  | PM / 디자인 |  |  |
| P2 |  |  |  | PM / 디자인 |  |  |

---

## BECON UX Summary Template

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

---

## ChoiceDX 적용 우선순위

| Priority | BECON Insight | ChoiceDX Action | Expected Output | Owner | Due |
|---|---|---|---|---|---|
| P0 |  |  | UX Flow / IA / Screen Guide | PM | July Week 4 |
| P1 |  |  | Figma Review Notes | PM / 디자인 | August |
| P2 |  |  | Handover Guide | PM | September |

