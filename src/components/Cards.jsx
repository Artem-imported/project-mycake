const Cards = ({ img, price, title, fillings }) => {
  return (
    <div className="cakes__card">
      <img src={img} alt={title} className="cakes__card--image" />
      <div className="cakes__card--info">
        <div className="cakes__card--info--price">
            <p className="cakes__card--price--p">{price} грн</p>
        </div>
        <div className="cakes__card--info--title">
            <h3 className="cakes__card--title--h3">{title}</h3>
        </div>
        <div className="cakes__card--info--fillings">
            <p className="cakes__card--fillings--p">{fillings}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;