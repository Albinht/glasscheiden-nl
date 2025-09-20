import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glas in 't Bakkie - 40 jaar glasbak | Glasrecycling Nederland",
  description: "Op 17 mei 2018 bestaat de glasbak 40 jaar! Elke keer dat een fles of potje in de glasbak verdwijnt, wordt het glas zonder kwaliteitsverlies gerecycled. #ikglasbak",
  keywords: "glasbak, glasrecycling, glas recyclen, glasbakkie, glas scheiden, duurzaamheid, milieu, nedvang",
  openGraph: {
    title: "Glas in 't Bakkie - 40 jaar glasbak",
    description: "Vier het 40-jarig bestaan van de glasbak mee! Glasrecycling voor een duurzame toekomst.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
