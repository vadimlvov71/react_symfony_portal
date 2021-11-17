import * as React from 'react';
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button, Tooltip, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeepMountedModal from './KeepMountedModal';
import KeepMountedModalText from './KeepMountedModalText';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Blocks from './Blocks';
import {GetPages, GetPage, GetTexts} from './DataHelpers';
import {GetComponents, GetStatus, GetColor} from './Helpers';
// Generate Order Data
function createData(id, date, name, status, paymentMethod, amount) {
  return { id, date, name, status, paymentMethod, amount };
}

const rows = GetComponents();
const pages = GetPages();
const item = {action:'add', page:'text'};
const item1 = {action:'edit', page:'text'};
function preventDefault(event) {
  event.preventDefault();
}
const texts = GetTexts();
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
/*
function getPageById(page_id){
    texts.forEach(function(item, i, text) {
      console.log('forEac');
        if(page_id == item.page_id){
          console.log(item.page_id);
          return pages[]
        }
    });
  //return
}
*/
//getPageById();
export default function Text() {
  const history = useHistory();
  
  
  const handleRouteHistory = (page) =>{ 
    history.push("?issue=" + page);
  }
  const handleRoutePage = (page) =>{ 
    history.push("?page=" + page);
  }
  const handleRouteContent = (id) =>{ 
    history.push("?settings=" + id);
  }
  console.log('pages');
  console.log(pages[0].name);
  console.log('texts');
  console.log(texts);
  return (
    <Grid item xs={12} >
      <Grid container  >
        <Grid item xs={8}>
          <Title>Text</Title>
        </Grid>
        <Grid item xs={4} >
          <div className="addButton">
              <KeepMountedModal item={item} />
          </div> 
        </Grid>
      </Grid>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>Text</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Reason</StyledTableCell>
            <StyledTableCell>Page</StyledTableCell>
            <StyledTableCell>Management</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {texts.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell sx={{color: GetColor(row.status)}}>{GetStatus(row.status)}</TableCell>
                    {row.status == 3 ? 
                    <TableCell>
                      <Tooltip placement="top" title={
                        <React.Fragment>
                          <Typography color="inherit">Client requires:</Typography>
                          <div><em>1. {"Text"}</em> <b>{'must be'}</b></div>
                          <div><em>2. {"Image"}</em> <b>{'must be'}</b></div> 
                             <u>{'link to the full message'}</u>.{' '}
                        </React.Fragment>
                        }>
                        <Button sx={{color:'#ff0000'}}>read the claims</Button>
                      </Tooltip>
                    </TableCell>
                    :
                      <TableCell> - </TableCell>
                    }
                    <TableCell><Link className="link" onClick={() => handleRoutePage(pages[row.page_id].name)}>{pages[row.page_id].name}</Link></TableCell>
                    {row.status == 2 ? 
                        <TableCell> - </TableCell>
                    : 
                    <TableCell> <KeepMountedModal item={item1} /> </TableCell> 
                    }
              </TableRow>
               
                  
            ))}
          </TableBody>
        </Table>
      </Grid>
  );
}