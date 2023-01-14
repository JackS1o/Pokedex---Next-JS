import { createContext, ReactNode, useState } from 'react';

const MyContext = createContext({});

type Props = {
  children: ReactNode;
};

function Context({ children }: Props) {
  const [theme, setTheme] = useState<boolean>(false);

  const value: {} = { theme, setTheme };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

export { Context, MyContext };