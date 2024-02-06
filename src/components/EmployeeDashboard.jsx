import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmpCarousel from './EmpCarousel';
import Copyright from './Copyright';
import EmpChart from './EmpChart';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const EmployeeDashboard = () => {
    const[data, setData] = useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>{
          setData(response.data);
        })
    },[])
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 430
                  }}
                >
                  <EmpCarousel data = {data} />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 430,
                  }}
                >
                  <EmpChart data = {data} />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="left">Id</StyledTableCell>
                          <StyledTableCell align="left">Name</StyledTableCell>
                          <StyledTableCell align="left">Email</StyledTableCell>
                          <StyledTableCell align="left">Company&nbsp;Name</StyledTableCell>
                          <StyledTableCell align="left">City</StyledTableCell>
                          <StyledTableCell align="left">Phone&nbsp;Number</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((row) => (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                              {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.company.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.address.city}</StyledTableCell>
                            <StyledTableCell align="left">{row.phone}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <Copyright sx={{ mt: 5 }} />
              </Grid>
            </Grid>
          </Container>
    </div>
  )
}

export default EmployeeDashboard
