import "@/globals.css";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/nav/MainNav";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";
import { GradientContainer } from "@/components/ui/gradient-container";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Expel",
  description:
    "An aesthetic, all-in-one bot that suits all your server's needs.",
  openGraph: {
    title: "Expel",
    description:
      "An aesthetic, all-in-one bot that suits all your server's needs.",
    url: "https://expel.best",
    images: [
      {
        url: "https://s3.expel.best/min/av.png",
        width: 512,
        height: 512,
        alt: "Expel Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Expel",
    description:
      "An aesthetic, all-in-one bot that suits all your server's needs.",
    images: ["https://s3.expel.best/min/av.png"],
  },
  icons: {
    icon: "https://s3.expel.best/min/av.png",
    shortcut: "https://s3.expel.best/min/av.png",
    apple: "https://s3.expel.best/min/av.png",
  },
};
export const viewport = {
  themeColor: "#8f9daaff",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen antialiased bg-[#406258b7]">
        <Theme
          appearance="dark"
          accentColor="jade"
          grayColor="slate"
          scaling="100%"
        >
          <GradientContainer />

          <div className="relative z-10">
            <MainNav />
            {children}
          </div>
          <Toaster
            theme="dark"
            position="top-right"
            richColors
            toastOptions={{
              style: {
                background: "rgba(17, 17, 17, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
              className: "glass-panel select-none",
            }}
          />
        </Theme>
      </body>
    </html>
  );
}
