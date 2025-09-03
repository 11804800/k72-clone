import React, { useState } from 'react'
import { createContext } from 'react'


export const AppContext=createContext();

function Context({children}) {
    const [NavActive,setNavActive]=useState(false);
  return (
    <AppContext.Provider value={{NavActive:NavActive,setNavActive}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context