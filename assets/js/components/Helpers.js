import * as React from 'react';
import {GetPages} from './DataHelpers';
/**
 * @param {string} url
 */

//const getPages = GetPages;
export function GetUri(url) {
    console.log(url);
    //const url = window.location.href;
    const arr = url.split("?");
    console.log(arr);
    console.log('arr');
    console.log(arr);
    const tempUrl = arr[1];
    const newUrl = tempUrl.split("=");
    let pageUrl = {'url':newUrl[0], 'name':newUrl[1]};

    console.log('pageUrl');
    console.log(pageUrl);
    
    return pageUrl;
}
function createData(id, date, name, status) {
    return { id, date, name, status };
  }
export function GetComponents() {
    const rows = [
        createData(
          0,
          '14 Mar, 2021',
          'Text',
          0,
        ),
        createData(
          1,
          '16 Mar, 2021',
          'Images',
          1,
        ),
        createData(
            2, 
            '16 Apr, 2021', 
            'Contact Information',
            2,  
        ),
        createData(
            3, 
            '05 Mae, 2021',
            "Social Media",
            2,  
        ),
        createData(
          4,
          '16 Mar, 2021',
          'Preferences',
          3,
        ),
        createData(
          5,
          '29 July, 2021',
          'Products',
          1,
        ),
        createData(
            6,
            '01 Mar, 2021',
            'Ecommerce Info',
            2,
          ),
      ];
    return rows;
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