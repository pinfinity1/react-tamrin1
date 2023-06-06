/* eslint-disable react/prop-types */
const CardImage = ({ imageURL }) => {
  return (
    <div className="card_image">
      <img src={imageURL} alt="Card Image" />
    </div>
  );
};

export default CardImage;
