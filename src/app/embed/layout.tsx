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
        url: "https://api.expel.best/bot/avatar",
        width: 512,
        height: 512,
        alt: "Expel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Expel | Embed Builder",
    description:
      "Create and customize Discord embeds with our easy-to-use embed builder.",
    images: ["https://api.expel.best/bot/avatar"],
  },
};
export const viewport = {
  themeColor: "#536a80",
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
