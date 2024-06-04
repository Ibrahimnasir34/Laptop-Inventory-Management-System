import React,{ useEffect, useState } from 'react'

function Ttable() {
  const [data,setData] = useState([])
useEffect(()=>{
fetch('http://localhost:8081/laptops')
.then(res =>res.json())
.then(data=>setData(data))
.catch(err=>console.log(err));
},[])
  return (
    <>
      <div>
      <table>
        <thead>
            <tr>
     
                <th>Name</th>
                <th>Image</th>
                <th>Generation</th>
                <th>Screen Size</th>
                <th>RAM</th>
                <th>Memory</th>
                <th>Has Graphic Card</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
          {data.map((d,i)=>(
<tr key={i}>

<td>{d.name}</td>
<td>{d.image}</td>
<td>{d.generation}</td>
<td>{d.screenSize}</td>
<td>{d.ram}</td>
<td>{d.memory}</td>
<td>{d.hasGraphicCard}</td>
<td>{d.price}</td>
</tr>


          ))}




        </tbody>
    </table>
      </div>
    
    </>
  )
}

export default Ttable
