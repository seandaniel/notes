// react router
import { Routes, Route, useLocation } from "react-router-dom";

// components
import { Header } from "./components/Header";
import { Note1, Note2, Note3, Note4, Note5 } from "./components/Notes";

// styles
import "./App.scss";

const App = () => {
  const location = useLocation();

  // todo: extract location.pathname logic to a function

  return (
    <>
      <Header />
      <main
        className={
          location.pathname === "/"
            ? "note-background-1"
            : location.pathname === "/note2"
            ? "note-background-2"
            : location.pathname === "/note3"
            ? "note-background-3"
            : location.pathname === "/note4"
            ? "note-background-4"
            : location.pathname === "/note5"
            ? "note-background-5"
            : ""
        }
      >
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Note1 />} />
            <Route path="/note2" element={<Note2 />} />
            <Route path="/note3" element={<Note3 />} />
            <Route path="/note4" element={<Note4 />} />
            <Route path="/note5" element={<Note5 />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
