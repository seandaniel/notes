import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./_header.scss";

export const Header = () => {
  const { markdown } = useGlobalContext();
  const location = useLocation();

  // todo: map over array of notes and return a link for each note

  return (
    <header>
      <ul>
        <li className="notes-text">
          <span>N</span>
          <span>o</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
        </li>
        <li>
          <Link
            title="Note 1"
            to="/"
            className={`note-button note-button-1 ${
              location.pathname === "/" ? "active" : ""
            } ${markdown.note1 === "" ? "empty" : ""}`}
          ></Link>
        </li>
        <li>
          <Link
            title="Note 2"
            to="/note2"
            className={`note-button note-button-2 ${
              location.pathname === "/note2" ? "active" : ""
            } ${markdown.note2 === "" ? "empty" : ""}`}
          ></Link>
        </li>
        <li>
          <Link
            title="Note 3"
            to="/note3"
            className={`note-button note-button-3 ${
              location.pathname === "/note3" ? "active" : ""
            } ${markdown.note3 === "" ? "empty" : ""}`}
          ></Link>
        </li>
        <li>
          <Link
            title="Note 4"
            to="/note4"
            className={`note-button note-button-4 ${
              location.pathname === "/note4" ? "active" : ""
            } ${markdown.note4 === "" ? "empty" : ""}`}
          ></Link>
        </li>
        <li>
          <Link
            title="Note 5"
            to="/note5"
            className={`note-button note-button-5 ${
              location.pathname === "/note5" ? "active" : ""
            } ${markdown.note5 === "" ? "empty" : ""}`}
          ></Link>
        </li>
      </ul>
    </header>
  );
};
