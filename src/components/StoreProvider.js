"use client";
import React from "react";
import { Provider } from "react-redux";
import LocaleSwitcher from "./LocaleSwitcher";
import store from "@/redux/store"; // Import the store you created
import { NextIntlClientProvider } from "next-intl";

const StoreProvider = ({ components, messages, locale }) => {
  return (
    <Provider store={store}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <LocaleSwitcher></LocaleSwitcher>
        {components}
      </NextIntlClientProvider>
    </Provider>
  );
};

export default StoreProvider;
