/* eslint-disable react/prop-types */
import CardImage from "./CardImage";
import CardLink from "./CardLink";
import CardTitle from "./CardTitle";
import CardParam from "./CardParam";
import "./Card.css";

const Card = ({ imageURL, title, param }) => {
  return (
    <div className="card">
      <CardImage imageURL={imageURL} />
      <div className="card_body">
        <CardTitle title={title} />
        <CardParam param={param} />
        <CardLink />
      </div>
    </div>
  );
};

export default Card;
