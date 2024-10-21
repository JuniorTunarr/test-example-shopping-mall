import { renderHook, act } from '@testing-library/react';

import useConfirmModal from './useConfirmModal';

//# 리액트 훅은 리액트 컴포넌트 내부에서 호출되어야만 정상적으로 실행
it('호출 시 initialValue 인자를 지정하지 않는 경우 isModalOpened 상태가 false로 설정된다.', () => {
  //# result: 훅을 호출하여 얻은 결과 값을 반환 -> result.current 값을 참조해 최신 상태를 추적할 수 있다.
  //# rerender: 훅을 원하는 인자와 함께 새로 호출하여 상태를 갱신한다.
  const { result, rerender } = renderHook(useConfirmModal);

  //# toBe: 정확한 값 비교를 수행한다. 여기서는 result.current.isModalOpened가 정확히 false인지 확인한다.
  expect(result.current.isModalOpened).toBe(false);
});

it('호출 시 initialValue 인자를 boolean 값으로 지정하는 경우 해당 값으로 isModalOpened 상태가 설정된다.', () => {
  const { result } = renderHook(() => useConfirmModal(true));

  expect(result.current.isModalOpened).toBe(true);
});

it('훅의 toggleIsModalOpened()를 호출하면 isModalOpened 상태가 toggle된다.', () => {
  const { result } = renderHook(useConfirmModal);

  //& react testing library에서 render 함수나 유저 이벤트의 모듈을 사용하지 않고, 직접 상태를 변경하는 경우,
  //& act 함수로 감싸야 한다.
  act(() => {
    result.current.toggleIsModalOpened();
  });

  expect(result.current.isModalOpened).toBe(true);
});
