
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { getPage } from 'pdfjs-dist';

const EditingStaff = () => {
   
        const [book, setBook] = useState({
          username: '',
          productName:'',
          numOfProductOrders:'',
          accountNumber: '',
          itStaffApproved: false,
          saleStaffApproved:false,
          priceOfOrder:'',
          address:'',
          receiptImage:null,
          date_of_order: new Date(),
         
        });
        const [book1, setBook1] = useState({
  
          itStaffApproved: false,
        
          date_of_order: new Date(),
         
        });

  const [error,setError] = useState(false)
  const [image95, setImage95] = useState(null)
  const navigate = useNavigate();
//  const [validated, setValidated] = useState(false);
const [laps11,setLaps11] = useState(false);
const [laps111,setLaps111] = useState(false);
  // Initial values for the form fields
  const [textWithNumOfStocks, setTextWithNumOfStocks] = useState('');



  const reading =(e) =>{
    if (e.target.files && e.target.files[0]) {
      setImage95(URL.createObjectURL(e.target.files[0]));
    }
  // const file23 = e.target.files[0];
  //  setBook((prev) => ({ ...prev, receiptImage: file23 }));
  }


  const handleDateChange = (e) => {

    console.log(e.target.value);
    setBook1((prev) => ({ ...prev, date_of_order: e.target.value }));
    setBook((prev) => ({ ...prev, date_of_order: e.target.value }));
   console.log(e.target.value);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    return date.toLocaleDateString();
  };
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


  const location = useLocation();
  const id = location.pathname.split("/")[2]; 

  const handleCheckboxChange = (e) => {
    const valuegraph = e.target.checked ? 1 : 0; 
    setBook1((prev) => ({ ...prev, itStaffApproved: valuegraph }));
    setBook((prev) => ({ ...prev, itStaffApproved: valuegraph }));
  };
 



// const loadFileExpression = `LOAD_FILE('${filePath}')`; Construct the LOAD_FILE() expression
// Get the value directly from the input



  useEffect(() => {
    axios.get(`http://localhost:8081/geteditingstaff/${id}`)
    .then(response => {
      // Update state with fetched book details
      const resData = response.data;
      setBook(prevBook => ({
        ...prevBook,
        username: resData.username,
        productName: resData.productName,
        numOfProductOrders: resData.numOfProductOrders,
        accountNumber: resData.accountNumber,
        itStaffApproved: resData.itStaffApproved,
        saleStaffApproved: resData.saleStaffApproved,
        priceOfOrder: resData.priceOfOrder,
        address: resData.address,
        receiptImage: resData.receiptImage,
        date_of_order: formatDate(resData.date_of_order),
      }));
      
    })
    .catch(error => {
      console.error('Error fetching book details:', error);
    });
  }, [id]);
  
    const handleClick = async (e) => {
      e.preventDefault();
  
      try {
        const formdata888 = new FormData();
        formdata888.append('itStaffApproved',book1.itStaffApproved);
        formdata888.append('date_of_order',book1.date_of_order);
      console.log(book.date_of_order);
        
        await axios.put(`http://localhost:8081/posteditingstaff/${id}`, book1);
        console.log(id);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
  


   





  return (
    <div class="form">
      <div className="flex justify-center">
    <h1 className=" mb-4 px-4 text-2xl">Edit Order</h1>
</div>

     
      <Form  >

      <Row>
      <Col> 
      <Form.Label>Laptop Image</Form.Label>
  
     


<Form.Group controlId="lapNameing">
                <Form.Label>Laptop Product Name</Form.Label>
                <Form.Control  type="text" name="productName" value={book.productName} disabled placeholder="Laptop Product" />

              </Form.Group>
 <Form.Group controlId="lapNameing">
                <Form.Label>User Name</Form.Label>
 <Form.Control  type="text" name="username" value={book.username} disabled placeholder="User name" />
              
              </Form.Group>

              </Col> 
              <Col>
              
              {book.receiptImage && <img src={displayImage(book.receiptImage)} style={{width:'200px' , height:'200px' }} className="w-16 md:w-32 h-16 md:h-32 max-w-full max-h-full" alt={book.username} />}

              
              </Col>       
             </Row>
             
             <Row>
              <Col>
             
  <Form.Group className="mb-3  p-18" controlId="formGroupLaptop">
  
<Form.Label>Number of Product orders</Form.Label>
<br/>

<Form.Control  type="text" name="numOfProductOrders" value={book.numOfProductOrders} disabled placeholder="Number of product orders" />
<Form.Label>Price of Order</Form.Label>
<br/>
<InputGroup className="mb-2">
<InputGroup.Text>$</InputGroup.Text>
<Form.Control  type="text" name="priceOfOrder" value={book.priceOfOrder} disabled placeholder="Price of order" />
</InputGroup>
</Form.Group>
 
<Form.Label>Date of Order</Form.Label>
              <Form.Group controlId="orderDate">
               
              <DatePicker   selected={book.date_of_order}  
             className="form-control"
               />      
                 
          
            <input type="date"  name="date_of_order" onChange={handleDateChange} value={book.date_of_order}
             className="w-100"/>
                


              </Form.Group>
<Form.Label>Address of user</Form.Label>
<br/>
<Form.Control as="textarea" rows={3} name="address" value={book.address} disabled placeholder="address of user" />
<Form.Label>Account</Form.Label>
<br/>

<Form.Control  type="text" name="accountNumber" value={book.accountNumber}  disabled placeholder="account of user" />
<br/>



<div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>It staff verification (disabled for client)</Form.Label>

< input 
        type="checkbox"
        name="itStaffApproved"
        checked={book.itStaffApproved}
        onChange={handleCheckboxChange}
      
      />
      </div>
      <div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>sale Staff approval verification in dispatch(disabled for client)</Form.Label>
< input
        type="checkbox"
        name="saleStaffApproved"
        checked={book.saleStaffApproved}
    
        disabled
      />



      </div>


      </Col>
<Col>
<br/>
 {/*<Button variant="warning" className="ms-2 bg-yellow-400" ></Button>{' '}   */}


</Col>
</Row>

<button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">
  Edit Orders from staff
</button>
{error && <p className="text-red-500">Something went wrong!</p>}


      </Form>
    </div>


    
 

 //{/*
   //   <input type="text"   placeholder="Book title"  name="name"  onChange={handleChange} />
   //   <input type="text"   placeholder="Book title"  name="gen"  onChange={handleChange} />
      
   //   */}
   


 

  
 // {/*
//
//  < 
  // input
//        type="checkbox"
//        name="maintenance"
//        checked={book.maintenance}
//        onChange={handleCheckboxChange1}
 //     />
//*/}


  );
};

export default EditingStaff;


  {/* 
   <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
  />  
  */}
{/*


      {newImg && (
        <div>
          <p>Selected Image:</p>
          <img src={newImg} alt="Selected" />
        </div>
      )}
      
        {base64Image && (
            <div>
              <p>Base64 Image:</p>
              <img src={base64Image} alt="Uploaded" />
            </div>
          )}
    */} 