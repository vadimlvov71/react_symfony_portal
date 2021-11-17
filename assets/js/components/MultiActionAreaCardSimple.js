import * as React from 'react';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import KeepMountedModal from './KeepMountedModal';
import Grid from '@mui/material/Grid';

export default function MultiActionAreaCardSimple({item}) {
    const item2 = {action:'edit', page:'text'}; 
    const item4 = {action:'edit', page:'image'};
    const history = useHistory();
	const [brands, setBrand] = React.useState(null);
	////////
	const handleRoute = (site) =>{ 
		history.push("?site=" + site);
	}
  /*React.useEffect(() => {
    axios.get(baseURL).then((response) => {
		setBrand(response.data);
    });
  }, []);*/
  return (

   
    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
            {item.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          -
        </IconButton>
        <IconButton aria-label="play/pause">
            {item.type == 'text' ?
                <KeepMountedModal item={item2}  />
            :
                <KeepMountedModal item={item4}  />
            }
        </IconButton>
        <IconButton aria-label="next">
          -
        </IconButton>
      </Box>
    </Box>
    
     {item.type == 'text' ?
         <Typography variant="body2" className="sectionContent" component="div" >
         {item.content}
        </Typography> 
     :
     <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={item.content}
      alt="Live from space album cover"
      />
    }
   </Card> 
  );
}
