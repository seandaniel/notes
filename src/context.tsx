import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext(null);

const defaultMarkdown = `# Heading

**Bold Text**

*Italic Text*

~~StrikeThrough Text~~

* List Item 1
* List Item 2
* [ ] To Do
* [x] Done

\`\`\`
code {
  code: lives here;
}
\`\`\`
`;

const AppProvider = ({ children }) => {
  const getLocalStorage = (noteNumber: string): string | false | null => {
    let note = localStorage.getItem(`note${noteNumber}`);

    if (note) {
      return localStorage.getItem(`note${noteNumber}`);
    } else {
      return false;
    }
  };

  const [note, setNote] = useState({
    noteNumber: 1,
    minimizeNote: false,
    noteText: "",
  });

  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
  const [localStorageState, setLocalStorageState] = useState<
    string | false | null
  >(getLocalStorage("1"));

  // no spaces issue
  useEffect(() => {
    localStorage.setItem("Note1", JSON.stringify(note));
  }, [note]);

  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    setNote({
      ...note,
      noteText: e.target.value,
    });
  };

  const [minimizedNote, setMinimizedNote] = useState<boolean>(true);
  const minimizeNote = () => {
    setMinimizedNote(!minimizedNote);
    setNote({
      ...note,
      minimizeNote: minimizedNote,
    });
  };

  return (
    <AppContext.Provider
      value={{
        markdown,
        localStorageState,
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
