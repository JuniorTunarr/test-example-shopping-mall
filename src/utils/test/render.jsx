import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//# userEvent: 클릭, 키보드 이벤트 등 사용자 이벤트를 시뮬레이션하는 라이브러리
export default async component => {
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
};
