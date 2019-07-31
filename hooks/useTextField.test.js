
import { act } from 'react-dom/test-utils';
import { testHook } from '../testUtils';
import useTextField from './useTextField';

let nameField;
beforeEach(() => {
  testHook(() => {
    nameField = useTextField('name');
  });
});

describe('useTextField', () => {
  test('should have an onChange function', () => {
    expect(nameField.onChange).toBeInstanceOf(Function);
  });

  test('should have correct name', () => {
    expect(nameField.name).toBe('name');
  });

  test('should update the value when onChange is called', () => {
    act(() => {
      nameField.onChange({ target: { value: 'nitin' } });
    });
    expect(nameField.value).toBe('nitin');
  });
});