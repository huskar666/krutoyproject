import styles from "./header.module.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container--logo">
          <h1 className="header__container--logo--title">MyCake</h1>
          <button className="header__container--logo--btn"><img className="header__container--logo--btn--img" src="" /></button>
        </div>

        <nav className="header__container--nav">
          <a className="header__container--nav--link">Десерти</a>
          <a className="header__container--nav--link">Кращі кондитери</a>
          <a className="header__container--nav--link">Корисні статті</a>
        </nav>

        <div className="header__container--user">
          <img className="header__container--user--chat" src="" alt="" />
          <p className="header__container--user--login"><img className="header__container--user--login--img" src="" /></p>
        </div>
      </div>
    </header>
  );
}

export default Header;