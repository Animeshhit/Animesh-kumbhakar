import { Bebas_Neue, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const babesNeueFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-babesneue",
});

export { babesNeueFont, inter };
