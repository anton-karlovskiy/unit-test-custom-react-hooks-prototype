
import React from 'react';

import useTextField from '../hooks/useTextField';

const InputDemoWithHooks = () => {
  const nameField = useTextField('name');
  return <input type="text" {...nameField} />;
};

export default InputDemoWithHooks;