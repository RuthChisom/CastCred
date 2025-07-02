"use client";

import "@/styles/globals.css";
import { AppProvider } from "@/providers/AppProvider";
// import { sdk } from "@farcaster/frame-sdk";
import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    //   const url = new URL(window.location.href);
    //   const isMini =
    //     url.pathname.startsWith("/mini") ||
    //     url.searchParams.get("miniApp") === "true";
    //   if (isMini) {
    //     import("@farcaster/miniapp-sdk").then(({ sdk }) => {
    //       // Mini-App–specific bootstrap here
    sdk.actions.ready();
    //     });
    //   }
  }, []);
  return (
    <html lang="en">
      <meta
        name="fc:miniapp"
        content='{"version":"next","imageUrl":"https://grat-economy.vercel.app/_next/image?url=%2Fgratitude.png&w=48&q=75","button":{"title":"🚩 Start","action":{"type":"launch_miniapp","name":"Grat-Economy !","url":"https://3734-102-90-80-47.ngrok-free.app/","splashImageUrl":"https://grat-economy.vercel.app/_next/image?url=%2Fgratitude.png&w=48&q=75","splashBackgroundColor":"#f5f0ec"}}}'
      />
      {/* <!-- For backward compatibility --> */}
      <meta
        name="fc:frame"
        content='{"version":"next","imageUrl":"https://grat-economy.vercel.app/_next/image?url=%2Fgratitude.png&w=48&q=75","button":{"title":"🚩 Start","action":{"type":"launch_miniapp","name":"Grat-Economy !","url":"https://3734-102-90-80-47.ngrok-free.app/","splashImageUrl":"https://grat-economy.vercel.app/_next/image?url=%2Fgratitude.png&w=48&q=75","splashBackgroundColor":"#f5f0ec"}}}'
      />
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
