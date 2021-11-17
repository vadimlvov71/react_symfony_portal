import * as React from 'react';
import { useHistory } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Text from './Text';
import Link from '@mui/material/Link';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MultiActionAreaCardSimple from './MultiActionAreaCardSimple';
import KeepMountedModal from './KeepMountedModal';
import { GetColor, GetComponents, GetImages, GetColors, GetFonts} from './Helpers'


export default function Settings({data}) {
    const history = useHistory();
    const handleRoutePage = (page) =>{ 
        history.push("?page=" + page);
      }
    const style1 = {
        border: '1px solid #ccc',
        width: 500,
          padding:'9px',
          boxSizing:'border-box',
          fontSize:'15px',
          p: 4,
        };
        const style2 = {
           padding:'9px',
        };
  const info = GetComponents();
  console.log('info');
  console.log(info[data].name);
  const item = {action:'add', page:'next'}; 
  const item1 = {action:'add', page:'image'};
  const itemCard1 = {type: 'image',name:'page:', content: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', description:<Link className="link" onClick={() => handleRoutePage("Home")}>Home</Link>};
  const itemCard2 = {type: 'image',name:'page:', content: '/img/portal/100lr_JWGB.jpg', description:<Link className="link" onClick={() => handleRoutePage("Home")}>Home</Link>}; 
  const itemCard3 = {type: 'image',name:'page:', content: '/img/portal/shutterstock_1518533924-min.jpg', description:<Link className="link" onClick={() => handleRoutePage("Gallery")}>Gallery</Link>};
  const itemCard4 = {type: 'image',name:'page:', content: '/img/portal/caterwaiters-catering-staff-hero.jpg', description:<Link className="link" onClick={() => handleRoutePage("Gallery")}>Gallery</Link>};
  const itemCard5 = {type: 'image',name:'page:', content: '/img/portal/trebovania-k-odezhde-povara.jpg', description:<Link className="link" onClick={() => handleRoutePage("Home")}>Home</Link>}
  return (
      
    <Grid container>
        <Grid item xs={12} sx={{ mt: 0, mb: 4 }}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Title>Settings of Component: {info[data].name}</Title>
                </Grid>
                </Grid>
            </Paper> 
        </Grid>
        <Grid item xs={12} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                
                {data == 0 ? 
                    <Text/>
                : data == 1 ? 
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
                        <Grid container  spacing={2}>
                            <Grid item xs={6} className="sectionHeader">
                                <Title>Images</Title>
                            </Grid>
                            <Grid item xs={6} className="sectionHeader">
                                <KeepMountedModal item={item1} /> 
                            </Grid>
                            <Grid item xs={6} sx={{ p: 2}}>
                                <MultiActionAreaCardSimple item={itemCard1} />                   
                            </Grid>
                            <Grid item xs={6} sx={{ p: 2}}>
                                <MultiActionAreaCardSimple item={itemCard2} />
                            </Grid>
                            <Grid item xs={6} sx={{ p: 2}}>
                                <MultiActionAreaCardSimple item={itemCard3} />                   
                            </Grid>
                            <Grid item xs={6} sx={{ p: 2}}>
                                <MultiActionAreaCardSimple item={itemCard4} />
                            </Grid>
                        </Grid>
                    </Paper> 
                </Grid>
                : data == 2 ? 
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
                            <Grid container  spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                                    <Input placeholder="First Name"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                                    <Input placeholder="Last Name"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                                    <Input placeholder="Email"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="component-simple">Phone</InputLabel>
                                    <Input placeholder="Phone"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <KeepMountedModal item={item} />
                                </Grid>
                            </Grid>
                        </Paper> 
                    </Grid>
                : data == 3 ?
                    <Grid container  spacing={2}>
                        <Grid item xs={12}>
                            <Title>Social Media #1</Title>
                        </Grid>
                        <Grid item xs={12}>
                        <h6 className="css-10ilnaf">Facebook</h6>
                        <h6 className="css-10ilnaf">Twitter</h6>
                        <h6 className="css-10ilnaf">Instagram</h6>
                        </Grid>
                    </Grid>
                : data == 4 ?
                <Grid container  spacing={2}>
                    <Grid item xs={12}>
                        <Title>Preferences information #1</Title>
                    </Grid>
                    <Grid item xs={12} sx={style2}>
                         <h6 className="css-10ilnaf">Theme fonts</h6>
                         {fonts.map((font) => (
                            <Grid sx={style2}>
                                <img style={style1} src={font} alt={"logo"}/> 
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                    <h6 className="css-10ilnaf">Theme colors</h6>
                    {colors.map((color) => (
                        <div>
                            <Grid sx={{color: color}}>{color}</Grid>
                        </div>
                        ))}
                    </Grid>
                </Grid>
                : data == 5 ?
                    <Grid container  spacing={2}>
                        <Grid item xs={6}>
                            <Title>Products #1</Title>
                        </Grid>
                        <Grid item xs={6}>
                            <Title>Products #2</Title>
                        </Grid>
                    </Grid>
                : 
                    <Grid container  spacing={2}>
                        <Grid item xs={12}>
                            <Title>Shipping Info</Title>
                        </Grid>
                        <Grid item xs={12}>
                            <Title>Shipping Taxes</Title>
                        </Grid>
                        <Grid item xs={12}>
                            <Title>Payment Gateway</Title>
                        </Grid>
                    </Grid>
                }
            </Paper> 
        </Grid>
      </Grid>
      
  );
}
const itemData = GetImages();
const colors = GetColors();
const fonts = GetFonts();