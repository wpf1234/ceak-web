"use client";

import { createContext, useContext, useState } from "react";
import CookieSettings from "./CookieSettings";

const CookieContext = createContext({
  open: false,
  openSettings: () => {},
  closeSettings: () => {},
});

export const useCookie = () => useContext(CookieContext);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openSettings = () => setOpen(true);
  const closeSettings = () => setOpen(false);

  return (
    <CookieContext.Provider value={{ open, openSettings, closeSettings }}>
      {children}
      {/* 无论何处触发，只渲染一个组件实例 */}
      {open && (
        <CookieSettings defaultOpen={true} onClose={closeSettings} />
      )}
    </CookieContext.Provider>
  );
}
