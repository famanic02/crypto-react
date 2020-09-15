/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Col, { ColProps } from 'antd/lib/col';

interface Props extends ColProps {}

export default (props: Props) => {
  return <Col {...props} />;
};
