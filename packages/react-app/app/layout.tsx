import "@/styles/globals.css";

import { AppProvider } from "@/providers/AppProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="fc:miniapp" content="<stringified MiniAppEmbed JSON>" />
      {/* <!-- For backward compatibility --> */}
      <meta name="fc:frame" content="<stringified MiniAppEmbed JSON>" />
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
