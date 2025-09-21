import BestCards from "./BestCards";

function Best() {
    const cards = [
        {
            img: "/img/best-1.png",
            name: "Інна Пономаренко",
            reviews: "23 відгуки",
            description: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
            services: ["Торти", "Цукерки", "+3"]
        },
        {
            img: "/img/best-2.png",
            name: "Home Bakery",
            reviews: "59 відгуки",
            description: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
            services: ["Торти", "Капкейки", "+3"],
        },
        {
            img: "/img/best-3.png",
            name: "Іванна Марченко",
            reviews: "15 відгуків",
            description: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
            services: ["Макаруни", "Капкейки", "+3"],
        },
    ];

  return (
    <section className="best">
      <div className="best__container">
        <div className="best__header">
          <h2 className="best__header--title">Кращі кондитери</h2>
          <div className="best__header--actions">
            <button className="best__header--actions--button">Переглянути всі</button>
            <div className="best__header--actions--arrows">
              <img src="./img/show-more.png" alt="arrows" />
            </div>
          </div>
        </div>

        <div className="best__container--cards">
          {cards.map((card, i) => (
            <BestCards key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Best;
