import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <title>資訊技能樹</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css"
        />
        <meta name="application-name" content="資訊技能樹" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="資訊技能樹" />
        <meta name="description" content="資訊技能樹" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/ios/152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ios/180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/ios/167.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ios/32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ios/16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icon.png" />
      </head>
      <body className="leading-6">
        <div>{children}</div>
        <ToastContainer />
      </body>
    </html>
  );
}
