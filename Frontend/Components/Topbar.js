import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const Topbar = ({func})=> {
  return(
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand >Portfolio Value: $420,000,000 </Navbar.Brand>
    <Nav 
    className="ml-auto"
    style={{padding:"15px"}}
    >
      <button onClick={() => func(0)} type="submit" className="btn btn-danger btn-block">Log Out</button>
    </Nav>
    <Nav 
    className="ml"
    style={{padding:"15px"}}
    >
      <button onClick={() => func(3)} type="submit" className="btn btn-success btn-block">Add Stock</button>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
   </Navbar>
  )
}

export default Topbar;
