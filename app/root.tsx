import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://www.nerdfonts.com/assets/css/webfont.css"
    },
  ]
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#181614] max-w-screen overflow-x-hidden">
        <main className="bg-gradient-to-bl from-taupe-950 to-cod-gray-950 min-h-screen mx-auto ">
          <Navigation />
          {children}
          <Footer />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
