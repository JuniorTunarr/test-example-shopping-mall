# 단위 테스트란

## 단위 테스트란 무엇일까

### 상세한 테스트 디스크립션을 통해 가독성 향상

### 내부 DOM 구조나 로직에 영향을 받지않게 테스팅 라이브러리 API를 통해 적절한 요소 검증

### 컴포넌트 최종 렌더링 결과물인 DOM 구조가 올바르게 변경되었는지 검증

### 테스트 케이스 작성 (AAA)

### 1. Arrange - 테스트를 위한 환경 만들기

### -> className 지닌 컴포넌트 렌더링

### 2. Act - 테스트할 동작 시뮬레이션

### -> 렌더링에 대한 검증이기에 생략

### -> 클릭이나 메서드 호출, prop 변경 등에 대한 작업

### 3. Assert - 올바른 동작 실행 검증

### -> 렌더링 후 DOM에 해당 class가 존재하는지 검증

## 테스트 환경과 매처

### render API를 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링된 DOM 구조가 반영

### jsDOM: Node.js에 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현

### vitest의 expect 함수를 사용하여 기대 결과를 검증

### className이란 내부 prop이나 state 값을 검증(X)

### 렌더링된 DOM 구조가 올바르게 변경되었는지 확인 (O) => 최종적으로 사용자가 보는 결과는 DOM

### describe: 최상위가 아니라 독립된 컨텍스트를 생성

### describe 내에서 정의한 함수는 해당 컨텍스트 내에서만 유효

### screen.debug() 함수를 사용하여 렌더링된 DOM 구조를 확인할 수 있음

### it -> test 함수의 alias

## setup과 teardown

### setup: 테스트를 실행하기 전 수행해야하는 작업(beforeEach, beforeAll)

beforeEach(()=>{}); beforeAll(()=>{});등을 통해, test 이전에 수행해야할 작업을 정의하며, describe 내에 적을시 describe내의 test를 수행하기 전에 실행됨.

동일한 맥락에서는 beforeAll => beforeEach 순으로 실행됨.

### teardown: 테스트를 실행한 뒤 수행해야하는 작업(afterEach, afterAll)

testEach(()=>{})는 테스트를 통해 생성된 상태를 초기화하는데 유리함.

## React Testing Library와 컴포넌트 테스트

### React Testing Library의 핵심철학

UI 컴포넌트를 사용자가 사용하는 방식으로 테스트하자.
(사용자가 사용하는 방식: DOM 노드를 쿼리(조회)하고 사용자와 비슷한 방식으로 이벤트를 발생시키자.)

쿼리 우선순위: 모든 사람이 이용가능한 순으로 생각.
getByRole, getByLabelText, getByPlaceholderText등
