import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Title from './Title';
import KeepMountedModal from './KeepMountedModal';
import MultiActionAreaCardSimple from './MultiActionAreaCardSimple'; 
import Section from './Section';
import Example from './Example';

import {GetTooltip, GetExample} from './Template'; 

export default function Page({data}) {
  const item = {action:'add', page:'text'}; 
  const item1 = {action:'add', page:'image'};
  const item2Wel = {action:'example', function:handleOpen, example:'welcome'}; 
  const item2Test = {action:'example', function:handleOpen, example:'testimonials'}; 
  const item3 = {action:'add', page:'section', function:handleClick}; 
  const item4 = {action:'edit', page:'page'};
  const itemClaims = {action:'claims', page:'4'}; 
  const itemClaims1 = {action:'claims', page:'2'};
  const itemCard = {type: 'text',name:'welcom text', content: 'Welcom to our site. Our mission to help you to do something...', description:'center of background image'}; 
  const itemCard1 = {type: 'image',name:'welcom image', content: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', description:'background image of welcom section'};
  
  const itemShef = {type: 'text',name:'Francoix De Clerk', content: 'The best shef Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'first'};  
  const itemShef1 = {type: 'image',name:'Francoix De Clerk', content: '/img/portal/100lr_JWGB.jpg', description:'image'}; 
  const itemShef2 = {type: 'text',name:'Don Johnson', content: 'The best shef Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'second'};  
  const itemShef3 = {type: 'image',name:'Don Johnson', content: '/img/portal/shutterstock_1518533924-min.jpg', description:'image'};
  const itemShef4 = {type: 'text',name:'Catherine Terner', content: 'The best waiter Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'third'};  
  const itemShef5 = {type: 'image',name:'Catherine Terner', content: '/img/portal/caterwaiters-catering-staff-hero.jpg', description:'image'};
  const mission = {type: 'text',name:'First to cook', content: 'The main aim of our company adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'left'}
  const mission1 = {type: 'image',name:'First to cook', content: '/img/portal/trebovania-k-odezhde-povara.jpg', description:'our mission image'}
  const mission2 = {type: 'text',name:'Second to feed', content: 'The main aim of our company adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'center'}
  const mission3 = {type: 'image',name:'Second to feed', content: '/img/portal/60.jpg', description:'our mission image'}
  const mission4 = {type: 'text',name:'Third to entertain', content: 'The main aim of our company adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'right'}
  const mission5 = {type: 'image',name:'Third to entertain', content: '/img/portal/21254.jpg', description:'our mission image'}
  const title = React.createElement('h1', {}, 'My First React Code');
  const [newSection, setNewSection] = React.useState(false);
  const [exampleSectionWelcome, setExampleSectionWelcome] = React.useState(false);
  const [exampleSectionTestimonials, setExampleSectionTestimonials] = React.useState(false);
  //alertconst handleOpen = () => setExampleSection(true);
  const buttons = [
    <Box className="listHeader" key="one">Example sections:</Box>,
    <Button key="two"  onClick={() => handleOpen(true, "welcome")}>Welcome</Button>,
    <Button key="three" onClick={() => handleOpen(true, "testimonials")}>Testimonials</Button>,
  ];
  function handleOpen(status, type){
    if(status == true ){
      if(type == "welcome"){
          setExampleSectionWelcome(true)
          setExampleSectionTestimonials(false)
      }else{
          setExampleSectionTestimonials(true)
          setExampleSectionWelcome(false)
      }
    }else{
      if(type == "welcome"){
        setTimeout(() => {
          setExampleSectionWelcome(false);
        }, 700);
      }else{
        setTimeout(() => {
          setExampleSectionTestimonials(false)
        }, 700);
      }
    }
  }
  function handleClick(status){
   
      if(status == true ){
        setNewSection(true);
      }else{
        setNewSection(false);
      }
  }
  //setTimeout(newSectionFunc, 5000);
  //const handleClick = () => alert( "Clicked" );
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mt: 0, mb: 0 }}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
           <Grid container spacing={2}>
              <Grid item xs={6}>
                <Title>Sections of page: {data}</Title>
                  {GetTooltip('what_kind_of_section')}
              </Grid>
              <Grid item xs={3}>
                  <KeepMountedModal item={item3}  />
                  {GetTooltip('section')}
              </Grid>
              <Grid item xs={3}>
              <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                >
                  {buttons}
                </ButtonGroup>
                 
              </Grid>
            </Grid>
        </Paper> 
      </Grid>
      {newSection ?
        <Section arg={handleClick}/>
        : 
        null
      }
      {exampleSectionWelcome ?
          <Example arg={item2Wel}/>
        :exampleSectionTestimonials  ?
          <Example arg={item2Test}/>
        :
        null
      }
      {data != "Home" ?
      <div>
      <Grid item xs={12} className="section" sx={{ mt: 4}}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
           <Grid container  spacing={2}>
              <Grid item xs={6} className="sectionHeader">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Title>Section "Welcome"</Title>
                  <CardMedia component="img" sx={{ width: 151, pl:1 }} image="/img/portal/approved.png" alt="Live from space album cover" />
                </Box>
                <KeepMountedModal item={item} />
              </Grid>
               <Grid item xs={6} className="sectionHeader">
                  section were made up by 2 items: '1 text' and '1 image'
                  <KeepMountedModal item={item1} /> 
               </Grid>
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={itemCard} />                   
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={itemCard1} /> 
                </Grid>  
            </Grid>
        </Paper> 
      </Grid>
      <Grid item xs={12} sx={{ mt: 4}} className="section">
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
           <Grid container  spacing={2}>
              <Grid item xs={6} className="sectionHeader">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Title>Section "Our Mission"</Title>
                  <Box sx={{pl: 4}}>
                    <KeepMountedModal item={itemClaims}  /> 
                  </Box>
                </Box>
                <KeepMountedModal item={item} /> 
              </Grid>
               <Grid item xs={6} className="sectionHeader">
                  section were made up by 6 items: '3 texts' and '3 images'
                  <KeepMountedModal item={item1} /> 
               </Grid>
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={mission} />                 
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={mission1} /> 
                </Grid>  
            </Grid>
            <Divider/>   
            <Grid container spacing={2} className="zebra">
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={mission2} />               
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={mission3} /> 
                </Grid>  
            </Grid>
            <Divider/>   
            <Grid container spacing={2}>
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={mission4} />                   
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={mission5} /> 
                </Grid>  
            </Grid>
        </Paper> 
      </Grid>
      <Grid item xs={12} sx={{ mt: 4}} className="section">
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
           <Grid container  spacing={2}>
              <Grid item xs={6} className="sectionHeader">
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Title>Section "Our Staff"</Title>
                  <Box sx={{pl: 4}}>
                    <KeepMountedModal item={itemClaims1}  /> 
                  </Box>
                </Box>
                <KeepMountedModal item={item} /> 
              </Grid>
               <Grid item xs={6} className="sectionHeader">
                  section were made up by 6 items: '3 texts' and '3 images'
                  <KeepMountedModal item={item1} /> 
               </Grid>
               <Grid item xs={6} sx={{ p: 2}}>
                
                  <MultiActionAreaCardSimple item={itemShef} />                 
                </Grid>
                <Grid item xs={6}>
                  
                  <MultiActionAreaCardSimple item={itemShef1} /> 
                </Grid>  
            </Grid>
            <Divider/>   
            <Grid container spacing={2} className="zebra">
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={itemShef2} /> 
                                    
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={itemShef3} /> 
                </Grid>  
            </Grid>
            <Divider/>   
            <Grid container spacing={2}>
               <Grid item xs={6} sx={{ p: 2}}>
                  <MultiActionAreaCardSimple item={itemShef4} />                   
                </Grid>
                <Grid item xs={6}>
                  <MultiActionAreaCardSimple item={itemShef5} /> 
                </Grid>  
            </Grid>
        </Paper> 
      </Grid>
      </div>
      : null
      }
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
