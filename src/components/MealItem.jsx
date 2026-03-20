import "../index.css";
import Button from "./UI/Button.jsx";

const MealItem = (props) => {
    const Hind = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
        props.meal.price
    );
    return (
        <li>
            <article className="meal-item">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p>{Hind}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p>
                    <Button value={false}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem