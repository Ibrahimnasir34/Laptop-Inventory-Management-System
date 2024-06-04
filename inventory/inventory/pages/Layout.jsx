import Header from './Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
// <Link to ="/products"> go to products</Link>  
export default function Layout() {
  return (
    <>
     <div>
    <div className="flex-row flex bg-neutral-100 h-screen overflow-hidden ">

                <Headbar/>
              
                 
                  </div>

              
         
             <div> {<Outlet/>}</div>
             
                    
                     </div>   
                    
  </>
  )
}
