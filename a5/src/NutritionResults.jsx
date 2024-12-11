import React from 'react';

export default function NutrientResults(props){

  return (
    <div>
      <h2>Calories: {props.calories}</h2>
      <h3>Proteins: {props.proteins}</h3>
      <h3>Fats: {props.fats}</h3>
      <h3>Carbs: {props.carbs}</h3>
    </div>
  )
}