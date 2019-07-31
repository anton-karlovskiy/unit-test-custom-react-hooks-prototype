
import { renderHook, act } from '@testing-library/react-hooks';
import useTextField from './useTextField';

describe('useTextField', () => {
  test('should have an onChange function', () => {
    const { result } = renderHook(() => useTextField());
    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  test('should have correct name', () => {
    const { result } = renderHook(() => useTextField('name'));
    expect(result.current.name).toBe('name');
  });

  test('should update the value when onChange is called', () => {
    const { result } = renderHook(() => useTextField());
    act(() => {
      result.current.onChange({ target: { value: 'nitin' } });
    });
    expect(result.current.value).toBe('nitin');
  });
});