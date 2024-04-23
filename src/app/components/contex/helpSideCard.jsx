"use client";
import { createContext, useState } from "react";

export const HelpSideCardContext = createContext();
export function HelpSideCardProvider({ children }) {
  const [sideComponent, setSideComponent] = useState(false);
  return (
    //lo que quieres proveer
    <HelpSideCardContext.Provider value={{ sideComponent, setSideComponent }}>
      {children}
    </HelpSideCardContext.Provider>
  );
}
