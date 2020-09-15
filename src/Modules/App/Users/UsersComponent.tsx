import React from 'react';


import ROUTES from 'Constants/Routes';
import './UsersStyle.scss';
import { PrivateRoute } from 'Components/PrivateRoute';
import { ActiveUsersModule } from './Active';

interface Props {}

const UsersComponent: React.FunctionComponent<Props> = () => {
  return (
    <div className="Users">
      <div className="Users__Header">
        <h1>NEWS</h1>
      </div>
      <div className="Users__Container">
        <PrivateRoute exact path={ROUTES.USERS} component={ActiveUsersModule} />
      </div>
    </div>
  );
};

export default UsersComponent;
