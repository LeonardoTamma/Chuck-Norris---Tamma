import { useState } from 'react' 
import Title from ' ./components/Title' 
import ' ./styles/App.css'

import Button from ' . /components/Button'

function App () {

const [count, setCount] = useState (g)

const [joke, setJoke] = useState("")

let loadJokeCallback = function(){}
let copyTextCallback = function(){}

console.log ()

return (

<div className="App">

<h1>Chuck Norris API Joke Generator</h1>

<Button text="Carica Joke" callback={loadTextCallback()}></Button>

<Button text= "Copia Joke" variant ={ joke === "" ? "disabled" : undefined } callback={copyTextCallback}></Button> <Button variant={ joke === "" ? "hover" : undefined } callback={loadtextCallBack()}></Button>

</div>
)
}

export default App