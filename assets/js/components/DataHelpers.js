/**
 * @param {string} url
 */
const getPages = GetPages();
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
function createDataPage(id, date, name, status, paymentMethod, amount) {
  return { id, date, name, status, paymentMethod, amount };
}
export function GetPage(value) {
  //console.log(GetPages);
      return 'test';
}
export function GetTexts() {
  const rows = [
    {
      id: 1,
      date: '16 Mar, 2021',
      status:0,
      page_id: 0,
    },
    {
      id: 2,
      date: '16 Mar, 2021',
      status:1,
      page_id: 1,
    },
    {
      id: 3,
      date: '16 Mar, 2021',
      status:2,
      page_id: 2,
    },
    {
      id: 4,
      date: '16 Mar, 2021',
      status:3,
      page_id: 2,
    },
    {
      id: 5,
      date: '16 Mar, 2021',
      status:1,
      page_id: 3,
    },
    {
      id: 6,
      date: '16 Mar, 2021',
      status:2,
      page_id: 3,
    },
  ];
  return rows;
}
export function GetPages() {
  const rows = [
    createDataPage(
      0,
      '16 Mar, 2021',
      'Home',
      'need to do: 3',
      'Johnson',
      'Petrenko',
    ),
    createDataPage(
      1,
      '16 Mar, 2021',
      'Contacts',
      'Approved',
      'Natan Gold',
      'Petrenko',
    ),
    createDataPage(
      2, 
      '16 Mar, 2021',
       'Gallery',
        'need to do: 1',
         'Johnson',
          'Dubov'),
    createDataPage(
      3,
      '16 Mar, 2021',
      'About us',
      'need to do: 5',
      'Natan Gold',
      'Dubov',
    ),
    createDataPage(
      4,
      '15 Mar, 2021',
      'Blog',
      'need to do: 2',
      'Johnson',
      'Dubov',
    ),
  ];
  return rows;
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
export function GetStatus(value) {
    const status = ["Waiting On Client", "Waiting On AIT Review", "Approved", "Waiting On Client(Not Approved)"];
        return status[value];
}
export function GetColor(value) {
    const status = ["warning.light", "primary.light", "success.main", "error.light"];
        return status[value];
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
export function GetDate() {
  const obj = new Object();
  const item = {action:'add', page:'text'}; 
  const item1 = {action:'add', page:'image'};
  const item2 = {action:'edit', page:'text'}; 
  const item3 = {action:'add', page:'section'}; 

  const itemCard = {type: 'text',name:'welcom text', content: 'Welcom to our site. Our mission to help you to do something...', description:'center of background image'}; 
  const itemCard1 = {type: 'image',name:'welcom image', content: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', description:'background image of welcom section'};
  const itemCard2 = {type: 'text',name:'Watch yellow', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'description of an item'};  
  const itemCard3 = {type: 'image',name:'Watch yellow', content: '/img/goods/rosefield_watch_yellow1.jpg', description:'image'}; 

  const itemShef = {type: 'text',name:'Francoix De Clerk', content: 'The best shef Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'description of an item'};  
  const itemShef1 = {type: 'image',name:'Francoix De Clerk', content: '/img/portal/100lr_JWGB.jpg', description:'image'}; 
  const itemShef2 = {type: 'text',name:'Don Johnson', content: 'The best shef Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'description of an item'};  
  const itemShef3 = {type: 'image',name:'Don Johnson', content: '/img/portal/shutterstock_1518533924-min.jpg', description:'image'};
  const itemShef4 = {type: 'text',name:'Catherine Terner', content: 'The best waiter Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'description of an item'};  
  const itemShef5 = {type: 'image',name:'Catherine Terner', content: '/img/portal/caterwaiters-catering-staff-hero.jpg', description:'image'};
  const mission = {type: 'text',name:'First to feed', content: 'The main aim of our company adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...', description:'description of an item'}
  const mission1 = {type: 'image',name:'First to feed', content: '/img/portal/trebovania-k-odezhde-povara.jpg', description:'our mission image'}
  
  return obj;
}