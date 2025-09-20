import Card from "./CardText";

const cards = [
  {
    id: "1",
    title: "Інна Пономаренко",
    subeTitle: "23 відгуки",
    image: "./фото (16).png",
    text: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
  },
  {
    id: "2",
    title: "Home Bakery",
    subeTitle: "59 відгуків",
    image: "./фото (17).png",
    text: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
  },
  {
    id: "3",
    title: "Іванна Марченко",
    subeTitle: "15 відгуків",
    image: "./фото (18).png",
    text: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
  },
];
function Conditers() {
  return (
    <section className="torts">
      <div className="torts__top">
        <h2 className="torts__top--title">Кращі кондитери</h2>
        <div className="torts__top--watch">
          <button className="torts__top--watch--button">Переглянути всі</button>
          <img style={{width:"53px"}} src="./strelki.svg"></img>
        </div>
      </div>
      <div className="torts__container3"> 
        {cards.map((cake, index) => (
            <Card 
                key={index}
                image={cake.image}
                title={cake.title}
                subeTitle={cake.subeTitle}
                text={cake.text}
            />
        ))}
      </div>
    </section>
  );
}
export default Conditers;