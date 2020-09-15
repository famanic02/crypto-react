/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Popover, { PopoverProps } from 'antd/lib/popover';

interface Props extends PopoverProps {}
export default (props: Props) => {
  return <Popover {...props} />;
};
