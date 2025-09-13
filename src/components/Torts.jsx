import Card from "./Card";
import "./Torts.module.css"

const cards = [
  {
    id: "1",
    price: 520,
    title: "Торт “Літнє бажання” з шоколадом та макарунами",
    subeTitle: "4 варіанти начинок",
    image: "./cake1.png",
  },
  {
    id: "2",
    price: 520,
    title: "Весільний триярусний торт з фруктами та квітами",
    subeTitle: "4 варіанти начинок",
    image: "./cake2.png",
  },
  {
    id: "3",
    price: 520,
    title: "Бісквітний торт з ягодами",
    subeTitle: "4 варіанти начинок",
    image: "./cake3.png",
  },
  {
    id: "4",
    price: 520,
    title: "Ванільно-карамельний торт з печивом Орео",
    subeTitle: "4 варіанти начинок",
    image: "./cake4.png",
  },
  {
    id: "5",
    price: 520,
    title: "Торт рожевий з макарунами",
    subeTitle: "4 варіанти начинок",
    image: "./cake5.png",
  },
];
function Torts() {
  return (
    <section className="torts">
      <div className="torts__top">
        <h2 className="torts__top--title">Торти</h2>
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
export default Torts;