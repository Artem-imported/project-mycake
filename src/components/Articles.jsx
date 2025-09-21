import ArticlesCards from "./ArticlesCards";

function Articles() {
    const cards = [
        {
            img: "/img/articles-1.png",
            title: "Кращі кондитерські Києва",
            description: "Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи, а також де можна купити натуральний шоколад. І вам розкажемо...",
        },
        {
            img: "/img/articles-2.png",
            title: "Як приготувати справжній французький круасан",
            description: "Всі, хто любить круасани, мріють одного разу опинитися в маленькій французькій пекарні з гарячим круасаном в руках. Чи це не чудово? Ті, хто там побу...",
        },
        {
            img: "/img/articles-3.png",
            title: "Рецепти найсмачніших макарунів з незвичними смаками",
            description: "Вишукане і неймовірно смачне французьке печиво «Макаронів» за класичним рецептом готується на основі мигдальної муки. Н...",
        },
        {
            img: "/img/articles-4.png",
            title: "Малинове безе в домашніх умовах",
            description: "Безе, або меренга - це класичний французький десерт з запеченого білкового крему. Неймовірно ніжний, м'який всередині і трохи хрусткий зов...",
        },
        {
            img: "/img/articles-5.png",
            title: "Рецепти шоколаду без цукру",
            description: "Розглянемо популярні способи приготування домашнього шоколаду. Його головна особливість — можливість комбінування різних продуктів...",
        },
    ];

  return (
    <section className="articles">
      <div className="articles__container">
        <div className="articles__header">
          <h2 className="articles__header--title">Статті</h2>
          <div className="articles__header--actions">
            <button className="articles__header--actions--button">Переглянути всі</button>
            <div className="articles__header--actions--arrows">
              <img src="./img/show-more.png" alt="arrows" />
            </div>
          </div>
        </div>

        <div className="articles__container--cards">
          {cards.map((card, i) => (
            <ArticlesCards key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
