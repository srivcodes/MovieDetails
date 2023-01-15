import { renderHook, act } from '@testing-library/react-hooks';
import { useDeviceScreen } from '../hooks/useDeviceScreen';

test('should tell it is a mobile screen', () => {
  const { result } = renderHook(() => useDeviceScreen());

  act(() => {
    // setting window width
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
  });

  expect(result.current).toBe(true);
});

test('should tell it is NOT a mobile screen', () => {
  const { result } = renderHook(() => useDeviceScreen());

  act(() => {
    // setting window width
    global.innerWidth = 1500;
    global.dispatchEvent(new Event('resize'));
  });

  expect(result.current).toBe(false);
});
