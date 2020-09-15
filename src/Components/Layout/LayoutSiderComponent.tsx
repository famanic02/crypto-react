/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Sider, { SiderProps } from 'antd/lib/layout/Sider';

interface Props extends SiderProps {}

const LayoutSiderComponent = (props: Props) => {
  return <Sider className="Layout-Sider" {...props} />;
};

export default LayoutSiderComponent;
