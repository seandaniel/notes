import React, { useContext, useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Note1 = () => {
  const {
    markdown,
    localStorageState,
    handleNote,
    minimizeNote,
    minimizedNote,
  } = useGlobalContext();

  console.log(localStorageState);

  return (
    <>
      <button onClick={minimizeNote}>-</button>
      {minimizedNote && (
        <textarea
          rows="80"
          cols="80"
          value={
            JSON.parse(localStorageState).noteText
              ? JSON.parse(localStorageState).noteText
              : markdown
          }
          onChange={handleNote}
        ></textarea>
      )}
      <section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {JSON.parse(localStorageState).noteText
            ? JSON.parse(localStorageState).noteText
            : markdown}
        </ReactMarkdown>
      </section>
    </>
  );
};

export const Note2 = () => {
  const {
    markdown,
    localStorageState,
    handleNote,
    minimizeNote,
    minimizedNote,
  } = useGlobalContext();

  return (
    <>
      {/* <button onClick={minimizeNote}>-</button>
      {minimizedNote && (
        <textarea
          rows="80"
          cols="80"
          value={
            localStorageState ? JSON.parse(localStorageState).note : markdown
          }
          onChange={handleNote}
        ></textarea>
      )}
      <section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {localStorageState ? JSON.parse(localStorageState).note : markdown}
        </ReactMarkdown>
      </section> */}
    </>
  );
};

export const Note3 = () => {
  // const [markdown, setMarkdown] = useState<string>("## markdown preview");
  // // object of note types
  // const [localStorage, setLocalStorage] = useState(window.localStorage);
  // const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setMarkdown(e.target.value);
  //   localStorage.setItem("note2", e.target.value);
  // };
  // return (
  //   <>
  //     <textarea rows="80" cols="80" value={markdown} onChange={handleNote}>
  //       Hey
  //     </textarea>
  //     <section>
  //       <ReactMarkdown>{localStorage.getItem("note3")}</ReactMarkdown>
  //     </section>
  //   </>
  // );
};

export const Note4 = () => {
  // const [markdown, setMarkdown] = useState<string>("## markdown preview");
  // // object of note types
  // const [localStorage, setLocalStorage] = useState(window.localStorage);
  // const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setMarkdown(e.target.value);
  //   localStorage.setItem("note2", e.target.value);
  // };
  // return (
  //   <>
  //     <textarea rows="80" cols="80" value={markdown} onChange={handleNote}>
  //       Hey
  //     </textarea>
  //     <section>
  //       <ReactMarkdown>{localStorage.getItem("note4")}</ReactMarkdown>
  //     </section>
  //   </>
  // );
};

export const Note5 = () => {
  // const [markdown, setMarkdown] = useState<string>("## markdown preview");
  // // object of note types
  // const [localStorage, setLocalStorage] = useState(window.localStorage);
  // const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setMarkdown(e.target.value);
  //   localStorage.setItem("note2", e.target.value);
  // };
  // return (
  //   <>
  //     <textarea rows="80" cols="80" value={markdown} onChange={handleNote}>
  //       Hey
  //     </textarea>
  //     <section>
  //       <ReactMarkdown>{localStorage.getItem("note5")}</ReactMarkdown>
  //     </section>
  //   </>
  // );
};
