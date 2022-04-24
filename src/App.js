import logo from './logo.svg';
import './App.css';
import {Data} from './components/restroInsert'
import {ShowData} from './components/restroShow'
import { useState } from 'react';
function App() {
  const [showForm,setForm]=useState(false)
  const Add=()=>{
  
setForm(!showForm)
  }
  return (
    <div className="App">
     <button onClick={Add}
     >Click here for ADD Restaurant</button>
     {showForm?<Data/>:null}
     {!showForm? <ShowData/>:null}
    
    </div>
  );
}

export default App;
