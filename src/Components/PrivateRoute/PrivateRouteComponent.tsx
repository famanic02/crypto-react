import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'Helpers/AuthHelper';
import ROUTES from 'Constants/Routes';

interface Props {
  component: React.FunctionComponent<Props>;
  location?: object;
  path: string;
  exact?: boolean;
}

const PrivateRouteComponent = ({ component, path, exact = false }: Props) => {
  const renderRoute = () => {
    if (isAuthenticated()) {
      return <Route exact={exact} path={path} component={component} />;
    }

    return <Redirect to={{ pathname: ROUTES.LOGIN }} />;
  };

  return <Route exact={exact} render={renderRoute} />;
};

export default PrivateRouteComponent;
