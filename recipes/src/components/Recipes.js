import React from 'react'
import style from './recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) => {



    return (
        <div className={style.recipe}>
            <h1>{title} </h1>
            <p>Calories:{Math.round(calories)} </p>
             <ul>{ingredients.map(item=> (
                 <li>{item.text}</li>
             ))}</ul>
            <img className={style.image}src={image}  alt='food' />
        </div>
      );
}
 
export default Recipe;