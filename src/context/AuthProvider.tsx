import React, { createContext, useState } from 'react';
import { USER, TOKEN_KEY, IS_AUTHENTICATED, STATES, CITIES } from 'Constants/StorageConst';
import CommonService from 'Services/CryptoService';
import { IUser } from '../Interfaces/IProfile';

type AuthContextProps = {
  isAuthenticated: boolean;
  user?: IUser;
  updateUser: (user: IUser) => void;
  setAuthenticated: (val: boolean) => void;
  handleLogin: (email: string, password: string) => Promise<any>;
  handleLogout: () => void;
  errorMessage: string;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: undefined,
  errorMessage: '',
  updateUser: () => true,
  setAuthenticated: () => true,
  handleLogin: async () => true,
  handleLogout: () => true,
});
type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const AuthProvider: React.FunctionComponent<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clearLocalStorageItems = (): void => {
    // Clear all local storage items
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER);
    localStorage.removeItem(IS_AUTHENTICATED);
    localStorage.removeItem(STATES);
    localStorage.removeItem(CITIES);
  };

  const updateUser = (_user: IUser): any => {
    return setUser(_user);
  };
  const setAuthenticated = (val: boolean): any => {
    setIsAuthenticated(val);
    localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(val));
  };

  const handleLogin = async (email: string, password: string): Promise<any> => {
    try {
      const commonService = new CommonService();

      const res = await commonService.login(email, password);
      if (res) {
        setUser(res);
        setAuthenticated(true);
        localStorage.setItem(USER, JSON.stringify(res));
      }
    } catch (err) {
      setAuthenticated(false);
      setErrorMessage(`${err}`);
      throw err;
    }
  };

  const handleLogout = (): void => {
    setAuthenticated(false);
    setUser(undefined);

    clearLocalStorageItems();
  };

  const value: AuthContextProps = {
    user,
    isAuthenticated,
    updateUser,
    setAuthenticated,
    handleLogin,
    handleLogout,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
