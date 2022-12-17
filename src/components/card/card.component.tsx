import "./card.styles.css";
import { IUser } from "../../App";

interface ICardProps {
  user: IUser;
}

const Card = ({ user }: ICardProps) => {
  const { name, id, email } = user;
  return (
    <div className="card-container">
      <img
        alt="user {item.name}"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
