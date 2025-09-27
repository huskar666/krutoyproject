import CardArticles from "./CardArticles";

const cards = [
  {
    id: "1",
    title: "Кращі кондитерські Києва",
    subeTitle: "Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи, а також де можна купити натуральний шоколад. І вам розкажемо...",
    image: "./фото (19).png",
  },
  {
    id: "2",
    title: "Як приготувати справжній французький круасан",
    subeTitle: "Всі, хто любить круасани, мріють одного разу опинитися в маленькій французькій пекарні з гарячим круасаном в руках. Чи це не чудово? Ті, хто там побу...",
    image: "./фото (20).png",
  },
  {
    id: "3",
    title: "Рецепти найсмачніших макарунів з незвичними смаками",
    subeTitle: "Вишукане і неймовірно смачне французьке печиво «Макаронів» за класичним рецептом готується на основі мигдальної муки. Н...",
    image: "./фото (21).png",
  },
  {
    id: "4",
    title: "Малинове безе в домашніх умовах",
    subeTitle: "Безе, або меренга - це класичний французький десерт з запеченого білкового крему. Неймовірно ніжний, м'який всередині і трохи хрусткий зов...",
    image: "./фото (22).png",
  },
  {
    id: "5",
    title: "Рецепти шоколаду без цукру",
    subeTitle: "Розглянемо популярні способи приготування домашнього шоколаду. Його головна особливість — можливість комбінування різних продуктів...",
    image: "./фото (23).png",
  },
];
function Articles() {
  return (
    <section className="torts">
      <div className="torts__top">
        <h2 className="torts__top--title">Капкейки</h2>
        <div className="torts__top--watch">
          <button className="torts__top--watch--button">Переглянути всі</button>
          <img style={{width:"53px"}} src="./strelki.svg"></img>
        </div>
      </div>
      <div className="torts__container2"> 
        {cards.map((cake, index) => (
            <CardArticles 
                key={index}
                image={cake.image}
                price={cake.price}
                title={cake.title}
                subeTitle={cake.subeTitle}
            />
        ))}
      </div>
    </section>
  );
}
export default Articles;