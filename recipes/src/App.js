import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipes';
import axios from 'axios'

function App() {

  const APP_ID = 'c07e5293'
  const APP_KEY = '7d9631c248810f01ab683c221927f0f2'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect( ()=> {
    getRecipes();
  }, [query])

//  const getRecipes = async () => {
//     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
//     const data = await response.json();
//     setRecipes(data.hits)
//     // console.log(data.hits)
//  };

 const getRecipes = () => {
   axios
   .get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   .then(res => {
    //  console.log(res.data.hits)
     setRecipes(res.data.hits)
   })
   .catch(err => (err.response))
 }

 const updateSearch = e=> {
   setSearch(e.target.value)
  //  console.log(search)
 }

 const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
 }

  return (
    <div className="App">
      <form 
          onSubmit={getSearch}
          className="search-form">
        <input
          className="search-bar"
          type='text'
          value={search}
          onChange={updateSearch}
          />
          <button 
          className='search-button'
          type='submit'>Search</button>
      </form>
      <div className="container">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
