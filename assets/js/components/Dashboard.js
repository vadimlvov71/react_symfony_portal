
import * as React from 'react';
import {useLocation} from 'react-router';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LeftMenuGeneral from './LeftMenuGeneral';
import { mainListItems, secondaryListItems } from './listItems';
//import Chart from './Chart';
import Deposits from './Deposits';
import Notifications from './Notifications';
import Pages  from './Pages';
import Components from './Components';
import Page  from './Page';
import Settings from './Settings';
import { GetUri, getProjectByUrl } from './Helpers';
import Issues from './Issues';
import Breadcrums  from './Breadcrums';
//import Projects from './Projects';
import MultiActionAreaCard  from './MultiActionAreaCard';
import Title from './Title';
import { Context } from "./Context.js";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const items = getProjectByUrl('cms_website_one');
const items1 = getProjectByUrl('cms_website_two');
const items2 = getProjectByUrl('wordpress');

let args = [];
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
 //var siteOpen = false;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [site, setSite] = React.useState(null);
  const [siteOpen, setSiteOpen] = React.useState(false);
  const [issueOpen, setIssueOpen] = React.useState(false);
  const [pageOpen, setPageOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [pagesOpen, setPagesOpen] = React.useState(false);
  const [componentOpen, setComponenOpen] = React.useState(false);
  const siteOpenForPage = false;
  const [pageItems, setPageItems] = React.useState(null);
  const [context, setContext] = React.useState("Test");
  const toggleDrawer = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    console.log(location);
    console.log('location.search');
    console.log(location.search);
    if(location.search != ""){
      let pageUrl = GetUri(location.search);
      if(pageUrl.url == "site"){
          setSiteOpen(true);
          setIssueOpen(false);
          setSettingsOpen(false);
          setPagesOpen(false);
          //siteOpen = true;
      }else if(pageUrl.url == "issue"){
          setSiteOpen(false);
          setIssueOpen(true);
          setPagesOpen(false);
      }else if(pageUrl.url == "page"){
          setPageItems(pageUrl.name);
          setSiteOpen(false);
          setIssueOpen(false);
          setPagesOpen(false);
          setPageOpen(true);
      }else if(pageUrl.url == "settings"){
          setPageItems(pageUrl.name);
          setSiteOpen(false);
          setIssueOpen(false);
          setPagesOpen(false);
          setPageOpen(false);
          setSettingsOpen(true);
        }else if(pageUrl.url == "pages"){
          console.log("pages++++++++++");
          console.log(pageUrl);
          const getSite = getProjectByUrl(pageUrl.name);
          setSite(getSite);
          setPageItems(pageUrl.name);
         
          setPagesOpen(true);
          setSiteOpen(false);
          setIssueOpen(false);
          setSettingsOpen(false);
      }
    }else{
      setSiteOpen(false);
      setIssueOpen(false);
      setPageOpen(false);
      setPagesOpen(false);
    }
  }, [location]);
  console.log("site++++++++++");
  console.log(site);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              AIT Client Content Portal
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List><LeftMenuGeneral /></List>
          <Divider />
          <List>To Do</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Context.Provider value={[context, setContext]}> 
            {pagesOpen ? 
              <React.Fragment>
                  <Breadcrums item='pages'/>
                  
                    <Pages site={site}/>
                  
              </React.Fragment>
            : siteOpen ? 
              <React.Fragment>
                  <Breadcrums item='components'/>
                  <Components />
              </React.Fragment>
            : issueOpen ? 
              <React.Fragment>
                 <Breadcrums item='history'/>
                  <Issues />
              </React.Fragment>
            : pageOpen ?
              <React.Fragment>
               
                  <Breadcrums item={pageItems} />
                  <Page data={pageItems}/>
                
              </React.Fragment>
            : settingsOpen ?
              <React.Fragment>
                 <Breadcrums item={pageItems} />
                  <Settings data={pageItems}/>
              </React.Fragment>
            : 
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper sx={{p: 2,height: 400,}}>
                      <Title>Projects</Title>
                      <Grid sx={{p: 2,display: 'flex',justifyContent: 'flex-start',height: 300,}}>
                        <MultiActionAreaCard item={items} />
                        <MultiActionAreaCard item={items1} />
                        <MultiActionAreaCard item={items2} />
                      </Grid>
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper sx={{p: 2,display: 'flex',flexDirection: 'column',height: 240, }}>
                      <Deposits />
                    </Paper>
                  </Grid>
                  {/* end Deposits */}
                  {/* main changed section */}
                  
                    <Grid item xs={12}>
                      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Notifications />
                      </Paper>
                    </Grid>
                  
                  </Grid>
            }
            <Copyright sx={{ pt: 4 }} />
            </Context.Provider>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
