import "./globals.css";
import Header from '../Components/Header/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="ru">
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
