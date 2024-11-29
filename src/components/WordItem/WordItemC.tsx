import { FC } from "react";
import { WordItem } from "../../types";
import delIcon from "../../assets/img/del.svg";

export const WordItemC: FC<WordItem> = ({ data, setDelWord }) => {
  const handleClick = () => {
    setDelWord(data);
  };

  if (!data.cyrillic) return null;

  return (
    <li className="vocab_item">
      <span className="count"></span>

      <p className={data.cyrillic?.length > 7 ? "truncate" : "no-truncate"}>
        {data.cyrillic}
      </p>
      <span className="tooltip">{data.cyrillic}</span>
      <button className="del" onClick={handleClick} disabled={data.id === 1}>
        <img src={delIcon} alt="Удалить" />
      </button>
    </li>
  );
};
