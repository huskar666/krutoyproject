import "./../index.css";

function Card({image, price, subeTitle, title}) {

    return(
        <div className="card">
            <img style={{}} src={image} alt="tort"/>
            <h4 className="card__price">{price}</h4>
            <p className="card__title">{title}</p>
            <p className="card__subeTitle">{subeTitle}</p>
        </div>
    )
}

export default Card;