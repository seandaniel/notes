export interface markdownObject {
  note1: string | null;
  note2: string | null;
  note3: string | null;
  note4: string | null;
  note5: string | null;
}

export interface contextType {
  markdown: markdownObject;
  defaultMarkdown: string;
  handleNote: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    noteNumber: string
  ) => void;
  minimizedNote: boolean;
  minimizeNote: () => void;
}
