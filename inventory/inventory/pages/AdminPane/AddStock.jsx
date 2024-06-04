import axios from "axios";
import React, { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddStock = () => {
  const [stock, setStock] = useState({
    lap_name: '',
    num_of_stocks: '',
    purchase_date: new Date(), // Default to today's date
    total_price: '',
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [laps, setLaps] = useState([]);
  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {

    console.log(e.target.value);
    setStock({ ...stock, purchase_date: e.target.value });
  };
  useEffect(() => {
    axios.get("http://localhost:8081/getlaps")
      .then(response => {
        setLaps(response.data);
      })
      .catch(error => {
        console.error('Error fetching lap names:', error);
        setError(true);
      });
  }, []);
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {

        const formdata1 = new FormData();
        formdata1.append('lap_name', stock.lap_name);
        formdata1.append('num_of_stocks', stock.num_of_stocks);
        formdata1.append('purchase_date', stock.purchase_date);
        formdata1.append('total_price', stock.total_price);

      await axios.post("http://localhost:8081/addstocks123", stock);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1 className="text-2xl mb-4 px-4 text-center">Add Stock</h1>
      <Container>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="lapName">
                <Form.Label>Laptop Product Name</Form.Label>
                <Form.Select name="lap_name" value={stock.lap_name} onChange={handleChange}>
                  <option>Select laptop name</option>
                  {laps.map((lap, index) => (
                    <option key={index} value={lap}>{lap}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
            <Form.Label>Purchase Date</Form.Label>
              <Form.Group controlId="purchaseDate">
               
             {/**  
              *  <DatePicker   selected={stock.purchase_date}  name="purchase_date"  onChange={handleDateChange}
                  className="form-control"
                />      
                 */} 
                 <input type="date" onChange={handleDateChange} name="purchase_date"  
                value={stock.purchase_date} 
                 
                 className="w-100"/>


              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="totalPrice">
                <Form.Label>Total Price</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="total_price"
                   value={stock.total_price}
                    onChange={handleChange}
                    placeholder="Enter total price"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="numOfStocks">
                <Form.Label>Number of Products</Form.Label>
                <Form.Control
                  type="number"
                  name="num_of_stocks"
             value={stock.num_of_stocks}
                  onChange={handleChange}
                  placeholder="Enter number of products"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <button
              onClick={handleClick}
              className="btn btn-primary mr-3"
            >
              Add Stock
            </button>
            {error && <p className="text-red-500">Something went wrong!</p>}
            <Link to="/createlaptop2" className="btn btn-success">
              See all stocks
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddStock;
