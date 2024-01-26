import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Quarta Jovem UMP | Garanhuns, PE',
    template: '%s | Quarta Jovem UMP',
  },
  description: 'União de Mocidade Presbiteriana da Quarta Igreja Presbiteriana de Garanhuns',
  applicationName: 'Site da QJ',
  keywords: ['jovens', 'união de mocidade presbiteriana', 'ump', 'quarta jovem', 'cristão', 'garanhuns'],
  formatDetection: {
    email: 'quartajovemump@gmail.com',
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
