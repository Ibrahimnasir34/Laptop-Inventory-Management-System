import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React , { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import Dashboard from "./AdminPane/Dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,

  Link,
 
 
} from "react-router-dom";
import PageNotFound from "./AdminPane/PageNotFound";
import LaptopParts from "./AdminPane/LaptopParts";
import Signup from "./AdminPane/Signup";
import Signout from "./AdminPane/Signout";
import Adduser from "./AdminPane/Adduser";
import Stock from "./AdminPane/Stock";
import Order from "./AdminPane/Order";
import Products from "./AdminPane/Products";
import LaptopProducts from "./AdminPane/LaptopProducts";
import Tablet from "./AdminPane/Tablet";
import CreateLaptop1 from "./AdminPane/CreateLaptop1";
import UpdateLaptop1 from "./AdminPane/UpdateLaptop1";
import CreateLaptop2 from "./AdminPane/CreateLaptop2";
import CreateBookForm from "./AdminPane/CreateBookForm";
import UpdateStock from '../pages/AdminPane/UpdateStock';
import UpdateUser from '../pages/AdminPane/UpdateUser';
export default function Header(){

   const [pageTitle, setPageTitle] = useState('');
 
 
    const location = useLocation();
  
    useEffect(() => {
      const path = location.pathname;
      const re5 =/^\/editingsalee\/\d+$/;
      const re3 =/^\/editingstaff\/\d+$/;
      const regex = /^\/updatelaptop1\/\d+$/;
      const regex1 = /^\/updatestock\/\d+$/;
      const regex2 = /^\/updateuser\/\d+$/;
      if (regex.test(path)) {
        setPageTitle(prevTitle => 'UpdateLaptop1');
    }   
    else if (regex1.test(path)) {
      setPageTitle(prevTitle => 'UpdateStock');
  } 
  else if (regex2.test(path)) {
    setPageTitle(prevTitle => 'UpdateUser');
} 
    
else if (re3.test(path)) {
  setPageTitle(prevTitle => 'EditingStaff');
} 
else if (re5.test(path)) {
  setPageTitle(prevTitle => 'EditingSale');
} 
  



    else {
      switch (path) {
        case '/':
          setPageTitle(prevTitle => {
            console.log("Page title updated to: Dashboard");
            return 'Dashboard';
          });
          break;
          case '/stock':
            setPageTitle(prevTitle => {
              console.log("Page title updated to: Settings");
              return 'Stock';
            });
            break;
            case '/displaystaff':
              setPageTitle(prevTitle => {
                console.log("Page title updated to: Settings");
                return 'Display Orders to Staff';
              });
              break;
              case '/displaysale':
                setPageTitle(prevTitle => {
                  console.log("Page title updated to: Settings");
                  return 'Display Orders to Sale';
                });
                break;
                case '/displayadmin':
                  setPageTitle(prevTitle => {
                    console.log("Page title updated to: Settings");
                    return 'Display Orders to Admin';
                  });
                  break;

            case '/createuser':
               setPageTitle(prevTitle => {
                 console.log("Page title updated to: Create user");
                 return 'Adduser';
               });
               break;
            case '/order':
              setPageTitle(prevTitle => {
                console.log("Page title updated to: Settings");
                return 'Order';
              });
              break;
              case '/products':
                setPageTitle(prevTitle => {
                  console.log("Page title updated to: Settings");
                  return 'Products';
                });
                break;
               
                case '/signout':
                  setPageTitle(prevTitle => {
                    console.log("Page title updated to: Settings");
                    return 'Signout';
                  });
                  break;
              
                    case '/laptopproducts':
                      setPageTitle(prevTitle => {
                        console.log("Displaying Order Table for User Type: It staff");
                        return 'LaptopProducts';
                      });
                      break;
    
                      case '/laptopparts':
                        setPageTitle(prevTitle => {
                        
                          return 'Adding Orders For User type:Client';
                        });
                        break;
                        case '/signup':
                          setPageTitle(prevTitle => {
                          
                            return 'Signup';
                          });
                          break;
                          case '/addstock':
                            setPageTitle(prevTitle => {
                            
                              return 'AddStock';
                            });
                            break;
                          case '/tablet':
                            setPageTitle(prevTitle => {
                            
                              return 'Tablet';
                            });
                            break;
                            case '/createlaptop1':
                              setPageTitle(prevTitle => {
                              
                                return 'CreateLaptop1';
                              });
                              break;
                              case '/createlaptop2':
                                setPageTitle(prevTitle => {
                                
                                  return 'Laptop Products';
                                });
                                break;
                                case '/createbookform':
                                  setPageTitle(prevTitle => {
                                  
                                    return 'CreateBookForm';
                                  });
                                  break;
                               case '/updatelaptop1/:id':
                                    setPageTitle(prevTitle => {
                                    
                                      return 'UpdateLaptop1';
                                    });
                                  break;    

  default:
    setPageTitle(prevTitle => {
      console.log(location.pathname);          
      return 'PageNotFound';
    });
 
      }}
    }, [location.pathname]);
  

return (
  <>




<nav class="fixed top-0 z-50 w-full  h-max max-h-[190px] bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex  items-center justify-between">
      <div class="flex py-20 items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" class="flex ms-2 md:me-24">
          <img src="download.jpg" class="h-9 me-3" alt="FlowBite Logo" />
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Inventory System &nbsp;{pageTitle} </span>
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>


<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="/displaysale" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
             
               <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>

             
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Display Orders in Sale</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/displayadmin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
             
               <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>

             
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Display Sale Records in Admin</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/displaystaff" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
             
               <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>

             
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Display Orders in Staff</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/createuser" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
             
               <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>

             
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Add user</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/createlaptop2" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>

            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Laptop Products</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="/laptopparts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
             
             <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd"/>

 
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Add Orders from Clients</span>
            </a>
         </li>
         <li>
            <a href="/stock" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Stock</span>
            </a>
         </li>
        
         <li>
            <a href="/signup" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             
               
            </a>
         </li>
      </ul>
   </div>
</aside>








<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   
        
   
   <Outlet />
   {/** 
    
{location.pathname === '/' && (  <Dashboard/>  )}  
   {location.pathname === '/createuser' && (  <Adduser/>   )}   
   {location.pathname === '/stock' && (  <Stock/>  )}  
   {location.pathname === '/order' && (  <Order/>   )}   
   {location.pathname === '/products' && (  <Products/>  )}  
   {location.pathname === '/signout' && (  <Signout/>   )}   
{location.pathname === '/laptopproducts' && (  <LaptopProducts/>  )}  
   {location.pathname === '/laptopparts' && (  <LaptopParts/>   )}   
   {location.pathname === '/signup' && (  <Signup/>   )}   
   {location.pathname === '/tablet' && (  <Tablet/>   )}   
   {location.pathname==='/createlaptop1' && (<CreateLaptop1/>)}
   {location.pathname==='/createbookform' && (<CreateBookForm/>)}
   {location.pathname==='/updatelaptop1/:id' && (<UpdateLaptop1/>)}
   {location.pathname==='/createlaptop2' && (<CreateLaptop2/>)}
      {location.pathname !== '/' && !['updatelaptop1/:id','updatelaptop1/*','/createlaptop1','/createlaptop2','/stock', '/createuser','/tablet', '/order', '/products', '/signout', '/laptopproducts', '/laptopparts', '/signup'].includes(location.pathname) && (
    
   
    <PageNotFound />
      )}

   */}
 
    
   </div>
</div>





  </>
)
}





