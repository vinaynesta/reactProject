import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import './../styles/styles.css';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Home Page</h2>
      <h2>Quick links</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/vinay-nesta-672921195/" rel="noreferrer">
            Linked In
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/vinaynesta" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/" rel="noreferrer">
            Youtube
          </a>
        </li>
        <li>
          <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox" rel="noreferrer">
            E-mail
          </a>
        </li>
        <li>
            <Link to="/Hobbies">Hobbies</Link>
          </li>
        <li>
            <Link to="/game">Game</Link>
        </li>
        <li>
            <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
}
