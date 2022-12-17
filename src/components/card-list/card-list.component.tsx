import "./card-list.styles.css";
import Card from "../card/card.component";
import { IUser } from "../../App";

interface ICardListProps {
  listItems: IUser[];
}

const CardList = ({ listItems }: ICardListProps) => {
  return (
    <div className="card-list">
      {listItems.map((item) => (
        <Card user={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
