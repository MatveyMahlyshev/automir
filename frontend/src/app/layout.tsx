import "./globals.css";
import Header from '../Components/Header/page';
import Footer from '../Components/Footer/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
