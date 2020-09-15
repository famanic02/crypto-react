/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Row, { RowProps } from 'antd/lib/row';

interface Props extends RowProps {}

export default (props: Props) => {
  return <Row {...props} />;
};
