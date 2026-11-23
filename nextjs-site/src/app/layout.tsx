import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cardioimmunology, Myocarditis & Pericarditis Research Group | University of Padova",
  description: "Cardioimmunology Research Group at the University of Padova. Clinical research, diagnosis, prognosis, and treatment of myocarditis, pericarditis, and inflammatory cardiomyopathies.",
  keywords: "myocarditis, pericarditis, recurrent pericarditis, cardioimmunology, Padova, Caforio, Baritussio, Giordani, Scognamiglio, CARDIM, cardiac MRI, ESC",
  openGraph: {
    title: "Cardioimmunology, Myocarditis & Pericarditis Research Group, University of Padova",
    description: "Academic research on myocarditis, recurrent pericarditis, and inflammatory heart diseases.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
