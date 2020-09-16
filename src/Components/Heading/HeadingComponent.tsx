/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';

import './HeadingStyle.scss';

type Props = {
  children: React.ReactElement | React.ReactNode;
  sm?: boolean;
  className?: string;
};

const Heading = ({ children, sm, className }: Props) => {
  return (
    <>
      <p
        className={classNames('App_Header', {
          App_Header__sm: sm,
          [`${className}`]: className,
        })}
      >
        {children}
      </p>
    </>
  );
};

export default Heading;
