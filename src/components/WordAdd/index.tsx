import { Dispatch, FC, useState } from "react";
import { transliterate as tr } from "transliteration";
import { Word } from "../../types";

interface Props {
  word: Word[];
  setWord: Dispatch<React.SetStateAction<Word[]>>;
}

export const WordAdd: FC<Props> = ({ word, setWord }) => {
  const [newWord, setNewWord] = useState<string>("");
  const translit = () => tr(newWord);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item: Word = {
      id: new Date().getTime(),
      cyrillic: newWord,
      latin: translit(),
    };

    setWord([...word, item]);
    setNewWord("");
  };
  return (
    <section>
      <div className="container">
        <form className="word-add" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Начните вводить текст"
            className="input"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <button className="btn">Добавить</button>
        </form>
      </div>
    </section>
  );
};
