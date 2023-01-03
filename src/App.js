import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';


function App() {
  const [players, setPlayers]= useState([]);
  useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
    https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p={Playername}`)
    .then(res=>res.json())
    .then(data=>setPlayers(data));
  },[])
 
  return (
    <div className="App">
       <Header/>
    </div>
  );
}

export default App;

