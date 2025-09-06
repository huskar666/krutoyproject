

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container--logo">
          <h1 className="header__container--logo--title">MyCake</h1>
          <button className="header__container--logo--btn">
            <img
              className="header__container--logo--btn--img"
              src="./galochka.png"
              alt="vector"
            />
            Вся Україна
          </button>
        </div>

        <nav className="header__container--nav">
          <a className="header__container--nav--link">Десерти</a>
          <a className="header__container--nav--link">Кращі кондитери</a>
          <a className="header__container--nav--link">Корисні статті</a>
        </nav>

        <div className="header__container--user">
          <img
            className="header__container--user--chat"
            src="message.png"
            alt="message"
          />
          <p className="header__container--user--login">
            <img
              className="header__container--user--login--img"
              src="./account_circle.png"
              alt="account"
            />
            Увійти
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
