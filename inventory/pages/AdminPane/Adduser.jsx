
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


// import { getPage } from 'pdfjs-dist';

const Adduser = () => {
    const [book, setBook] = useState({
        username: '',
        email: '',
        role: '',
          profile_image:null,
     password:'',
      });

  const [error,setError] = useState(false)
  const [image95, setImage95] = useState(null)
  const navigate = useNavigate();
//  const [validated, setValidated] = useState(false);
 

  const reading =(e) =>{
    if (e.target.files && e.target.files[0]) {
      setImage95(URL.createObjectURL(e.target.files[0]));
    }
  const file23 = e.target.files[0];
    setBook((prev) => ({ ...prev, profile_image: file23 }));
  }
  const roles = [
    { value: 'admin', label: 'admin' },
    { value: 'it-staff', label: 'it-staff' },
    { value: 'client', label: 'client' },
    { value: 'sale-staff', label: 'sale-staff' }
  ];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


const handleClick = async (e) => {
 

e.preventDefault();
    try {
      const formdata8 = new FormData();
      formdata8.append('username',book.username);
      formdata8.append('email',book.email);
      formdata8.append('role',book.role);
      formdata8.append('profile_image',book.profile_image);
      formdata8.append('password',book.password);
   //   formdata.append('maintenance',book.maintenance);
   console.log('Username:', book.username);
   console.log('Email:', book.email);
   console.log('Role:', book.role);
   console.log('Profile Image:', book.profile_image);
   console.log('Password:', book.password);
   

     await axios.post("http://localhost:8081/addingusers",formdata8);
  //  await axios.post("http://localhost:8081/books", { ...book, image: Array.from(book.image) });
  
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)

    
    }
  };

 
  return (
    <div class="form">
      <div className="flex justify-center">
    <h1 className=" mb-4 px-4 text-2xl">Add User</h1>
</div>

     
      <Form  >

      <Row>
      <Form.Label>User Image</Form.Label>
      <Col  >
<input type="file" id="file-input" name="profile_image" onChange={reading} accept="image/*" />


    <Form.Group className="mb-3" controlId="formGroupLaptop">

    <Form.Label>User Name</Form.Label>
    <br/>
    <Form.Control  type="text" name="username" onChange={handleChange} placeholder="Laptop Product" />
  </Form.Group>

  <Form.Group controlId="processorGenerationDropdown">
          <Form.Label>Role:</Form.Label>
        {/*     <Col xs={6} lg={4} md={6} >*/}
  
          <Form.Select aria-label="Role" name="role" onChange={handleChange}>
          <option>Open this select menu</option>
           
            {/* Dynamically populate options based on processorGenerations array */}
            {roles.map((generation, index) => (
              <option key={index} value={generation.value}>
                {generation.label}
              </option>
            ))} 
          </Form.Select>
       {/*  </Col>  */}
        </Form.Group>
        

      <br/>
          <Form.Label>Password</Form.Label>
  {/*<Col xs={6} lg={4} md={6} >*/}
 <br/>
  <input type="text" name="password" onChange={handleChange} id="passwordInput" placeholder="Enter password" />
 





<br/>

<Form.Group className="mb-3" controlId="formGrouphLaptop">
<br/>
<Form.Label>Email</Form.Label>
<br/>
<InputGroup className="mb-2">

<Form.Control  type="text" name="email" onChange={handleChange} placeholder="Email" />
</InputGroup>
</Form.Group>


</Col>
<Col><img alt="preview image" src={image95} style={{width:'200px' , height:'200px' }}/></Col>
<div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

      </div>
</Row>

<button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">
  Add User
</button>
{error && <p className="text-red-500">Something went wrong!</p>}
<Link to="/signup" className="ml-6 text-green-500 font-bold py-2 px-4 border-4  border-green-500 rounded  hover:text-green-700">
  See all users
</Link>

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

export default Adduser;

