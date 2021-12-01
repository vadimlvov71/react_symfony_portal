import axios from "axios";
import React from "react";
//import FlashMessage from 'react-flash-message';
import Bounce from 'react-reveal/Bounce';
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';

import KeepMountedModal from './KeepMountedModal';
import CardMedia from '@mui/material/CardMedia';
import {Alert, Box, Button} from '@mui/material';
import {GetTooltip} from './Template';
import { Context } from "./Context"; 
const baseURL = "/api_portal/issues";

export default function Section({arg}) {
	const history = useHistory();
    const [completed, setCompleted] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [openSection, setOpenSection] = React.useState(true);
    const [context, setContext] = React.useContext(Context);
	
	//setIsLoading(true);
  	React.useEffect(() => {
    	setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  function parentOpen(){
    arg(false);
    console.log(arg(false));
  }
 // console.log('arg');
 // console.log(arg);
  const item0 = {action:'add', page:'block'}; 
  const item1 = {action:'add', page:'image'};


  return (
    
	<Grid item xs={12} className="sectionNew" sx={{ mt: 4}}>
        {openSection ?
        <Bounce top>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
            <Grid container  spacing={2}>
                <Grid item xs={6} className="sectionHeader">
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Title>Section "{context}"</Title>
                    {openAlert ?
                        <Bounce left>
                            <Box className="sectionCreatedFlash">
                                <Alert onClose={() => setOpenAlert(false)}>
                                    New Section has been just created!
                                </Alert>              
                            </Box>
                        </Bounce>
                    :null
                    }
                    </Box>
                       
                </Grid>
                <Grid item xs={2} className="sectionHeader">
                    <KeepMountedModal item={item0} /> 
                </Grid>
                <Grid item xs={2} className="sectionHeader">
                 {GetTooltip('block')}
                </Grid>
                <Grid item xs={2} className="sectionHeader">
                    <Button variant="outlined" onClick={() => parentOpen()} color="error">Delete Section</Button> 
                </Grid>
                <Grid item xs={6} sx={{ p: 2}} id="textId">
                
                    </Grid>
                    <Grid item xs={6}>
                
                    </Grid>  
                </Grid>
            </Paper> 
        </Bounce>
         :null
        }
      </Grid>
    
  );
}

