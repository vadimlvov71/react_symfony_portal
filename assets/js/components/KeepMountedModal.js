import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("primary");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [linkText, setLinkText] = React.useState('test');
  const [name, setName] = React.useState('inherit');
  React.useEffect(() => {
    if(item.page == 'pages' && item.action == 'add'){
        setLinkText("+ Add page");
        setName("Add page");
    }else if(item.page == 'text' && item.action == 'add'){
        setLinkText("+ Add text");
        setName("Add text");
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
    }else if(item.page == 'page' && item.action == 'claims'){
        setLinkText("open (4 claims!)");
        setName("Claims of section:");
        setColor("error");
    }else{
        setLinkText("Edit");
        setName("Edit text");
    }
  }, [item]);
  
  console.log('item');
  console.log(item);
  return (
    <div>
      <div className="addButton">
        <Button variant="contained" color={color} onClick={handleOpen} >{linkText}</Button>
      </div>
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
                   <TableCell>Welcom</TableCell>
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
                <TableCell className="css-11k72hi-MuiTableCell-root">Name</TableCell>
                <TableCell className="css-11k72hi-MuiTableCell-root">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell>Welcom</TableCell>
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
            :
            <div>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
          }
          </Typography>
          {item.action == 'open' ? 
            <Button variant="contained" onClick={handleClose}>{'close'}</Button>
           :
            <Button variant="contained" onClick={handleClose}>{'submit'}</Button>
          }
        </Box>
      </Modal>
    </div>
  );
}
