import React from "react";
import NutrientResults from './NutrientResults'

export default function NutritionPage() {
  const API_KEY = "74ea1cc4f8904ee49719904f4c3c3499";
  const [dish_name, setdish_name] = React.useState("");
  const [nutrients, setNutrients] = React.useState({});
  const API_URL = `https://api.spoonacular.com/recipes//guessNutrition?title=${dish_name}&&apiKey=${API_KEY}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    // add api request here
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // handle data here
        setNutrients(data); // Limit to 5 result
      });
  };

  return (
    <>
      <div>
        <h1>Nutrition Page</h1>
        <div className="search-page">
          <div className="search-box">
            <h2>Find places near you</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={dish_name}
                placeholder="Enter the dish"
                onChange={(e) => setdish_name(e.target.value)}
              />
              <input className="button" type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>

      <div className="results">
        <ul>
          <NutrientResults
            calories={nutrients.calories.value}
            proteins={nutrients.protein.value}
            fats={nutrients.fat.value}
            carbs={nutrients.carbs.value}
          />
        </ul>
      </div>
    </>
  );
}
