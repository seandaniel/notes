import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";

export const Header = () => {
  const { localStorageState } = useGlobalContext();
  const location = useLocation();
  return (
    <header>
      <ul>
        <li>
          <li>
            <Link to="/">Note 1</Link>
          </li>
        </li>
        <li>
          <Link to="/note2">Note 2</Link>
        </li>
        <li>
          <Link to="/note3">Note 3</Link>
        </li>
        <li>
          <Link to="/note4">Note 4</Link>
        </li>
        <li>
          <Link to="/note5">Note 5</Link>
        </li>
      </ul>
    </header>
  );
};
