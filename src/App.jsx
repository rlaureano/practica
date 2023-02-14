import { useState } from 'react'
import './App.css';

function App() {

  const [ state, setState ] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": "hola",
      "password": "hola"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://tareasback.000webhostapp.com/api/newUser", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  const handleChange = ({target}) => {

    setState({
      ...state,
      [target.name] : target.value
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='namme' name='namme' value={state?.name} onChange={handleChange}/>
        <input type="password" placeholder='password' name='password' value={state?.password} onChange={handleChange}/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
