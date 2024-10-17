//@ DOM과 관련된 matcher는 존재하지 않기에, jest-dom을 추가로 설치하여 확장해서 사용
import '@testing-library/jest-dom';

//# 모킹한 모듈의 히스토리를 초기화(테스트의 독립성 보장)
afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();
});

// https://github.com/vitest-dev/vitest/issues/821
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
