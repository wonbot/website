export const metadata = {
  title: "Expel | Embed Builder",
  description:
    "Create and customize Discord embeds with our easy-to-use embed builder.",
  openGraph: {
    title: "Expel | Embed Builder",
    description:
      "Create and customize Discord embeds with our easy-to-use embed builder.",
    url: "https://expel.best/embed",
    images: [
      {
        url: "https://s3.expel.best/min/av.png",
        width: 512,
        height: 512,
        alt: "Expel Logo",
      },
    ],
    themeColor: "#8faaa2",
  },
  twitter: {
    card: "summary",
    title: "Expel | Embed Builder",
    description:
      "Create and customize Discord embeds with our easy-to-use embed builder.",
    images: ["https://s3.expel.best/min/av.png"],
  },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
