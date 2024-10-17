import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

// my-class란 class가 항상 적욛되는 컴포넌트를 렌더링
//beforeEach(async () => {
//  await render(<TextField className="my-class" />);
//});

//! Not To Do : 전역변수에 따른 테스트 케이스 분기
//! 다른 테스트에 영향을 줄 수 있으며, 독립적이지 않은 테스트 코드
//let someCondition = false;

//beforeEach(async () => {
//  if (someCondition) {
//    await render(<TextField className="my-class" />);
//  } else {
//    // ...
//  }
//});

it('className prop으로 설정한 css class가 적용된다.', async () => {
  await render(<TextField className="my-class" />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  screen.debug();

  expect(textInput).toHaveClass('my-class');
});

describe('placeholder', () => {
  it('기본 placeholder "텍스트를 입력해주세요."가 노출된다.', async () => {
    await render(<TextField />);
    //^ 기대결과 === 실제 결과 -> 성공
    //! 기대결과 !== 실제 결과 -> 실패
    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
    //# 단언(assertion) -> 테스트가 통과하기 위한 조건 -> 검증 실행
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해주세요." />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해주세요.');

    expect(textInput).toBeInTheDocument();
  });
});

it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다.', async () => {
  //# 스파이 함수: 테스트코드에서 특정 함수가 호출되었는지, 함수의 인자가 어떤 것이 넘어왔는지, 어떤 값을 반환하는지 등을 확인할 수 있는 함수
  const spy = vi.fn();

  const { user } = await render(<TextField onChange={spy} />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  await user.type(textInput, 'test');

  expect(spy).toHaveBeenCalledWith('test');
});

it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다', async () => {
  const spy = vi.fn();
  const { user } = await render(<TextField onEnter={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
  await user.type(textInput, 'test{enter}');
  expect(spy).toHaveBeenCalledWith('test');
});

it('포커스가 활성화되면 onFocus prop으로 등록한 함수가 호출된다', async () => {
  // 포커스 활성화
  // 탭 키로 인풋 요소를 포커스 이동
  // 인풋 요소를 클릭했을 때
  // textInput.focus()로 직접 발생
  const spy = vi.fn();
  const { user } = await render(<TextField onFocus={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
  await user.click(textInput);
  expect(spy).toHaveBeenCalled();
});

it('포커스가 활성화되면 border 스타일이 추가된다.', async () => {
  const spy = vi.fn();
  const { user } = await render(<TextField onFocus={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
  await user.click(textInput);
  expect(textInput).toHaveStyle({
    borderWidth: '2px',
    borderColor: 'rgb(25, 118, 210)',
  });
});
