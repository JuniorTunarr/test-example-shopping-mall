# 실무에 바로 적용하는 프런트엔드 테스트 쇼핑몰 예제

<!-- TODO: need to update link -->

> 강의 링크: https://www.inflearn.com/

이 프로젝트는 "실무에 바로 적용하는 프런트엔드 테스트"에서 사용되는 예제입니다.

![image](https://github.com/jung-han/jung-han/assets/35371660/86f96b11-046d-42dd-bb8d-3b780698feeb)

## 사용 기술 스택

| Types      | Techs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Front      | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Tanstack Query](https://img.shields.io/badge/-tanstack%20Query-FF4154?style=flat&logo=react%20query&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=flat&logo=mui&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white) [zustand](https://github.com/pmndrs/zustand) |
| Server     | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)                                                                                                                                                                                                                                                                                                                                                                                     |
| Build tool | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                        |
| Test       | ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=flat&logo=cypress&logoColor=058a5e) ![Testing-Library](https://img.shields.io/badge/-Testing%20Library-%23E33332?style=flat&logo=testing-library&logoColor=white) ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat&logo=storybook&logoColor=white) [MSW](https://mswjs.io/) [Chromatic](https://www.chromatic.com/)                                                                                           |

## 실행

```sh
$ nvm use # node 19.9.0 버전을 사용합니다.
$ npm i
$ npm run dev # 노드 서버와 vite 개발 서버를 동시에 실행합니다.
```

## 브랜치 소개

각 장에서 사용하는 브랜치와 정답 브랜치입니다.
강의를 진행 하실 때는 `강의` 브랜치를, 테스트를 작성하고 정답을 확인하고 싶으시다면 `정답` 브랜치를 확인해주세요!

> ⚠️ 강의를 시작할 때 강사님이 어느 브랜치를 사용하는지 알려드리니 참고해서 진행해주세요!

<!-- TODO: 브랜치 링크 넣기 -->

### 1부

- 2장. 단위 테스트란?
  - 강의: [`unit-test-example`](https://github.com/practical-fe-testing/test-example-shopping-mall/tree/unit-test-example)
  - 정답: [`unit-test-example-with-answer`](https://github.com/practical-fe-testing/test-example-shopping-mall/tree/unit-test-example-with-answer)
- 3장. 단위 테스트 작성하기
  - 강의: [`shopping-mall-unit-test`](https://github.com/practical-fe-testing/test-example-shopping-mall/tree/shopping-mall-unit-test)
  - 정답: [`shopping-mall-unit-test-with-answer`](https://github.com/practical-fe-testing/test-example-shopping-mall/tree/shopping-mall-unit-test-with-answer)
- 4장. 통합 테스트란? / 5장. 통합 테스트 작성하기
  - 강의: [`shopping-mall-integration-test`](https://github.com/practical-fe-testing/test-example-shopping-mall/tree/shopping-mall-integration-test)
  - 정답: [`shopping-mall-integration-test-with-answer`](shopping-mall-integration-test-with-answer)

### 2부

- 작성 예정

### 내용정리

#### 섹션 4: 단위 테스트 작성하기

##### 3.3 리액트 훅 테스트(feat. act 함수)

- act 함수의 역할

  - `act` 함수는 React 컴포넌트나 훅의 상태 변화를 테스트할 때 사용됩니다.
  - 주요 기능:
    1.  상태 업데이트 동기화: 컴포넌트의 상태 변경을 동기적으로 처리합니다.
    2.  렌더링 시뮬레이션: 실제 React 환경과 유사한 렌더링 과정을 시뮬레이션합니다.
    3.  부작용 처리: 상태 변경으로 인한 부작용(side effects)을 적절히 처리합니다.
    4.  테스트 안정성 향상: 비동기 작업을 동기적으로 처리하여 테스트의 안정성을 높입니다.
  - 사용 예:

  ```javascript
  act(() => {
    // 상태를 변경하는 코드
  });
  ```

  - `act`를 사용하면 테스트 환경에서 React의 동작을 더 정확하게 시뮬레이션할 수 있다.
