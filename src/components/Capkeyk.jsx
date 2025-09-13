import Card from "./Card";

const cards = [
  {
    id: "1",
    price: 520,
    title: "Пасхальні капкейки шоколадні та ванільні ",
    subeTitle: "4 варіанти начинок",
    image: "./cup1.png",
  },
  {
    id: "2",
    price: 520,
    title: "Оригінальні капкейки з кремом та печивом",
    subeTitle: "4 варіанти начинок",
    image: "./cup2.png",
  },
  {
    id: "3",
    price: 520,
    title: "Капкейки з карамеллю 3 шт",
    subeTitle: "4 варіанти начинок",
    image: "./cup3.png",
  },
  {
    id: "4",
    price: 520,
    title: "Капкейки з ніжним кремом",
    subeTitle: "4 варіанти начинок",
    image: "./cup4.png",
  },
  {
    id: "5",
    price: 520,
    title: "Чорні капкейки з шоколадом та печивом",
    subeTitle: "4 варіанти начинок",
    image: "./cup5.png",
  },
];
function Capkeyk() {
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
            <Card 
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
export default Capkeyk;