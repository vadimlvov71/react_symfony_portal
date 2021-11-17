import * as React from 'react';
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeepMountedModal from './KeepMountedModal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Blocks from './Blocks';
import {GetComponents, GetStatus, GetColor} from './Helpers'
// Generate Order Data
function createData(id, date, name, status, paymentMethod, amount) {
  return { id, date, name, status, paymentMethod, amount };
}

const rows = GetComponents();
 
function preventDefault(event) {
  event.preventDefault();
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Components() {
  const history = useHistory();
  const handleRouteHistory = (page) =>{ 
    history.push("?issue=" + page);
  }
  const handleRouteContent = (id) =>{ 
    history.push("?settings=" + id);
  }
  let color1 ;
  return (
   
    <Grid container >
      <Grid item xs={12} >
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Grid container  spacing={2}>
        <Grid item xs={8}>
          <Title>Components</Title>
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
      </Grid>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Management</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{color: GetColor(row.status)}}>{GetStatus(row.status)}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell> <Button size="small" variant="contained" onClick={() => handleRouteContent(row.id)}>Settings</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </Grid>
      <Grid item xs={12} sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          
        </Paper>
      </Grid>
  </Grid>

  );
}