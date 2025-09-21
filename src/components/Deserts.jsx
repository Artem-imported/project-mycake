const categories = [
    "На день народження",
    "З фруктами",
    "Патріотичні",
    "Для чоловіків",
    "Для весілля",
    "Без глютену",
    "Веганські",
    "Без цукру",
    "Для дівчат",
    "З квітами",
    "Класичні рецепти",
];

const items = [
    {title: "Торти", img: "./img/deserts-1.png"},
    {title: "Цукерки", img: "./img/deserts-2.png"},
    {title: "Капкейки", img: "./img/deserts-3.png"},
    {title: "Макаруни", img: "./img/deserts-4.png"},
    {title: "Печиво", img: "./img/deserts-5.png"}
]

function Deserts(){
    return(
        <section className="deserts">
            <div className="deserts__research">
                <div className="deserts__research--text">
                    <h1 className="deserts__research--text--title">Пошукаємо щось смачненького?</h1>
                    <p className="deserts__research--text--description">Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше</p>
                </div>
                <div className="deserts__research--search">
                    <input className="deserts__research--search--input" type="text" />
                    <button className="deserts__research--search--button">Шукати</button>
                </div>
                <div className="deserts__research--categories">
                    {categories.map((cat, index) => (
                        <button className="deserts__research--categories--button" key={index}>{cat}</button>
                    ))}
                    <select className="deserts__research--categories--select">
                        <option value="value1">Інші варіанти</option>
                    </select>
                </div>
                <div className="deserts__research--cakes">
                    <div className="deserts__research--cakes--buttons">
                        <img src="./img/deserts-btn.png" alt="" />
                    </div>
                    <div className="deserts__research--cakes--images">
                        {items.map((item, index) => (
                            <div key={index} className="deserts__research--cakes--images--card">
                                <img src={item.img} alt={item.title} />
                                <p className="deserts__research--cakes--images--card--p">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="deserts__galery">
                <div className="deserts__galery--1">
                        <img src="./img/deserts-2-1.png" alt="" />
                        <img src="./img/deserts-2-2.png" alt="" />
                </div>
                <img src="./img/deserts-2-3.png" alt="" />
            </div>
        </section>
    )
}

export default Deserts;