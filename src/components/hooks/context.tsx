import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextData {
  openWhatsApp: boolean;
  setOpenWhatsApp: (value: boolean) => void;
}

const AppContext = createContext<AppContextData>({
  openWhatsApp: false,
  setOpenWhatsApp: () => {}
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  return (
    <AppContext.Provider value={{ openWhatsApp, setOpenWhatsApp }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextData => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};