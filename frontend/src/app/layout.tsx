import "./globals.css";
import Header from '../Components/Header/page';
import Footer from '../Components/Footer/page';
import Script from "next/script";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const apiKey = process.env.YANDEX_API;

    return (
        <html lang="ru">
        <body className="min-h-screen flex flex-col">
        <Header/>
        {children}
        <Footer/>
        <Script src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
                strategy="beforeInteractive"/>
        </body>
        </html>
    );
}
