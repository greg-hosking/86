import React, { createContext, Dispatch, SetStateAction } from 'react';

interface UsernameContextInterface {
  username?: string;
  setUsername?: Dispatch<SetStateAction<string>>;
}

export const UsernameContext = createContext<UsernameContextInterface>({});

interface Props {
  children: React.ReactNode;
}

const UsernameProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [username, setUsername] = React.useState('');

  const changeUsername = (username: string) => {
    setUsername(username);
  };

  return (
    <UsernameContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameProvider;
