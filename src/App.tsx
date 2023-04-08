import { Header } from "./components/Header";
import { Note1, Note2, Note3, Note4, Note5 } from "./components/Notes";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Note1 />} />
            <Route path="/note2" element={<Note2 />} />
            <Route path="/note3" element={<Note3 />} />
            <Route path="/note4" element={<Note4 />} />
            <Route path="/note5" element={<Note5 />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
