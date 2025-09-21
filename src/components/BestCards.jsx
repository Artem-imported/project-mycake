const BestCards = ({ img, name, reviews, description, services }) => {
    return (
        <div className="best__card">
            <img src={img} alt="" className="best__card--img" />
            <div className="best__card--content">
                <p className="best__card--content--name">{name}</p>
                <p className="best__card--content--revievs">{reviews}</p>
                <p className="best__card--content--description">{description}</p>
                <div className="card__buttons">
                    {services.map((s, i) => (
                        <button className="best__card--content--services" key={i}>{s}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestCards;
