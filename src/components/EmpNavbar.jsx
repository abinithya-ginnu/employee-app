import React from 'react';
import { Link } from 'react-router-dom';
import Person4 from '@mui/icons-material/Person4';
import { IconButton } from '@mui/material';

const EmpNavbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <IconButton
              color="inherit"
              edge="start"
              sx={{ ml:2, mr: 2 }}
            >
              <Person4 />
          </IconButton>
          <Link className="navbar-brand" to="/employee-app/home">Employee Site</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/employee-app/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee-app/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee-app/addemployee">Add Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default EmpNavbar
