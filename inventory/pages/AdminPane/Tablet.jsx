import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function prePage(){

    if(currentPage !== 1)
    {
        setCurrentPage(currentPage - 1);
    }
    
    }
    
    function changeCPage(id){
    
    setCurrentPage(id);
    
    }
    
    function nextPage()
    {
    if(currentPage !== npage)
    {
    setCurrentPage(currentPage + 1);
    }
    }



function Tablet() {
   

    const [data, setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
   const recordsPerPage = 10;
   const lastindex = currentPage * recordsPerPage;
const firstindex = lastindex-recordsPerPage;
const records= data.slice(firstindex,lastindex);
const npage=Math.ceil(data.length / recordsPerPage);
const numbers=[...Array(npage+1).keys()].slice(1);
/*  array with a length of npage+1
 keys (indexes) of the array
 remove the first element (index 0) from the array
*/ 




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
      fetch('http://localhost:8081/laptops')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, []);
    // Logic to paginate data

  // Change page

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       <Link to="/createlaptop1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Add Laptop Product
</Link>              
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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
                     Generation
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div></th>
     
            
              <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Screen Size
                         <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div></th>
            <th scope="col" className="px-6 py-3">
              RAM
            </th>
            <th scope="col" className="px-6 py-3">
              Memory
            </th>
            <th scope="col" className="px-6 py-3">
              Has Graphic Card
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className="p-4">
        {/*          {d.imageData && <img src={`data:image/png;base64,${d.imageData}`} className="w-16 md:w-32 max-w-full max-h-full" alt={d.name} />}
                {!d.imageData && <span>No Image Available</span>}          
                
   <img src={d.image} className="w-16 md:w-32 max-w-full max-h-full" alt={d.name} />  */}  


{d.images && <img src={displayImage(d.images)} className="w-16 md:w-32 max-w-full max-h-full" alt={d.name} />}
    


    {/*    <input accept="image/*" type="file" onChange={convertToBase64} />
     Display the converted base64 image 
      {<img width={100} height={100} src={d.images} alt="Selected Image" />}
    */}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{d.name}</td>
              <td className="px-6 py-4">{d.generation}</td>
              <td className="px-6 py-4">{d.screenSize}</td>
              <td className="px-6 py-4">{d.ram}</td>
              <td className="px-6 py-4">{d.memory}</td>
              <td className="px-6 py-4">{d.hasGraphicCard}</td>
              <td className="px-6 py-4">{d.price}</td>
              <td class="px-6 py-4">
              <div class="flex">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">
               

                <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red" // Set stroke color to red
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg> </a>
        
        
        
        
        
        
        
        <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">
        
        
        <svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-9 w-12" 
  viewBox="0 0 24 24"
  fill="none"
  stroke="green" 
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5.5 10.5l1-1a2.828 2.828 0 0 1 4 0L16.5 16l-2 2-8-8z"></path>
  <path d="M9.5 6.5l-3 3"></path>
</svg>

        
       
       
       
       
    
       
        </a>
        
        </div>
        
        </td>

            </tr>
          ))}
        </tbody>
      </table>
  
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
       
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * recordsPerPage + 1}-{Math.min(currentPage * recordsPerPage, data.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span>
        </span>
       
       
        <ul  class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
            <a href="#" onClick={prePage} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</a>
 
          
            </li>
{numbers.map((n,i) => (


            <li className={`page-item ${currentPage === n ? 'active':''}`} key={i}class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
 
            <a href="#" onClick={changeCPage} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{n}</a>
 
          
            </li>
))
}



            <li>
            <a href="#" onClick={nextPage} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
 
          
            </li>



         







          
  {/* Next page button */}

        </ul>
    </nav>


    </div>  
  );
}

export default Tablet;

/*  above retrn









*/ 