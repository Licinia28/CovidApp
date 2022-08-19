import React,{useEffect,useState} from 'react';
import './App.css';
import GlobalStats from './components/global'
import CountriesStats from './components/countriesStats'

import Search from './components/search'



function App() {
  const [globalStats, setglobalStats] = useState('')
  const [coutrieslStats, setCoutrieslStats] = useState("");


  useEffect(()=>{
    let url = "https://api.covid19api.com/summary";

    fetch(url).then((response) => response.json().then((data) =>{
      console.log(data);

      setglobalStats(data.Global)
      setCoutrieslStats(data.Countries)


    })) 


  }, [])
  const searchCountry = ((text)=> {
    let value = text.toLowerCase();

    let result = [] ;
    result = coutrieslStats.filter((countries)=>{
      return countries.Country.toLowerCase().indexOf(value) !==-1
    });
    setCoutrieslStats (result);
  })

  return (
    <div className="App">
      <GlobalStats global={globalStats}/>
      <Search search={searchCountry} />
      <CountriesStats countries={coutrieslStats}/>

    </div>
    
  );
} 
export default App;
