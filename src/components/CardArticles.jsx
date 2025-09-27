import "./../index.css";

function CardArticle({image, subeTitle, title}) {

    return(
        <div className="cardArticle">
            <img style={{}} src={image} alt="article"/>
            <p className="cardArticle__title">{title}</p>
            <p className="cardArticle__subeTitle">{subeTitle}</p>
        </div>
    )
}

export default CardArticle;