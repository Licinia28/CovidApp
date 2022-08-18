import React,{useEffect,useState} from 'react';
import './App.css';
import GlobalStats from './components/global'
import CountriesStats from './components/countriesStats'

import Search from './components/search'



function App() {
  const [globalStats, setglobalStats] = useState('')
  <Search/>
  const [CountriesStats, setgCountrieslStats] = useState("");


  useEffect(()=>{
    let url = "https://api.covid19api.com/summary";

    fetch(url).then((response) => response.json().then((data) =>{
      console.log(data);

      setglobalStats(data.Global)
      setgCountrieslStats(data.Countries)


    }))


  }, [])

  return (
    <div className="App">
      <GlobalStats global={globalStats}/>
      <CountriesStats countries = {countrieslStats} />

    </div>
    
  );
}

export default App;
