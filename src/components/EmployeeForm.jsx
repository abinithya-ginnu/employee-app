import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonAdd from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';

const EmployeeForm = () => {
  var [input, setInput] = useState({name: "", designation: "", location: "", salary: 0 });
  const inputHandler = (e) =>{
    const {name, value} = e.target;
    setInput({...input, [name]: value});
    console.log(value);
}
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'white' }}>
              <PersonAdd />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Employee
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={input.name}
                onChange={inputHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="designation"
                label="Designation"
                id="designation"
                autoComplete="designation"
                value={input.designation}
                onChange={inputHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="location"
                label="Location"
                id="location"
                autoComplete="location"
                value={input.location}
                onChange={inputHandler}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="salary"
                label="Salary"
                id="salary"
                type='number'
                autoComplete="salary"
                value={input.salary}
                onChange={inputHandler}
              /> 
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default EmployeeForm
