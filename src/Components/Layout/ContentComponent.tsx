/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Layout from 'antd/lib/layout';
import './LayoutStyle.scss';

interface Props {
  children: any;
}

export default ({ children, ...rest }: Props) => {
  return (
    <Layout.Content className="App-Content" {...rest}>
      {children}
    </Layout.Content>
  );
};
