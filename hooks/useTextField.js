
import { useState } from 'react';

const useTextField = name => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  return {
    name,
    value,
    onChange,
    placeholder: name,
  };
};

export default useTextField;