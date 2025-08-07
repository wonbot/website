export const metadata = {
  title: "Expel | Status",
  description: "Check the current status and uptime of Tempt Bot.",
  openGraph: {
    title: "Expel | Status",
    description: "Check the current status and uptime of Tempt Bot.",
    url: "https://expel.best/status",
    images: [
      {
        url: "https://s3.expel.best/min/av.png",
        width: 512,
        height: 512,
        alt: "Expel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Expel | Status",
    description: "Check the current status and uptime of Tempt Bot.",
    images: ["https://s3.expel.best/min/av.png"],
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
