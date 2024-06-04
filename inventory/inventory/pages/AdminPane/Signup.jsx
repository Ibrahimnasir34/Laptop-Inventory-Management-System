import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";


function Signup() {

const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
   const displayImage = (imageData) => {
      if (!imageData) return null;
      
      // Convert the array of integers to a Uint8Array
      const uint8Array = new Uint8Array(imageData.data);
      
      // Create a Blob object from the Uint8Array
      const blob = new Blob([uint8Array], { type: 'image/jpeg' });
      
      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(blob);
      
      return imageUrl;
    };
  useEffect(() => {
      fetch('http://localhost:8081/allusers' )
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

       
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deleteusers/${id}`);
      window.alert(`Users with ID ${id} is deleted`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };



   return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       <Link to="/createuser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add Users
</Link>              
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-16 py-3">
              <span className="sr-only">Id</span>
            </th>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                       Name
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div></th>
                    <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                  Email
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div></th>
                    <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                Role
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div></th>
                    <th scope="col" className="px-6 py-3">
              Actions
            </th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
                <td className="px-6 py-4 font-semibold text-lg text-gray-900 dark:text-white">{d.id}</td>
              <td className="p-4">
   
{d.profile_image && <img src={displayImage(d.profile_image)} className="w-16 md:w-32 max-w-full max-h-full" alt={d.username} />}
    
              </td>
              <td className="px-6 py-4 font-semibold text-lg text-gray-900 dark:text-white">{d.username}</td>
              <td className="px-6 py-4 text-lg">{d.email}</td>
         
              <td className="px-6 py-4 text-lg">{d.role}</td>
              <td class="px-6 py-4">
              <div class="flex">
                
                    <button onClick={() => handleDelete(d.id)} class="font-medium text-red-500 dark:text-red-500 hover:underline">
                    <FontAwesomeIcon icon={faTrash}  style={{ width: '25px',height: '25px' }} />         
 </button>


 <Link to={`/updateuser/${d.id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
            
             
      
        <FontAwesomeIcon icon={faEdit} style={{color:'green', width: '25px',height: '25px' }} />
    
       </Link>

        </div>
        
        </td>

            </tr>
          ))}
        </tbody>
      </table>
  
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
       
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
       </span>
       
       
        <ul  class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
         
            </li>   <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
 
          
            </li>
        </ul>
    </nav>


    </div>  
  );
}

export default Signup;

