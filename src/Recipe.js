import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,imgUrl,ingredients,url})=>{
    return(
        <div className={style.recipe}>
            <h2><a href={url} target="_blank" >{title}</a></h2>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p style={{fontWeight:'bold'}}>{Math.floor(calories)} Calories Per Serving</p>
            <img className={style.image} src={imgUrl} alt={title}/>
        </div>
    )   
}
export default Recipe;