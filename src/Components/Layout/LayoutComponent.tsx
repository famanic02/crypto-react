/* eslint react/jsx-props-no-spreading: off */
import * as React from 'react';
import Layout, { LayoutProps } from 'antd/lib/layout';

interface Props extends LayoutProps {
  children: any;
}

const LayoutComponent: React.FunctionComponent<Props> = ({ children, ...rest }) => (
  <Layout {...rest}>{children}</Layout>
);

export default LayoutComponent;
