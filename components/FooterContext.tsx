"use client";
import { createContext, useContext, useState } from "react";

const FooterContext = createContext({
  showFooter: true,
  setShowFooter: (visible: boolean) => {},
});

export function FooterProvider({ children }: { children: React.ReactNode }) {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <FooterContext.Provider value={{ showFooter, setShowFooter }}>
      {children}
    </FooterContext.Provider>
  );
}

export function useFooter() {
  return useContext(FooterContext);
}
