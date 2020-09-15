import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import ROUTES from 'Constants/Routes';
import AppModule from 'Modules/App/AppModule';
import { AppProvider } from './context/AppProvider';
import { AuthProvider } from './context/AuthProvider';
import './App.scss';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path={ROUTES.APP} component={AppModule} />
            <Redirect from={ROUTES.ROOT} to={ROUTES.APP} />
          </Switch>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
