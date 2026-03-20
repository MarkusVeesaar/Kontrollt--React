import { useEffect, useState} from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
    fetch('http://localhost:3001/meals')
    .then((response) => {
        return response.json()
    })
    .then((Responsedata) => {
        setMeals(Responsedata.mealskey)
    })
    }, [])

    console.log(meals)
    
    return (
        <ul id="meals">
            { 
                <p>list of mealss</p>
            }
        </ul>
    );
}


export default Meals