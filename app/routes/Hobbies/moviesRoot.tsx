import { json, redirect } from "@remix-run/node";
import {
    Form,
    Link,
    Links,
    LiveReload,
    Meta,
    NavLink,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigation,
  } from "@remix-run/react";
  import type { LinksFunction } from "@remix-run/node";
  import appStylesHref from "./moviesStyle.css";
  import { createEmptyMovie, getMovies } from "./moviesData";
import type { Key } from "react";

export type movieType = { id: Key | null | undefined; first: string; last: string; favorite: boolean; }

export const action = async () => {
  const movie = await createEmptyMovie();
  return redirect(`/movies/${movie.id}/edit`);
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export const loader = async () => {
  const movies = await getMovies();
  return json({ movies });
};

export default function Movies() {
  // const { movies } = useLoaderData<{ movies: movieType[] }>();
  const { movies } = useLoaderData<{ movies: movieType[] | null | undefined }>() || { movies: [] };
  const navigation = useNavigation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Vinay's Movies</h1>
          <div 
          className={
            navigation.state === "loading" ? "loading" : ""
          }
          id="detail">
            <Outlet />
          </div>
          <nav>
          {movies.length ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to={`movies/${movie.id}`}
                >
                  <Link to={`movies/${movie.id}`}>
                    {movie.first || movie.last ? (
                      <>
                        {movie.first} {movie.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {movie.favorite ? (
                      <span>★</span>
                    ) : null}
                  </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search movies"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`/movies/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`/movies/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}