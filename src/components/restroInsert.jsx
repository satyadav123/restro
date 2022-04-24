import { useState } from "react"

export const Data=()=>{
    const [dataform,setdata]=useState({
       
        DesertName:"",
        cost:"",
        rating:"",
        restroName:"",
        votes:"",
        review:"",
        time:"",
        url:""
        })
           
            const onhandle=(e)=>{
          
            setdata({
                  ...dataform,
                  
          [e.target.id]:e.target.value
        })
        
        
            }
            const handleSubmit=(e)=>{
            e.preventDefault()
         //   console.log(dataform)
            fetch(" http://localhost:8081/resto",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(dataform)
            })
            }
return (
    
<form onSubmit={handleSubmit}>
<input type="text"  onChange={onhandle} value={dataform.restroName}placeholder="resrtoName" id="restroName"/><br/>
<input   type="text"onChange={onhandle} value={dataform.DesertName}placeholder ="DesertName" id="DesertName"/><br/>
<input type="Number"onChange={onhandle} value={dataform.cost}placeholder="cost" id="cost"/><br/>
<input type="Number"onChange={onhandle} value={dataform.rating}placeholder="rating" id="rating"/><br/>
<input type="Number"onChange={onhandle} value={dataform.votes}placeholder="votes" id="votes"/><br/>
<input type="Number" onChange={onhandle} value={dataform.review}placeholder="review" id="review"/><br/>
<input  type="text"onChange={onhandle} value={dataform.time}placeholder="delivery time" id="time"/><br/>
<input type="text"placeholder="url" onChange={onhandle} value={dataform.url}id="url"/><br/>
<input type="submit" />
</form>


)

}