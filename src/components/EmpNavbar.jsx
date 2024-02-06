import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Person4 from '@mui/icons-material/Person4';
import { IconButton } from '@mui/material';

const EmpNavbar = () => {
  return (
  
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
          >
            <Person4 />
        </IconButton>
        <Navbar.Brand as={Link} to="/employee-app/home">Employee Site</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link to="/employee-app/home" as={Link}>Home</Nav.Link>
            <Nav.Link to="/employee-app/dashboard" as={Link}>Dashboard</Nav.Link>
            <Nav.Link to="/employee-app/addemployee" as={Link}>Add Employee</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  )
}

export default EmpNavbar
