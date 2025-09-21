function Footer(){
    return(
        <section className="footer">
            <div className="footer__main">
                <div className="footer__logo">
                    <h2 className="footer__logo--title">MyCake</h2>
                    <button className="footer__logo--button">
                        <img className="footer__logo--button--img" src="./img/location_pin.png" alt="" />
                        Вся Україна
                    </button>
                </div>
                <div className="footer__links">
                    <p href="" className="footer__links--link">Десерти</p>
                    <p href="" className="footer__links--link">Кращі кондитери</p>
                    <p href="" className="footer__links--link">Корисні статті</p>
                </div>
                <div className="footer__info">
                    <div className="footer__info--buttons">
                        <button className="footer__info--buttons--rules">Правила користування</button>
                        <button className="footer__info--buttons--form">Форма зворотнього зв’язку</button>
                    </div>
                    <div className="footer__info--links">
                        <div className="footer__info--links--text">
                            <p className="footer__info--text--textone">© Mycake 2022</p>
                            <p className="footer__info--text--texttwo">All rights reserved</p>
                        </div>
                        <div className="footer__info--links--social">
                            <img className="footer__info--links--instagram" src="/img/instagram-icon.png" alt="" />
                            <img className="footer__info--links--youtube" src="/img/youtube-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;