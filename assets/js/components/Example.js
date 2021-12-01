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
const baseURL = "/api_portal/issues";

export default function Example({arg}) {
	const history = useHistory();
	const [openBlock, setOpenBlock] = React.useState("");
    const [bounce, setBounce] = React.useState(false);
	const [classOpacity, setClassOpacity] = React.useState("");
    const [linkTitle, setLinkTitle] = React.useState("Open Block");
    const [linkState, setLinkState] = React.useState(true);
    const [color, setColor] = React.useState("normal");
    const [openAlert, setOpenAlert] = React.useState(true);
    const [openSection, setOpenSection] = React.useState(true);
	////////
	const handleRoute = (brand_url) =>{ 
		history.push("?brand=" + brand_url);
	}
	//setIsLoading(true);
  	React.useEffect(() => {
    	
  }, []);
    if(bounce == false){
        setTimeout(() => {
            setBounce(true);
            //alert(bounce);
        }, 700);
    }
  console.log('arg');
  console.log(arg);
  function parentOpen(page){
    arg.function(false, page);
    setBounce(false);
    //alert(bounce);
  }
function blockOpen(status){
    if(status == true){
        setClassOpacity("opacity-block");
        setOpenBlock("open-block");
        setLinkTitle("Close Block");
        setLinkState(false);
        setColor("error");
    }else{
        setClassOpacity("");
        setOpenBlock("");
        setLinkTitle("Open Block");
        setLinkState(true);
        setColor("normal");
    }
}
  const item0 = {action:'add', page:'text'}; 
  const item1 = {action:'example', page:'image'};


  return (
   
	<Grid item xs={12} className="section" sx={{ mt: 4}}>
         { arg.example == 'testimonials'  ? 
        <Bounce top when={bounce}>
            <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide9">
                <div className="row noMarginRight">
                    <div className="col-md-4 ">
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt:2 }}>
                        <Title>Example Section "Testimonials"</Title>
                        </Box>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt:2 }}>
                            <Button className={color} variant="outlined" onClick={() => blockOpen(linkState)} >{linkTitle}</Button>
                        </Box>
                    </div>
                    <div className="col-md-2 ">
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt:2 }}><Button variant="outlined" onClick={() => parentOpen("testimonials")} color="error">Close Example</Button></Box>
                    </div>
                </div>
                
                <Grid container xs={12}>  
                    <Grid item xs={3} className={classOpacity}>
                        <div className="blog-container shadow ">
                            <div className="profile-img ">
                                <CardMedia
                                    component="img"
                                    width="100px"
                                    className="img-fluid ramka image-testimony round-form"
                                    image={'/img/portal/client_feedback_businessman.png'} 
                                    alt="green iguana"
                                />
                            </div>
                            <div className="feedback-text feedback-height-big">
                                <strong>Don Johnson</strong>
                                <br/><br/>
                                AIT, the best webstudia in USA ... works fast and offers a picturesque design
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3} className={openBlock}>
                        <div className="blog-container shadow">
                            <div className="profile-img " >
                            <CardMedia
                                component="img"
                                className="img-fluid ramka image-testimony round-form"
                                image={'/img/portal/client_feedback_girl.png'} 
                                alt="green iguana"
                                />
                            </div>
                            
                            <div className="feedback-text feedback-height-big">
                                <strong>Elene Simson</strong>
                                <br/><br/>
                                I recommend: the site was made by the latest technology! 
                            </div>
                            { linkState == false ?
                                <Button variant="outlined" onClick={() => blockOpen(false)}>Edit</Button>
                            :null}
                        </div>
                    </Grid>
                    <Grid item xs={3} className={classOpacity}>
                        <div className="blog-container shadow">
                            <div className="profile-img " >
                            <CardMedia
                                component="img"
                                className="img-fluid ramka image-testimony round-form"
                                image={'/img/portal/feedback_man.png'} 
                                alt="green iguana"
                                />
                            </div>
                            <div className="feedback-text feedback-height-big">
                                <strong>Ronald Edison</strong>
                                <br/><br/>
                            It`s a very good web studio, made quality and fast. Resolved all my problems
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3} className={classOpacity}>
                        <div className="blog-container shadow">
                            <div className="profile-img ">
                            <CardMedia
                                component="img"
                                className="img-fluid ramka image-testimony round-form"
                                image={'/img/portal/manager.png'} 
                                alt="green iguana"
                                />
                            </div>
                            
                            <div className="feedback-text feedback-height-big">
                                <strong>Tayji Fuhimori</strong>
                                <br/><br/>
                                A turn key website, this company offers a top notch service
                            </div>
                        </div>
                    </Grid>
                </Grid>  
               
              
            </div>
        </Bounce>
         :
         <Bounce top when={bounce}>
            <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide10">
                <div className="row noMarginRight">
                    <div className="col-md-4 ">
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt:2 }}>
                        <Title>Example Section "Welcome"</Title>
                        </Box>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2 ">
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt:2 }}><Button variant="outlined" onClick={() => parentOpen("welcome")} color="error">Close Example</Button></Box>
                    </div>
                </div>
                
                <Grid container xs={12}>  
                        <div className="top-banner shadow">
                            <div className="" style={{ backgroundPosition: 'center center', backgroundSize: 'cover', display: 'block',backgroundImage: 'url("/img/portal/potentional_clients1.jpg")', width:'100%', height:300}} >
                                <div className="center wrapper">
                                    <div className="slogan-border-radius slogan-description center">
                                        Order a website that brings customers
                                    </div>
                                </div>
                            </div>
                        </div>
                </Grid>  
            </div>
        </Bounce>
         }
    </Grid>
   
  );
}

