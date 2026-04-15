"use client";

import { loadStore, store } from "@/store";
import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    loadStore();
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
