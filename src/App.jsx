import { useState } from "react";

let numero = 1;
function App() {
  const [numeros, setNumeros] = useState([]);

  function addNumber(){
    setNumeros([...numeros, numeros.length]);

    numero = numero +1;
  }

  return (
    <div>
      <button onClick={addNumber}>Crique</button>
      <h1>Numeros</h1>
      <ul>
        {numeros.map((numero, index) =>(
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
