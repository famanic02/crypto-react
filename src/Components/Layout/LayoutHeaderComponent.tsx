/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Layout, { LayoutProps } from 'antd/lib/layout';

import './LayoutStyle.scss';

interface Props extends LayoutProps {
  children: React.ReactNode | React.ReactElement | React.FunctionComponent;
}

const HeaderComponent = ({ children, ...rest }: Props) => {
  return (
    <Layout.Header className="Layout-Header" {...rest}>
      {children}
    </Layout.Header>
  );
};

export default HeaderComponent;
