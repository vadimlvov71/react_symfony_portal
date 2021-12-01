import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
function createData(id, date, name, status, paymentMethod, amount) {
    return { id, date, name, status, paymentMethod, amount };
  }
const rows1 = [
    createData(
      0,
      '16 Mar, 2021',
      'Logo',
      'under pending',
      'Johnson',
      'Petrenko',
    ),
    createData(
      1,
      '16 Mar, 2021',
      'Header',
      'under designing',
      'Natan Gold',
      'Petrenko',
    ),
    createData(
      1,
      '16 Nov, 2021',
      'Footer',
      'Done',
      'Natan Gold',
      'Petrenko',
    ),
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
export default function Blocks() {
    return (
         <Grid item >
            <Grid item xs={8}>
              <Title>Global Sections:</Title>
            </Grid>
            <Table size="small" aria-label="customized table">
              <TableHead>
                <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>--</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {rows1.map((row) => (
                <TableRow>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                   <TableCell>{row.date}</TableCell>
                </TableRow>
               ))}
              </TableBody>
          </Table>
        </Grid>
    );
}