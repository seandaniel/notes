import { useGlobalContext } from "../context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./_notes.scss";

export const Note1 = () => {
  const { defaultMarkdown, markdown, handleNote, minimizedNote, minimizeNote } =
    useGlobalContext();
  return (
    <>
      <section className="note-container">
        <div className="button-textarea-container">
          {minimizedNote ? (
            <button onClick={minimizeNote} title="Minimize Note">
              <FaMinus />
            </button>
          ) : (
            <button onClick={minimizeNote} title="Unminimize Note">
              <FaPlus />
            </button>
          )}
          {minimizedNote && (
            <textarea
              name="note1"
              rows={20}
              cols={50}
              value={
                markdown.note1
                  ? markdown.note1
                  : markdown.note1 === ""
                  ? ""
                  : defaultMarkdown
              }
              onChange={(e) => handleNote(e, "1")}
            ></textarea>
          )}
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`note-output-container note-output-container-1 ${
              !minimizedNote ? "max-width-full" : ""
            }`}
          >
            {markdown.note1
              ? markdown.note1
              : markdown.note1 === ""
              ? ""
              : defaultMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export const Note2 = () => {
  const { defaultMarkdown, markdown, handleNote, minimizedNote, minimizeNote } =
    useGlobalContext();
  return (
    <>
      <section className="note-container">
        <div className="button-textarea-container">
          {minimizedNote ? (
            <button onClick={minimizeNote} title="Minimize Note">
              <FaMinus />
            </button>
          ) : (
            <button onClick={minimizeNote} title="Unminimize Note">
              <FaPlus />
            </button>
          )}
          {minimizedNote && (
            <textarea
              name="note2"
              rows={20}
              cols={50}
              value={
                markdown.note2
                  ? markdown.note2
                  : markdown.note2 === ""
                  ? ""
                  : defaultMarkdown
              }
              onChange={(e) => handleNote(e, "2")}
            ></textarea>
          )}
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`note-output-container note-output-container-2 ${
              !minimizedNote ? "max-width-full" : ""
            }`}
          >
            {markdown.note2
              ? markdown.note2
              : markdown.note2 === ""
              ? ""
              : defaultMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export const Note3 = () => {
  const { defaultMarkdown, markdown, handleNote, minimizedNote, minimizeNote } =
    useGlobalContext();
  return (
    <>
      <section className="note-container">
        <div className="button-textarea-container">
          {minimizedNote ? (
            <button onClick={minimizeNote} title="Minimize Note">
              <FaMinus />
            </button>
          ) : (
            <button onClick={minimizeNote} title="Unminimize Note">
              <FaPlus />
            </button>
          )}
          {minimizedNote && (
            <textarea
              name="note3"
              rows={20}
              cols={50}
              value={
                markdown.note3
                  ? markdown.note3
                  : markdown.note3 === ""
                  ? ""
                  : defaultMarkdown
              }
              onChange={(e) => handleNote(e, "3")}
            ></textarea>
          )}
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`note-output-container note-output-container-3 ${
              !minimizedNote ? "max-width-full" : ""
            }`}
          >
            {markdown.note3
              ? markdown.note3
              : markdown.note3 === ""
              ? ""
              : defaultMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export const Note4 = () => {
  const { defaultMarkdown, markdown, handleNote, minimizedNote, minimizeNote } =
    useGlobalContext();
  return (
    <>
      <section className="note-container">
        <div className="button-textarea-container">
          {minimizedNote ? (
            <button onClick={minimizeNote} title="Minimize Note">
              <FaMinus />
            </button>
          ) : (
            <button onClick={minimizeNote} title="Unminimize Note">
              <FaPlus />
            </button>
          )}
          {minimizedNote && (
            <textarea
              name="note4"
              rows={20}
              cols={50}
              value={
                markdown.note4
                  ? markdown.note4
                  : markdown.note4 === ""
                  ? ""
                  : defaultMarkdown
              }
              onChange={(e) => handleNote(e, "4")}
            ></textarea>
          )}
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`note-output-container note-output-container-3 ${
              !minimizedNote ? "max-width-full" : ""
            }`}
          >
            {markdown.note4
              ? markdown.note4
              : markdown.note4 === ""
              ? ""
              : defaultMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export const Note5 = () => {
  const { defaultMarkdown, markdown, handleNote, minimizedNote, minimizeNote } =
    useGlobalContext();
  return (
    <>
      <section className="note-container">
        <div className="button-textarea-container">
          {minimizedNote ? (
            <button onClick={minimizeNote} title="Minimize Note">
              <FaMinus />
            </button>
          ) : (
            <button onClick={minimizeNote} title="Unminimize Note">
              <FaPlus />
            </button>
          )}
          {minimizedNote && (
            <textarea
              name="note5"
              rows={20}
              cols={50}
              value={
                markdown.note5
                  ? markdown.note5
                  : markdown.note5 === ""
                  ? ""
                  : defaultMarkdown
              }
              onChange={(e) => handleNote(e, "5")}
            ></textarea>
          )}
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`note-output-container note-output-container-5 ${
              !minimizedNote ? "max-width-full" : ""
            }`}
          >
            {markdown.note5
              ? markdown.note5
              : markdown.note5 === ""
              ? ""
              : defaultMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};
