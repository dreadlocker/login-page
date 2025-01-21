"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store.js";

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
