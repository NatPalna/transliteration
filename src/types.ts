import { Dispatch } from "react";

export type Word = {
  id: number;
  cyrillic: string | undefined;
  latin?: string;
  truncate?: boolean;
};

export type WordItem = {
  data: Word;
  setDelWord: Dispatch<React.SetStateAction<Word | null>>;
};

export interface WordList {
  list: Word[];
  setWord: Dispatch<React.SetStateAction<Word[]>>;
}
