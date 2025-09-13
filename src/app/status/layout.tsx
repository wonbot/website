export const metadata = {
  title: "Expel | Status",
  description: "Check the current status and uptime of Expel Bot.",
  openGraph: {
    title: "Expel | Status",
    description: "Check the current status and uptime of Expel Bot.",
    url: "https://expel.best/status",
    images: [
      {
        url: "https://api.expel.best/bot/avatar",
        width: 512,
        height: 512,
        alt: "Expel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Expel | Status",
    description: "Check the current status and uptime of Expel Bot.",
    images: ["https://api.expel.best/bot/avatar"],
  },
};

export const viewport = {
  themeColor: "#536a80",
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
