/* eslint-disable react/require-default-props */
/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Button, { ButtonProps } from 'antd/es/button';

import './ButtonStyle.scss';

interface Props extends ButtonProps {
  danger?: boolean;
}

const ButtonComponent = ({ icon, type, size, children, ...rest }: Props) => (
  <Button className="AP-Button" icon={icon} type={type} size={size} {...rest}>
    {children}
  </Button>
);

export default ButtonComponent;
