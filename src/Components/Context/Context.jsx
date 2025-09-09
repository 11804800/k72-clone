import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function Context({ children }) {
  const [NavActive, setNavActive] = useState(false);
  const [Selected,SetSelected]=useState(null);
  const [isLoading,setLoading]=useState(false);
  return (
    <AppContext.Provider value={{ NavActive: NavActive, setNavActive,SetSelected,Selected:Selected,isLoading:isLoading,setLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;
