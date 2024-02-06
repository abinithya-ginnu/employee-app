import './App.css';
import React from 'react';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeForm from './components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';
import EmpNavbar from './components/EmpNavbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmpNavbar />
      <Routes>
        <Route path= '/employee-app' element = {<EmployeeDashboard />}></Route>
        <Route path= '/employee-app/dashboard' element = {<EmployeeDashboard />}></Route>
        <Route path= '/employee-app/home' element = {<EmployeeDashboard />}></Route>
        <Route path= '/employee-app/addemployee' element = {<EmployeeForm />}></Route>
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
