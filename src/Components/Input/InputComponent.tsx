/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Input, { InputProps } from 'antd/es/input';

import './InputStyle.scss';

interface Props extends InputProps {}

const InputComponent: React.FunctionComponent<Props> = (props: Props) => {
  return <Input className="AP-Input" {...props} />;
};

export default InputComponent;
