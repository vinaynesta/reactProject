import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import ClassBasedComponent from "./classBasedComponent";
// import FunctionBasedComponent from "./functionBasedComponent";
// import Game from "./game";
// import Movies from "./routes/Hobbies/moviesRoot";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h3>Vinay's React Application</h3><Link className="home-button" to="/">Go to Home</Link>
        {/* <ClassBasedComponent></ClassBasedComponent>
        <FunctionBasedComponent></FunctionBasedComponent> */}
        {/* <Movies /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
