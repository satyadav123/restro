import { useEffect, useState } from "react";
import './show.css'

  export const ShowData = () => {
   const [show,setShow]=useState([])
   useEffect(()=>{
    getData();
   },[])

   const onHandler=(e)=>{

        //console.log(show)
    let newData=show.map((e)=>{
        //console.log(e.age)
         return e;
    }).sort((a)=>{
        return a.rating>=1;
    })
    setShow(newData)

}
    const getData= ()=>{
      fetch('http://localhost:8081/resto')
    .then(response => response.json())
    .then(data => 
      setShow(data))
    

    };

    return (

      <div > 
          <button onClick={onHandler}>1 star</button>
          <button onClick={onHandler}>2 star</button>
          <button onClick={onHandler}>3 star</button>
          <button onClick={onHandler}>4 star</button>

      {show.map((e)=>(
          <div>
        <div className="showcss"> 
        <div>
<img src={e.url}></img>
</div>
<div>
<h3>{e.restroName}</h3>
<h5>{e.DesertName}</h5>
<h5>upto {e.time}</h5>
<h5>cost Rs {e.cost} for one</h5>

</div>

<div>
    <h5>{e.rating} star</h5>
    <h5>{e.votes} votes</h5>
    <h5>{e.review} Review</h5>
</div>
<button>online order</button>
</div>
</div>
      ))

      
  }
        
 
      </div>
    );
  };