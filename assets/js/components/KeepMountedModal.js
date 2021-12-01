import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {GetSelect} from './Template';
import  Form  from './Form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({item}) {
  const fonts = GetSelect("fonts");
  const positions = GetSelect("positions");
  const sections = GetSelect("sections");
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("primary");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [linkText, setLinkText] = React.useState('test');
  const [name, setName] = React.useState('inherit');
  const [value, setValue] = React.useState('Controlled');
  React.useEffect(() => {
    if(item.page == 'pages' && item.action == 'add'){
        setLinkText("+ Add page");
        setName("Add page");
    }else if(item.page == 'block' && item.action == 'add'){
        setLinkText("+ Add block");
        setName("Add block (text and image)");
    }else if(item.page == 'image' && item.action == 'add'){
        setLinkText("+ Add image");
        setName("Add image");
    }else if(item.page == 'image' && item.action == 'edit'){
        setLinkText("Change image");
        setName("Change image");
    }else if(item.page == 'next' && item.action == 'add'){
      setLinkText("Next");
      setName("Next");
    }else if(item.page == 'section' && item.action == 'open'){
        setLinkText("Open");
        setName("Sections of Page:");
    }else if(item.page == 'section' && item.action == 'edit'){
        setLinkText("Edit");
        setName("Edit Section");
    }else if(item.page == 'page' && item.action == 'edit'){
        setLinkText("Edit page settings");
        setName("Edit Page Settings");
    }else if(item.page == 'section' && item.action == 'add'){
        setLinkText("Add a new section");
        setName("Add Section");
    }else if(item.action == 'claims'){
        setLinkText("open (" + item.page + " claims!)");
        setName("Claims of section:");
        setColor("error");
    }else{
        setLinkText("Edit");
        setName("Edit text");
    }
  }, [item]);
  function clickFunc(){
    console.log('item111');
    console.log(item);
   // alert( "clickFunc" );
    handleClose();
    item.function(true);
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //console.log('item');
  //console.log(item);
  return (
    <div>
       <Typography id="keep-mounted-modal-title">
      <div className="addButton">
        <Button variant="contained" color={color} onClick={handleOpen} >{linkText}</Button>
      </div>
      </Typography>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {name}
            <IconButton onClick={handleClose}>
              
            </IconButton>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mb: 4 }}>
          {item.action == 'open' ? 
             <Table size="small" aria-label="customized table">
             <TableHead>
               <TableRow>
               <TableCell className="css-11k72hi-MuiTableCell-root">Name</TableCell>
               <TableCell className="css-11k72hi-MuiTableCell-root">Status</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
                <TableRow>
                   <TableCell>Welcome</TableCell>
                   <TableCell>Waiting On Client</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Our Mission</TableCell>
                   <TableCell>Waiting On AIT Review</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Our Staff</TableCell>
                   <TableCell sx={{color: 'success.main',}}>Approved</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Testimonials</TableCell>
                   <TableCell sx={{color: 'error.light',}}>Waiting On Client(Not Approved)</TableCell>
                 </TableRow>
             </TableBody>
           </Table>
            : item.action == 'claims'  ?
              <Table size="small" aria-label="customized table">
              <TableHead>
                <TableRow>
                <TableCell className="css-11k72hi-MuiTableCell-root">Side</TableCell>
                <TableCell className="css-11k72hi-MuiTableCell-root">Claim/Reply</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell sx={{color: 'warning.light',}}>Client</TableCell>
                    <TableCell sx={{color: 'warning.light',}}>Want to change font colot to blue</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color: 'info.light',}}>Devs</TableCell>
                    <TableCell sx={{color: 'info.light',}}>Implementing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color: 'warning.light',}}>Client</TableCell>
                    <TableCell>third photo must be more bigger</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color: 'info.light',}}>Devs</TableCell>
                    <TableCell sx={{color: 'error.light',}}>No opportunity to implement</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color: 'warning.light',}}>Client</TableCell>
                    <TableCell>second photo must be changed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color: 'info.light',}}>Devs</TableCell>
                    <TableCell sx={{color: 'info.light',}}>Photo is being searched</TableCell>
                  </TableRow>
              </TableBody>
              </Table>
            : item.action == 'add' && item.page == 'block'?
                <Table size="small" aria-label="customized table">
                  <TableHead>
                    <TableRow>
                    <TableCell colSpan={2} className="label-form">content:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell colSpan={2}>
                        <TextField fullWidth id="outlined-multiline-flexible" placeholder="Put some text" label="Text" multiline maxRows={6}  onChange={handleChange} />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="label-form" >{fonts} </TableCell>
                        <TableCell className="label-form" >{positions}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2} className="label-form" ><Form / ></TableCell>
                      </TableRow>
                  </TableBody>
                  </Table>
            : item.action == 'add' && item.page == 'section'?
            <Grid container xs={12}>
              <Grid item xs={12}>
                {sections}
              </Grid> 
          </Grid>
                
            :
            <Typography id="keep-mounted-modal-title">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          }
          </Typography>
          <Typography id="keep-mounted-modal-title">
          {item.action == 'open' || item.action == 'claims' ? 
            <Button component={'button'} variant="contained" onClick={handleClose}>{'close'}</Button>
          : item.page == 'section' && item.action == 'add' ?
          <Grid container xs={12}>
              <Grid item xs={9}>
                <Button component={'button'} variant="contained" onClick={clickFunc}>{'submit new section'}</Button>
              </Grid>
              <Grid item xs={3}>
              <Button component={'button'} variant="contained" onClick={handleClose}>{'close'}</Button>
            </Grid>
          </Grid>
          :
            <Button  variant="contained" onClick={handleClose}>{'submit'}</Button>
          }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
