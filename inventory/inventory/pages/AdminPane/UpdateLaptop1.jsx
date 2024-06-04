import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const UpdateLaptop1 = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];  // check for 2 slashes in this 73/updatelaptop1/527

  const [error,setError] = useState(false)
  const [image95, setImage95] = useState(null)
  const [book, setBook] = useState({
    id: id,
    name: '',
    gen: '',
    sir: '',
hasGraphicCard: false,
maintenance:false,
    price:'',
    image:null,
  });
  const processorGenerations = [
    { label: 'i3', value: 'i3' },
    { label: 'i5', value: 'i5' },
    { label: 'i7', value: 'i7' },
    { label: 'i9', value: 'i9' },
  ];

const screenSize= [
  { label: '14"', value: '14"' },
  { label: '15"', value: '15"' },
  { label: '17"', value: '17"' },
 
  { label: '10"-12"', value: '10-12"' },
  { label: '18"-20"', value: '18"-20"' },

];


  const handleCheckboxChange = (e) => {
    const valuegraph = e.target.checked ? 1 : 0; 
    setBook((prev) => ({ ...prev, hasGraphicCard: valuegraph }));
  };
  const handleCheckboxChange1 = (e) => {
    const valueg = e.target.checked ? 1 : 0;
   
  };




  const navigate = useNavigate();



  const reading =(e) =>{
    if (e.target.files && e.target.files[0]) {
      setImage95(URL.createObjectURL(e.target.files[0]));
    }
  const file23 = e.target.files[0];
    setBook((prev) => ({ ...prev, image: file23 }));
  }

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

 
  // const bookId=useParams();
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(id);
  useEffect(() => {
  axios.get(`http://localhost:8081/books8999/${id}`)
  .then(response => {
    // Update state with fetched book details
    const resData = response.data;
    setBook(prevBook => ({
      ...prevBook,
      name: resData.name,
      gen: resData.gen,
      price: resData.price,
      sir: resData.sir,
      hasGraphicCard: resData.hasGraphicCard,
maintenance:resData.maintenance,
image:resData.image,
    }));
  })
  .catch(error => {
    console.error('Error fetching book details:', error);
  });
}, [id]);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append('name',book.name);
      formdata.append('price',book.price);
      formdata.append('gen',book.gen);
      formdata.append('sir',book.sir);
      formdata.append('hasGraphicCard',book.hasGraphicCard);
      formdata.append('image',book.image);
      formdata.append('maintenance',book.maintenance);
      
      await axios.put(`http://localhost:8081/books8999/${id}`, formdata);
      console.log(id);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
     <div className="flex justify-center">
    <h1 className=" mb-4 px-4 text-2xl">Update Laptop Product</h1>
</div>

     
      <Form  >

      <Row>
     
      <Col  >


    <Form.Group className="mb-3" controlId="formGroupLaptop">

    <Form.Label>Laptop Product</Form.Label>
    <br/>
    <Form.Control  type="text" name="name" value={book.name} onChange={handleChange} placeholder="Laptop Product" />
  </Form.Group>

  <Form.Group controlId="processorGenerationDropdown">
          <Form.Label>Select Processor Generation:</Form.Label>
        {/*     <Col xs={6} lg={4} md={6} >*/}
  
          <Form.Select aria-label="Generation" value={book.gen} name="gen" onChange={handleChange}>
 
          <option>Open this select menu</option>
            {/* Dynamically populate options based on processorGenerations array */}
            {processorGenerations.map((generation, index) => (
              <option key={index} value={generation.value}>
                {generation.label}
              </option>
            ))} 
          </Form.Select>
       {/*  </Col>  */}
        </Form.Group>
        

       <Form.Group controlId="sirDropdown">
          <Form.Label>Select screenSize:</Form.Label>
  {/*<Col xs={6} lg={4} md={6} >*/}
          <Form.Select aria-label="screenSize" name="sir" value={book.sir} onChange={handleChange}>
 
          <option>Open this select menu</option>
            {/* Dynamically populate options based on processorGenerations array */}
            {screenSize.map((screenSize, index) => (
              <option key={index} value={screenSize.value}>
                {screenSize.label}
              </option>
            ))} 
          </Form.Select>
      
</Form.Group>



<br/>

<Form.Group className="mb-3" controlId="formGrouphLaptop">
<br/>
<Form.Label>Laptop Price</Form.Label>
<br/>
<InputGroup className="mb-2">
<InputGroup.Text>$</InputGroup.Text>
<Form.Control  type="text" name="price" value={book.price} onChange={handleChange} placeholder="Laptop Price" />
</InputGroup>
</Form.Group>


</Col>
<Col>

{book.image && <img src={displayImage(book.image)} style={{width:'200px' , height:'200px' }} className="w-16 md:w-32 h-16 md:h-32 max-w-full max-h-full" alt={book.name} />}

<input type="file" id="file-input" name="image" onChange={reading} accept="image/*" />

<Col><img alt="preview image" src={image95} style={{width:'200px' , height:'200px' }}/></Col>

</Col>
<div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>Has Graphic Card</Form.Label>

< input 
        type="checkbox"
        name="hasGraphicCard"
        checked={book.hasGraphicCard}
        onChange={handleCheckboxChange}
     
      />
      </div>
      <div className="flex flex-wrap items-baseline space-x-4 justify-start mb-3">

<Form.Label>Maintenance(Disabled for Admin Only for Viewing)</Form.Label>
< input
        type="checkbox"
        name="maintenance"
        checked={book.maintenance}
        onChange={handleCheckboxChange1}
        disabled
      />



      </div>




</Row>

<button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">
  Edit Laptop
</button>
{error && <p className="text-red-500">Something went wrong!</p>}
<Link to="/createlaptop2" className="ml-6 text-green-500 font-bold py-2 px-4 border-4  border-green-500 rounded  hover:text-green-700">
  See all laptops
</Link>

      </Form>
    </div>
  );
};

export default UpdateLaptop1;



