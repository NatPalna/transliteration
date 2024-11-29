import { FC, useEffect, useState } from "react";
import { Word, WordList } from "../../types";
import { WordItemC } from "../WordItem/WordItemC";
import { WordItemL } from "../WordItem/WordItemL";
import delIcon from "../../assets/img/del.svg";

export const WordListC: FC<WordList> = ({ list, setWord }) => {
  const [delWord, setDelWord] = useState<Word | null>(null);

  useEffect(() => {
    if (delWord) {
      const updateVocab = list.filter((item) => item.id !== delWord.id);

      setWord(updateVocab);
    }
  }, [delWord]);

  return (
    <section>
      <div className="container word-сontainer">
        <div className="word-list">
          <ul
            className="cyrillic vocab"
            role="list"
            aria-labelledby="list-heading"
          >
            {list.map((item) => (
              <WordItemC key={item.id} data={item} setDelWord={setDelWord} />
            ))}
          </ul>
          <ul
            className="latin vocab"
            role="list"
            aria-labelledby="list-heading"
          >
            {list.map((item) => (
              <WordItemL key={item.id} data={item} setDelWord={setDelWord} />
            ))}
          </ul>
        </div>
        <button className="btn-clear" onClick={() => setWord([list[0]])}>
          <img
            src={delIcon}
            alt="Очистить всё"
            width={24}
            className="btn-clear_icon"
          />
          Очистить всё
        </button>
      </div>
    </section>
  );
};
