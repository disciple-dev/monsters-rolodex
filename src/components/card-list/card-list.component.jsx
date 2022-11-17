import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ listItems }) => {
  return (
    <div className="card-list">
      {listItems.map((item) => (
        <Card user={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
