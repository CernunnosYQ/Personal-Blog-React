import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";
import "./tailwind.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";


export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://www.nerdfonts.com/assets/css/webfont.css"
    },
  ]
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <Error404 />

      default:
        return (
          <div>
            <h1>
              {error.status} {error.statusText}
            </h1>
            <p>{error.data}</p>
          </div>
        )
    }
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>
  }
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
