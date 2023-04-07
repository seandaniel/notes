import React, { useContext, useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Note1 = () => {
  const {
    defaultMarkdown,
    markdown,
    notesState,
    handleNote,
    minimizedNote,
    minimizeNote,
  } = useGlobalContext();
  // object.values will put all the values of an object into an array
  // object.keys will put all keys of an object into an array

  // issue is when we don't have a note, it can't grab Object.values(notesState)[0] as it is undefined
  // let note1Text;

  // // if we have the noteState (localStorage), grab the text
  // if (notesState.length !== 0) {
  //   note1Text = JSON.parse(Object.values(notesState)[0]).note1;
  // } else {
  //   // if we don't have the note, the text is an empty string
  //   note1Text = "";
  // }

  const note1Text = Object.values(notesState)[0];
  return (
    <>
      <button onClick={minimizeNote}>-</button>
      {minimizedNote && (
        <textarea
          name="note1"
          s
          rows="80"
          cols="80"
          value={markdown.note1 ? markdown.note1 : defaultMarkdown}
          onChange={(e) => handleNote(e, "1")}
        ></textarea>
      )}
      <section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown.note1 ? markdown.note1 : defaultMarkdown}
        </ReactMarkdown>
      </section>
    </>
  );
};

export const Note2 = () => {
  const {
    markdown,
    defaultMarkdown,
    notesState,
    handleNote,
    minimizedNote,
    minimizeNote,
  } = useGlobalContext();
  // object.values will put all the values of an object into an array
  // object.keys will put all keys of an object into an array

  // issue is when we don't have a note, it can't grab Object.values(notesState)[0] as it is undefined
  // let note1Text;

  // // if we have the noteState (localStorage), grab the text
  // if (notesState.length !== 0) {
  //   note1Text = JSON.parse(Object.values(notesState)[0]).note1;
  // } else {
  //   // if we don't have the note, the text is an empty string
  //   note1Text = "";
  // }

  const note1Text = Object.values(notesState)[1];
  return (
    <>
      <button onClick={minimizeNote}>-</button>
      {minimizedNote && (
        <textarea
          name="note2"
          rows="80"
          cols="80"
          value={markdown.note2 ? markdown.note2 : defaultMarkdown}
          onChange={(e) => handleNote(e, "2")}
        ></textarea>
      )}
      <section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown.note2 ? markdown.note2 : defaultMarkdown}
        </ReactMarkdown>
      </section>
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
