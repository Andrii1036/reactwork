import './App.css';
import {useEffect, useState} from "react";
import Space from "./components/Space/Space";


const spaceUrl = 'https://api.spacexdata.com/v3/launches/'

const App =()=>{

  let [space,setSpace]=useState([])

  useEffect(()=>{
    fetch(spaceUrl)
        .then(value => value.json())
        .then(value => setSpace(value.filter(item=>item.launch_year!=="2020")));
  },[]);

  return(
      space.map(item=><Space data={item} key={item.launch_date_unix}/>)
  );
};

export default App;
