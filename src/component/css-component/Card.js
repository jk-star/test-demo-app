import "./Card.css";
const Card = ({ children, className = "" }) => {
    return(
        <div className={`card-div ${className}`}>
            {children}
        </div>
    );
}

export default Card;