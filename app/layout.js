import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "sonner";



export const metadata = {
  title: "IA",
  description: "Lets get started",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ConvexClientProvider>
        <Provider>
          {children}
          <Toaster/>
        </Provider>
        </ConvexClientProvider>

      </body>
    </html>
  );
}
