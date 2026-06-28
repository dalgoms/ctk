# Project QA Report

## Why
문서가 많아지면 같은 정보가 서로 다르게 쓰이거나, HTML 사이트에 최신 문서가 반영되지 않거나, 표가 깨지는 문제가 생길 수 있다.

## What
현재 CTK ChoiceDX 프로젝트 문서와 HTML 사이트를 기준으로 전체 QA를 진행했다.

## How
아래 항목을 점검했다.

- 문서 목록
- HTML 사이트 반영 여부
- 깨진 표기
- ARAM Huvis 분리 표기 여부
- 영어로 남은 이전 섹션 제목
- 마크다운 테이블 컬럼 수
- ChoiceDX 전용 문서와 범용 템플릿 분리 여부
- Dashboard 반영 상태

## Result
전체 문서 구조는 정상이다. 범용 재사용 템플릿도 별도 문서로 분리했다.

---

## 1. QA Summary

| 항목 | 상태 | 메모 |
|---|---|---|
| CTK MD 문서 수 | Pass | 14개 문서 확인 |
| HTML 사이트 파일 | Pass | `index.html`, `styles.css`, `app.js`, `docs-data.js` 존재 |
| 테이블 구조 | Pass | 자동 점검 기준 컬럼 불일치 없음 |
| 깨진 `?????` 표기 | Pass | 주요 문서 기준 잔여 표기 없음 |
| ARAM / HUVIS 분리 표기 | Pass | `ARAM Huvis` 단일 브랜드로 정리 |
| 영어 이전 섹션 제목 | Pass | `Evidence-Based SWOT From 3 Sitemaps`, `ChoiceDX Differentiation Strategy` 제거 |
| 경쟁 SWOT | Pass | 3개 사이트맵 기준 한국어 분석으로 업데이트 |
| 범용 템플릿 분리 | Pass | `outputs/REUSABLE_TEMPLATES`로 별도 분리 |
| HTML 업데이트 | Pass | CTK 전용 문서만 반영 완료 |

---

## 2. 분리된 범용 문서

| 문서 | 목적 | 상태 |
|---|---|---|
| `outputs/REUSABLE_TEMPLATES/REUSABLE_BRAND_GROWTH_PLAYBOOK.md` | 다른 사업분야에 재사용 가능한 브랜드 성장 운영 템플릿 | Separated |

---

## 3. 주요 수정 사항

| 수정 항목 | 수정 내용 |
|---|---|
| 경쟁 분석 언어 | 영어 중심 구간을 한국어 실무 문서로 재작성 |
| ARAM Huvis 표기 | ARAM과 HUVIS를 분리하지 않고 `ARAM Huvis`로 통일 |
| SWOT 기준 | BECON, ARAM Huvis, ChoiceDX 3개 사이트맵 기준으로 재정리 |
| ChoiceDX 전략 | `Small But Clear IA`, `Product Page as Keyword Landing`, `Olive Young Trust Story`, `AI Diagnosis Entity Hub`, `Clean Technical SEO`로 정리 |
| 범용 템플릿 | ChoiceDX 전용 내용을 분리해 다른 사업에도 적용 가능한 플레이북 생성 |

---

## 4. 남은 확인 사항

| Priority | 확인 사항 | 이유 | Owner |
|---|---|---|---|
| P1 | 실제 브라우저에서 모바일/데스크톱 화면 확인 | 정적 HTML 렌더링 최종 확인 | PM |
| P1 | 향후 실제 페이지 본문/스크린샷 기반 정밀 분석 | 현재 SWOT은 사이트맵 URL 구조 기준 | PM |

---

## 5. Next Action

| Priority | Action | Expected Output |
|---|---|---|
| P1 | 실제 화면에서 문서 목록과 표 렌더링 확인 | Visual QA |
| P1 | 다음 입력 자료 수집 | 제품 설명, KPI, 법무 기준, Figma, 세일즈 자료 |
