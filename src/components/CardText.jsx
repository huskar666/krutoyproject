import "./../index.css";

function CardText({image, subeTitle, title, text}) {

    return(
        <div className="cardText">
            <img className="cardText__img" src={image} alt="cardtext"/>
            <div className="cardText__div"> 
                <p className="cardText__div--title">{title}</p>  
                <p className="cardText__div--subeTitle">{subeTitle}</p>
                <p className="cardText__div--text">{text}</p>
                <div className="cardText__div--container">
                    <button className="cardText__div--container--button">Торти</button>
                    <button className="cardText__div--container--button">Цукерки</button>
                    <button className="cardText__div--container--button">+3</button>
                </div>
            </div>
        </div>
    )
}

export default CardText;