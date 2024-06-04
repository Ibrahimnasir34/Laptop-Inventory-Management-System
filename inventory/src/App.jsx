import React,{ useEffect, useState } from 'react';

import Header from '../pages/Header';
// import Dashboard from '../pages/AdminPane/Dashboard';
import Signup from '../pages/AdminPane/Signup';
import LaptopProducts from '../pages/AdminPane/LaptopProducts';
import LaptopParts from '../pages/AdminPane/LaptopParts';
import Order from '../pages/AdminPane/Order';
import Products from '../pages/AdminPane/Products';
import Signout from '../pages/AdminPane/Signout';
import Tablet from '../pages/AdminPane/Tablet';
import Stock from '../pages/AdminPane/Stock';
import AddStock from '../pages/AdminPane/AddStock';
import CreateLaptop1 from '../pages/AdminPane/CreateLaptop1';
import CreateLaptop2 from '../pages/AdminPane/CreateLaptop2';
import CreateBookForm from '../pages/AdminPane/CreateBookForm';
import UpdateLaptop1 from '../pages/AdminPane/UpdateLaptop1';
import UpdateStock from '../pages/AdminPane/UpdateStock';
import UpdateUser from '../pages/AdminPane/UpdateUser';
    //  <Route path="/" element={<Layout />} />
// <Route index element ={<Dashboard/>} />
import {
  BrowserRouter as Router,
  Routes,
  Route,

  Link,
 
 
} from "react-router-dom";
import Adduser from '../pages/AdminPane/Adduser';
import PageNotFound from '../pages/AdminPane/PageNotFound';
import DisplayStaff from '../pages/AdminPane/DisplayStaff';
import DisplaySale from '../pages/AdminPane/DisplaySale';
import DisplayAdmin from '../pages/AdminPane/DisplayAdmin';
import EditingStaff from '../pages/AdminPane/EditingStaff';
 import EditingSales from '../pages/AdminPane/EditingSales';





function App() {

  return (
    <>
      <div>
      <Router>
      <Routes>




      <Route path="/" element={<Header/>}>
      
        {/* public routes */}
        <Route path="/createuser" element={<Adduser/>} />
        <Route path="/laptopparts" element={<LaptopParts />} />
        <Route path="/laptopproducts" element={<LaptopProducts />} />
        <Route path="/order" element={<Order />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/addstock" element={<AddStock />} />
        <Route path="/displaystaff" element={<DisplayStaff/>} />
        <Route path="/displaysale" element={<DisplaySale/>} />
        <Route path="/displayadmin" element={<DisplayAdmin/>} />
        <Route path='/updateuser/:id' element={<UpdateUser />} />

        <Route path ='/createlaptop1' element ={<CreateLaptop1/>}/>
        <Route path ='/createlaptop2' element ={<CreateLaptop2/>}/>
         <Route path ='/updatelaptop1/:id' element ={<UpdateLaptop1/>}/>  
         <Route path ='/updatestock/:id' element ={<UpdateStock/>}/>  
         <Route path ='/editingstaff/:id' element ={<EditingStaff/>}/>  
         <Route path ='/editingsalee/:id' element ={<EditingSales/>}/> 
      {/*  <Route path ='/editingsalee/:id' element ={<EditingSales/>}/>  */ } 
    <Route path="*" element={<PageNotFound />} />  

      </Route>
    </Routes>
    
    </Router>
      



      </div>
    
    </>
  )
}

export default App
