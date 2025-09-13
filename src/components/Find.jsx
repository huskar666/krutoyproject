import React from "react";
import "./Find.module.css"; 


function Main() {
  return (
    <div className="container">
      <div className="container__left">
        <h1 className="container__title">Пошукаємо щось смачненького?</h1>
        <p className="container__subtitle">
          Ми об'єднали кондитерів із різних міст, щоб необхідні смаколики можна було замовити ще легше
        </p>

        <div className="container__search">
          <input
            type="text"
            className="container__search-input"
          />
          <button className="container__search-btn">Шукати</button>
        </div>

        <div className="container__tags">
          <span className="container__tag">На день народження</span>
          <span className="container__tag">З фруктами</span>
          <span className="container__tag">Патріотичні</span>
          <span className="container__tag">Для чоловіків</span>
          <span className="container__tag">Для весілля</span>
          <span className="container__tag">Без глютену</span>
          <span className="container__tag">Веганські</span>
          <span className="container__tag">Без цукру</span>
          <span className="container__tag">Для дівчат</span>
          <span className="container__tag">З квітами</span>
          <span className="container__tag">Класичні рецепти</span>
          <span className="container__tag--1">Інші варіанти <img src="./strelka.png" alt="svgshka" className="container__tag--1--img"/> </span>
        </div>
                    
        <img src="./кнопки.png" alt="button" className="container__svg"/>
        <div className="container__categories">

          <div className="container__category">
            <img
              src="./фото.png"
              alt="Торти"
              className="container__category-img"
            />
            <p className="container__category-text">Торти</p>
          </div>
          <div className="container__category">
            <img
              src="./фото (1).png"
              alt="Цукерки"
              className="container__category-img"
            />
            <p className="container__category-text">Цукерки</p>
          </div>
          <div className="container__category">
            <img
              src="./фото (2).png"
              alt="Капкейки"
              className="container__category-img"
            />
            <p className="container__category-text">Капкейки</p>
          </div>
          <div className="container__category">
            <img
              src="./фото (3).png"
              alt="Макаруни"
              className="container__category-img"
            />
            <p className="container__category-text">Макаруни</p>
          </div>
          <div className="container__category">
            <img
              src="./фото (4).png"
              alt="Печиво"
              className="container__category-img"
            />
            <p className="container__category-text">Печиво</p>
          </div>
        </div>
      </div>

      <div className="container__right">
        <img src="./mainPhoto.png" alt="photo" className="container__right--photo"/>
      </div>
    </div>
  );
};

export default Main;
