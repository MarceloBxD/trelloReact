import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [showInputTitle, setShowInputTitle] = useState<boolean>(false);
  const [showButtonTitle, setShowButtonTitle] = useState<boolean>(true);
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [testItems, setTestItems] = useState([]);

  const value = {
    showInputTitle,
    setShowInputTitle,
    showButtonTitle,
    setShowButtonTitle,
    showTitle,
    setShowTitle,
    title,
    setTitle,
    testItems,
    setTestItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
