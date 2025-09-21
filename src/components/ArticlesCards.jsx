const ArticlesCards = ({ img, title, description }) => {
    return (
        <div className="articles__card">
            <img src={img} alt="" className="articles__card--img" />
            <div className="articles__card--content">
                <p className="articles__card--content--title">{title}</p>
                <p className="articles__card--content--description">{description}</p>
            </div>
        </div>
    );
};

export default ArticlesCards;
