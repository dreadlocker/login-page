import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import StoreProvider from "@/components/StoreProvider";
import ErrorPage from "@/app/[locale]/[...slug]/page.js";
import "@/styles/globals.css"; // Import your global styles

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const notFound = !routing.locales.includes(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {notFound ? (
          <ErrorPage />
        ) : (
          <StoreProvider
            components={children}
            messages={messages}
            locale={locale}
          />
        )}
      </body>
    </html>
  );
}
