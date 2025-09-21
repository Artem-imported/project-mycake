import Cards from "./Cards";


const CapCakesBlock = () => {
  const cakes = [
    {
      img: "/img/capcakes-1.png",
      price: 520,
      title: 'Пасхальні капкейки шоколадні та ванільні ',
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/capcakes-2.png",
      price: 520,
      title: "Оригінальні капкейки з кремом та печивом",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/capcakes-3.png",
      price: 520,
      title: "Капкейки з карамеллю 3 шт",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/capcakes-4.png",
      price: 520,
      title: "Капкейки з ніжним кремом",
      fillings: "4 варіанти начинок",
    },
    {
      img: "/img/capcakes-5.png",
      price: 520,
      title: "Чорні капкейки з шоколадом та печивом",
      fillings: "4 варіанти начинок",
    },
  ];

  return (
    <div className="cakes">
      <div className="cakes__header">
        <h2 className="cakes__title">Капкейки</h2>
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

export default CapCakesBlock;
