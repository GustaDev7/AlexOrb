import { Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource/poppins"; // Importa todos os pesos padrão
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/700.css"; // Bold

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "3 Jovens | Marketing & Tecnologia",
  description: "Desenvolvo landing pages, sites institucionais, plataformas de cursos, e-commerces e outras soluções personalizadas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
