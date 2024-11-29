import "../src/assets/styles/main.css";
import { useEffect, useState } from "react";
import { WordAdd } from "./components/WordAdd";
import { WordListC } from "./components/WordList";
import { Word } from "./types";

export const defaultWords: Word[] = [
  {
    id: 1,
    cyrillic: "Привет",
    latin: "Privet",
    truncate: false,
  },
];

function App() {
  const storage = localStorage.getItem("vocab");
  const [word, setWord] = useState<Word[]>(
    storage ? JSON.parse(storage) : defaultWords
  );

  useEffect(() => {
    localStorage.setItem("vocab", JSON.stringify(word));
  }, [word]);

  return (
    <>
      <header>
        <div className="container header">
          <h1 className="title">T.R.A.N.S.L.I.T.</h1>
        </div>
      </header>
      <WordAdd word={word} setWord={setWord} />
      <WordListC list={word} setWord={setWord} />
    </>
  );
}

export default App;
