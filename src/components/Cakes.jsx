import Cards from './Cards';

const CakesBlock = () => {
  const cakes = [
    {
      img: "/img/cakes-1.png",
      price: 520,
      title: 'Торт "Літнє бажання" з шоколадом та макаранами',
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/cakes-2.png",
      price: 520,
      title: "Весільний триярусний торт з фруктами та квітами",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/cakes-3.png",
      price: 520,
      title: "Бісквітний торт з ягодами",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/cakes-4.png",
      price: 520,
      title: "Ванільно-карамельний торт з печивом Oreo",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/cakes-5.png",
      price: 520,
      title: "Торт рожевий з макаранами",
      fillings: "4 варіанти начинок",
    },
  ];

  return (
    <div className="cakes">
      <div className="cakes__header">
        <h2 className="cakes__title">Торти</h2>
        <div className="cakes__actions">
          <button className="cakes__button">Переглянути всі</button>
          <div className="cakes__arrows">
            <img src="./img/show-more.png" alt="arrows" />
          </div>
        </div>
      </div>

      <div className="cakes__list">
        {cakes.map((cake, i) => (
          <Cards
            key={i}
            img={cake.img}
            price={cake.price}
            title={cake.title}
            fillings={cake.fillings}
          />
        ))}
      </div>
    </div>
  );
};

export default CakesBlock;
