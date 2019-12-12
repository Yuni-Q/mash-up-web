import React, { createContext, useReducer } from 'react';

import Root from './Root';

export const UserContext = createContext({});

export interface User {
  email: string;
}

interface Action {
  type: string;
  payload: User;
}

export interface UserContext {
    user?: User
    userDispatch?: () => {};
}

const App: React.FC = () => {
  const initialUserState: User = {
    email: '',
  }

  const userReducer = (state: User, action: Action) => {
    switch (action.type) {
      case 'login': {
        return { ...state, email: action.payload.email}
      }
      default: {
        throw new Error(`unexpected action.type: ${action.type}`)
      }
    }
  }

  const [user, userDispatch] = useReducer(userReducer, initialUserState)
  const context = {
    user,
    userDispatch,
  }
  return (

    <>
      <UserContext.Provider value={{ context }} >
        <Root />
      </UserContext.Provider>
    </>
  );
}

export default App;

