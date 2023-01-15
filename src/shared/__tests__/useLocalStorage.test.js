import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../hooks/useLocalStorage';

test('should return correct local storage value', () => {
  const mockedMoviesArray = [
    { title: 'Die Hard', duration: 120 },
    { title: 'Kungfu Panda', duration: 150 }
  ];
  const { result } = renderHook(() => useLocalStorage('movie', []));

  act(() => {
    result.current.setValue(mockedMoviesArray);
  });
  expect(result.current.storedValue).toStrictEqual(mockedMoviesArray);
});
