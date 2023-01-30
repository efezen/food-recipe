import "./App.css";
import { useState } from "react";
import Axios from "axios"

function App() {
  const YOUR_APP_ID = "API_ID";
  const YOUR_APP_KEY = "API_KEY";
  const [recipes, setRecipes] = useState([])
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async () => {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  }
  return (
    <div className="app">
      <h1>
        <u>Food Recibe Hub</u>
      </h1>
      <div className="app__searchForm">
        <input
          className="app__input"
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input className="app__submit" value="Get Recipe" type="submit" />
      </div>
    </div>
  );
}

export default App;
