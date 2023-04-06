import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext(null);

// const defaultMarkdown = `# Heading

// **Bold Text**

// *Italic Text*

// ~~StrikeThrough Text~~

// * List Item 1
// * List Item 2
// * [ ] To Do
// * [x] Done

// \`\`\`
// code {
//   code: lives here;
// }
// \`\`\`
// `;

const defaultMarkdown = "X";

const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let note = localStorage.getItem("Notes");

    if (note) {
      return localStorage.getItem("Notes");
    } else {
      return [];
    }
  };

  console.log(getLocalStorage());
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
  const [notes, setNotes] = useState(getLocalStorage());
  const [note, setNote] = useState({
    noteText: "",
    noteId: "",
    minimized: false,
  });
  const [minimizedNote, setMinimizedNote] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem(`Notes`, notes);
    console.log(notes);
  }, [notes]);

  const handleNote = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    noteNumber: string
  ) => {
    setMarkdown(e.target.value);

    // need to set note only once
    const newNote = {
      ...note,
      noteID: noteNumber,
      noteText: e.target.value,
    };
    // setNote({
    //   ...note,
    //   noteId: noteNumber,
    //   noteText: e.target.value,
    // });

    setNotes([newNote]);
    // localStorage.setItem(`Notes`, JSON.stringify(notes));
  };

  const minimizeNote = (noteNumber: string) => {
    setMinimizedNote(!minimizedNote);
    setNote({
      ...note,
      minimized: !minimizedNote,
    });
    localStorage.setItem(`Note${noteNumber}`, JSON.stringify(note));
  };

  return (
    <AppContext.Provider
      value={{
        note,
        markdown,
        handleNote,
        minimizedNote,
        minimizeNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const currentAppContext = useContext(AppContext);
  if (!currentAppContext) {
    throw new Error("useGlobalContext must be used within a AppProvider");
  }
  return currentAppContext;
};

export { AppContext, AppProvider };
