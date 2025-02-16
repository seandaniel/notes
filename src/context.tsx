import React, { useState, useContext, PropsWithChildren } from "react";
import { markdownObject, contextType } from "./types";

const AppContext = React.createContext<contextType | null>(null);

const defaultMarkdown: string = `# **Welcome to Notes**

This app lets you jot down lists, to-do's, recipes, birthdays to remember, and everything in between. 
Every note taken will be saved on your browser for when you revisit. 😎

### To Do

* ~~Get groceries~~
* Walk the pup
* Fold laundry
* Tell Sean you like his app
* [Learn all markdown styling text](https://www.markdownguide.org/basic-syntax/)

> Enjoy!`;

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const getLocalStorage = (noteNumber: string): string | null => {
    return window.localStorage.getItem(`note${noteNumber}`);
  };

  // if string just has '/n' characters, return defaultMarkdown
  // if text area is empty while in textarea
  const [markdown, setMarkdown] = useState<markdownObject>({
    note1: getLocalStorage("1"),
    note2: getLocalStorage("2"),
    note3: getLocalStorage("3"),
    note4: getLocalStorage("4"),
    note5: getLocalStorage("5"),
  });
  const [minimizedNote, setMinimizedNote] = useState<boolean>(true);

  const handleNote = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    noteNumber: string
  ): void => {
    setMarkdown({
      ...markdown,
      [e.target.name]: e.target.value,
    });

    localStorage.setItem(`note${noteNumber}`, e.target.value);
  };

  const minimizeNote = (): void => {
    setMinimizedNote(!minimizedNote);
  };

  // todo: useMemo around context value

  return (
    <AppContext.Provider
      value={{
        markdown,
        defaultMarkdown,
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
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return currentAppContext;
};

export { AppContext, AppProvider };
