
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// import { getPage } from 'pdfjs-dist';

const LaptopParts = () => {
   
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
  const file23 = e.target.files[0];
    setBook((prev) => ({ ...prev, receiptImage: file23 }));
  }

  const changefromtexttoint = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setBook((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };
  
  // Helper function to convert input value to decimal
  const changefromtexttodecimal = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setBook((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };
  
  // Helper function to convert input value to BigInt
  const changefromtexttobigint = (e) => {
    const value = BigInt(e.target.value);
    setBook((prev) => ({ ...prev, [e.target.name]: value }));
  };

  

  const handleDateChange = (e) => {

    console.log(e.target.value);
    setBook((prev) => ({ ...prev, date_of_order: e.target.value }));
  };


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   
  };

  const handleCheckboxChange = (e) => {
    const valuegraph = e.target.checked ? 1 : 0; 
    setBook((prev) => ({ ...prev, itStaffApproved: valuegraph }));
  };
  const handleCheckboxChange1 = (e) => {
    const valueg = e.target.checked ? 1 : 0;
    setBook((prev) => ({ ...prev, saleStaffApproved: valueg }));
  };



// const loadFileExpression = `LOAD_FILE('${filePath}')`; Construct the LOAD_FILE() expression
// Get the value directly from the input

const show1 = async (e) => {
  try {
    const formdata1 = new FormData();
    formdata1.append('productName', book.productName);

    const response = await axios.post("http://localhost:8081/getett", formdata1);
    const { data } = response;

    // Extract the num_of_stocks value from the response
    const numOfStocks = data.numOfStocks; // Assuming the response contains 'numOfStocks' property
    const textWithNumOfStocks = `Number of stocks: ${numOfStocks}`;

    // Set the textWithNumOfStocks value in the state
    setTextWithNumOfStocks(textWithNumOfStocks);
    // Now you can use the numOfStocks value as needed
    console.log("Number of stocks:", numOfStocks);

    navigate("/");
  } catch (err) {
    console.error("Error:", err);
    setError(true);
  }
};
//useEffect(() => {
  // Call show1 function when the component mounts
 // show1();
//  }, []);



const handleClick = async (e) => {
 

e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('username', book.username);
      formdata.append('productName', book.productName);
      formdata.append('numOfProductOrders', book.numOfProductOrders);
      formdata.append('accountNumber', book.accountNumber);
      formdata.append('itStaffApproved', book.itStaffApproved);
      formdata.append('saleStaffApproved', book.saleStaffApproved);
      formdata.append('priceOfOrder', book.priceOfOrder);
      formdata.append('address', book.address);
      formdata.append('receiptImage', book.receiptImage);
      formdata.append('date_of_order', book.date_of_order);
      for (let pair of formdata.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

     await axios.post("http://localhost:8081/createorder__",formdata);
  //  await axios.post("http://localhost:8081/books", { ...book, image: Array.from(book.image) });
  
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)

    
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8081/getlaps1")
      .then(response => {
        setLaps11(response.data);
      })
      .catch(error => {
        console.error('Error fetching lap names:', error);
        setError(true);
      });
  }, []);
  
  useEffect(() => {
    axios.get("http://localhost:8081/getlaps2")
      .then(response => {
        setLaps111(response.data);
      })
      .catch(error => {
        console.error('Error fetching lap names:', error);
        setError(true);
      });
  }, []);
  



  return (
    <div class="form">
      <div className="flex justify-center">
    <h1 className=" mb-4 px-4 text-2xl">Add Order</h1>
</div>

     
      <Form  >

      <Row>
      <Col> 
      <Form.Label>Laptop Image</Form.Label>
  
<input type="file" id="file-input" name="receiptImage" onChange={reading} accept="image/*" />


<Form.Group controlId="lapNameing">
                <Form.Label>Laptop Product Name</Form.Label>
                <Form.Select name="productName"  onChange={handleChange}>
                  <option>Select laptop name</option>
                  {laps11.length > 0 && 
  laps11.map((lap, index) => (
    <option key={index} value={lap}>{lap}</option>
  ))
}
                </Form.Select>
              </Form.Group>


              <Form.Group controlId="lapNameing">
                <Form.Label>User Name</Form.Label>
                <Form.Select name="username"  onChange={handleChange}>
                  <option>Select User</option>
                  {laps111.length > 0 && 
  laps111.map((lap, index) => (
    <option key={index} value={lap}>{lap}</option>
  ))
}
                </Form.Select>
              </Form.Group>

              </Col> 
              <Col><img alt="preview image" src={image95} style={{width:'200px' , height:'200px' }}/></Col>       
             </Row>
             
             <Row>
              <Col>
             
  <Form.Group className="mb-3  p-18" controlId="formGroupLaptop">
  
<Form.Label>Number of Product orders</Form.Label>
<br/>
<Form.Control  type="text" name="numOfProductOrders" onChange={changefromtexttoint} placeholder="number of product order" />




<Form.Label>Price of Order</Form.Label>
<br/>
<InputGroup className="mb-2">
<InputGroup.Text>$</InputGroup.Text>
<Form.Control  type="text" name="priceOfOrder" onChange={changefromtexttodecimal} placeholder="price of order" />
</InputGroup>
</Form.Group>
 
<Form.Label>Date of Order</Form.Label>
              <Form.Group controlId="orderDate">
               
             {/**  
              *  <DatePicker   selected={stock.purchase_date}  name="purchase_date"  onChange={handleDateChange}
                  className="form-control"
                />      
                 */} 
                 <input type="date" onChange={handleDateChange} name="date_of_order"  
                value={book.date_of_order} 
               
                 className="w-100"/>

              </Form.Group>
<Form.Label>Address of user</Form.Label>
<br/>
<Form.Control as="textarea" rows={3} name="address" onChange={handleChange} placeholder="address of user" />
<Form.Label>Account</Form.Label>
<br/>
<Form.Control  type="text" name="accountNumber" onChange={changefromtexttobigint} placeholder="address of user" />
<br/>



<div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>It staff verification (disabled for client)</Form.Label>

< input 
        type="checkbox"
        name="itStaffApproved"
        checked={book.itStaffApproved}
        onChange={handleCheckboxChange}
        disabled
      />
      </div>
      <div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>sale Staff approval verification in dispatch(disabled for client)</Form.Label>
< input
        type="checkbox"
        name="maintenance"
        checked={book.saleStaffApproved}
        onChange={handleCheckboxChange1}
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
  Add Orders
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

export default LaptopParts;


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