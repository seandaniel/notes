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

const AppProvider = ({ children }) => {
  // set local storage or get individal localstorage?

  const [defaultMarkdown] = useState("X");

  const [markdown, setMarkdown] = useState<Object>({
    note1: window.localStorage.getItem("note1"),
    note2: window.localStorage.getItem("note2"),
  });

  useEffect(() => {}, [markdown]);
  const [notesState, setNotesState] = useState(window.localStorage);

  // use effect takes arguments, which I don't know how to update
  useEffect(() => {
    handleNote(e.target.value, "1");
  }, [markdown]);

  const handleNote = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    noteNumber: string
  ) => {
    setMarkdown({
      ...markdown,
      [e.target.name]: e.target.value,
    });

    // set it to that specific note
    localStorage.setItem(`note${noteNumber}`, markdown[`note${noteNumber}`]);
  };

  const [minimizedNote, setMinimizedNote] = useState<boolean>(true);
  const minimizeNote = () => {
    setMinimizedNote(!minimizedNote);
  };

  return (
    <AppContext.Provider
      value={{
        defaultMarkdown,
        markdown,
        notesState,
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
