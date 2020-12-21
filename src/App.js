import './App.css';
import Recipe from './Recipe.js';
import Loading from './Loading.js';
import './Loading.css';
import React,{useEffect, useState} from 'react';
const App = ()=>{
  const APP_ID = '2212e6d2';
  const APP_KEY = '004ae82c566c5ee79f8a72436d1858b9';
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('')
  const [loader,setLoader]=useState(false);
  useEffect(() => {
   getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    setQuery(search);
    // setLoader(!loader)
    setSearch('');
    // setLoader(!loader)
  }
  return(
    <div className="App">
      <h1 className="title">Find My Recipe</h1> 
      <form className="search-form" onSubmit={submitHandler}>
        <input className="search-bar" type="text" value={search } onChange={updateSearch}/>
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
      {loader===true?<Loading/>:''}
      <div>{recipes.map(recipe=>(
        <Recipe 
          key={recipe.recipe.calories}
          title={recipe.recipe.label} 
          imgUrl={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}/>
           ))}
        </div>
    </div>
  )
}
export default App;
