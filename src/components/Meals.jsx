import { useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import "../index.css";

const Meals = () => {
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
    fetch('http://localhost:3001/meals')
    .then((response) => {
        return response.json()
    })
    .then((Responsedata) => {
        setMeals(Responsedata.mealskey)
    })
    }, []);

    console.log('meals', meals);

return (
  <ul id="meals">
    {meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} />
    ))}
  </ul>
);
}


export default Meals