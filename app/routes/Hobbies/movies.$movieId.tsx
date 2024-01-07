import { json } from "@remix-run/node";
// import type { LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { Form, useLoaderData } from "@remix-run/react";
import type { FunctionComponent } from "react";
import { getMovie } from "./moviesData";

type Params = {
  movieId: string;
};

export const loader = async ({ params }: { params: Params }) => {
  invariant(params.movieId, "Missing movieId param");
  const movie = await getMovie(params.movieId);
  if (!movie) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ movie });
};

export type MovieRecord = {
    first: string;
    last: string;
    avatar: string;
    twitter: string;
    notes: string;
    favorite: boolean;
  };
  

export default function Movie() {
  const { movie } = useLoaderData<typeof loader>();
  // const movie = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="movie">
      <div>
        <img
          alt={`${movie.first} ${movie.last} avatar`}
          key={movie.avatar}
          src={movie.avatar}
        />
      </div>

      <div>
        <h1>
          {movie.first || movie.last ? (
            <>
              {movie.first} {movie.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite movie={movie} />
        </h1>

        {movie.twitter ? (
          <p>
            <a
              href={`https://twitter.com/${movie.twitter}`}
            >
              {movie.twitter}
            </a>
          </p>
        ) : null}

        {movie.notes ? <p>{movie.notes}</p> : null}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record."
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Favorite: FunctionComponent<{
  movie: Pick<MovieRecord, "favorite">;
}> = ({ movie }) => {
  const favorite = movie.favorite;

  return (
    <Form method="post">
      <button
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};
