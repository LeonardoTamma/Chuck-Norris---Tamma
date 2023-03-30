import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeText from './components/JokeText.jsx'

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [clicked, setClicked] = useState(false);
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    data.unshift("random");
    setCategories(data);
  }).catch((e)=>{
    console.log(e)
  })

  function generateJoke(){
    let selectedCategory = document.getElementById("dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + (selectedCategory==="random"?"random":("random?category=") + selectedCategory);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
  }

  function copyJoke(){
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }

  return (
    <div className="App" align="center">
      <Title>Chuck Norris Joke Generator</Title>

            

            <JokeText id='JokeText'>{joke}</JokeText>

            <Dropdown id='dropdown' values={categories}></Dropdown><br></br>

            <Button id='generate' callback={generateJoke}>CARICA JOKE</Button><br></br><br></br>
      <Button id='clipboard' callback={copyJoke} variant={clicked === true ? undefined : "disabled"}>COPIA JOKE</Button>

    </div>
  )
}

export default App