import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, Tooltip, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Context } from "./Context";
/**
 * @param {string} type
 */

//const getPages = GetPages;
export function GetSelect(type) {
    const [age, setAge] = React.useState('');
    const [section, setSection] = React.useState('');
    const [context, setContext] = React.useContext(Context);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange1 = (event) => {
      setSection(event.target.value);
      setContext(event.target.value)
    };
    return (
    <FormControl fullWidth>
        { type == "fonts" ?
          <div>
            <InputLabel id="demo-simple-select-label">Font color</InputLabel>
             <Select fullWidth
                labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Font color" onChange={handleChange}
                >
                <MenuItem  value={1}>Black</MenuItem>
                <MenuItem sx={{color: 'info.light',}} value={2}>Blue</MenuItem>
                <MenuItem sx={{color: 'error.light',}} value={3}>Red</MenuItem>
                <MenuItem sx={{color: 'success.light',}} value={4}>Green</MenuItem>
                </Select>
            </div>
          :type == "sections" ?
              <div>
                <InputLabel id="demo-simple-select-label">Sections</InputLabel>
                  <Select fullWidth
                  labelId="demo-simple-select-label" id="demo-simple-select" value={section} label="Position" onChange={handleChange1}
                  >
                  <MenuItem  value="Welcome">Welcome</MenuItem>
                  <MenuItem  value="Testimonials">Testimonials</MenuItem>
                  <MenuItem  value="Our mission">Our mission</MenuItem>
                  <MenuItem  value="Our staff">Our staff</MenuItem>
                  <MenuItem  value="Services">Services</MenuItem>
                  <MenuItem  value="Blog">Blog</MenuItem>
                  <MenuItem  value="Shop">Shop</MenuItem>
                  </Select>
                </div>
            : 
            <div>
                <InputLabel id="demo-simple-select-label">Text position</InputLabel>
                <Select fullWidth
                labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Position" onChange={handleChange}
                >
                <MenuItem  value={1}>Centered</MenuItem>
                <MenuItem  value={2}>Left</MenuItem>
                <MenuItem  value={3}>Right</MenuItem>
                <MenuItem  value={4}>Bottom</MenuItem>
                <MenuItem  value={4}>on the Image</MenuItem>
                </Select>
                </div>
            }
    </FormControl>
    );
}
export function GetExample() {
    
    return (
        <Grid>
            111111
        </Grid>
    );
}
function createData(id, date, name, status) {
    return { id, date, name, status };
  }
export function GetTooltip(type) {
    var item;
    if(type == 'block'){
        item = {name:"A block is", link:'what is it block', content1:"block combines:", content2:"a text with an image"}
    }else if(type == 'section'){
        item = {name:"A section is", link:'what is it section', content1:"section has text and images are devoted to one theme ", content2:"e.g. testomonials:", content3:"3-4 avatars with testimonials"}
    }else if(type == 'what_kind_of_section'){
        item = {name:"There are such sections", link:'What types of sections are there', content1:"'welcome text on the background image'", content2:"'Our mission'", content3:"'Our staff' and so on"} 
    }
    return (
        <Grid>
        <Tooltip placement="bottom" title={
            <React.Fragment>
                <Typography color="inherit">{item.name}</Typography>
                <div><em>1. {item.content1}</em> </div>
                <div><em>2. {item.content2}</em> </div> 
                <div><em>3. {item.content3}</em> </div> 
                 
            </React.Fragment>
            }>
            <Button sx={{color:'#666'}}>{item.link}</Button>
            </Tooltip>
        </Grid>
    );
}
export function GetFonts() {
  const fonts = ["/img/honeymoon-personal-use.png", "/img/sakura-kei.png", "/img/snow-kei-2.png", "/img/star-jedi.png", "/img/progress-personal-use.png", "/img/doom-2016-text.png"];
      return fonts;
}
export function GetStatus(value) {
    const status = ["Waiting On Client", "Waiting On AIT Review", "Approved", "Waiting On Client(Not Approved)"];
        return status[value];
}
export function GetColor(value) {
    const status = ["warning.light", "primary.light", "success.main", "error.light"];
        return status[value];
}
export function GetPage(value) {
  //console.log(GetPages);
      return "test";
}
export function GetStyle() {
    const style = {
    maxHeight:'140px',
    minHeight:'100px',
    minWidth:'500px',
      resize:'none',
      padding:'9px',
      boxSizing:'border-box',
      fontSize:'15px'};
      return style;
}
export function GetColors() {
    const color = ["#2684FF","#fa0c0c","#fa0cb3","#620cfa","#0ceffa","#2684FF","#faeb0c","#fa7c0c"]
    return color;
}
export function GetImages() {
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
  return itemData;
}