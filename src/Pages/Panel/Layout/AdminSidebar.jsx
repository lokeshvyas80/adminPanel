import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from "@mui/material/MenuItem";
import {Link as RouterLink, NavLink, Outlet} from "react-router-dom";
import {
    ButtonBase,
    Tooltip,
    Avatar,
    Container,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function AdminSidebar() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgb(11 124 51 / 94%)' }}>
        <Toolbar>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Typography variant="h5" noWrap component="div" sx={{ color: '#fff' }}>
            Admin
          </Typography>

            <Box sx={{ flexGrow: 1 }}/>
            
            <Box
                // component={ButtonBase}
                sx={{ flexGrow: 0 }}
            >
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar sx={{ bgcolor: '#fff', color: '#c6c7c8' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem to="/dashboard" component={RouterLink}>
                        <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                    <MenuItem to="/login" component={RouterLink}>
                        <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </Toolbar>
      </AppBar>

      

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/kajupizzalogo.png`}
            width="60px"
            alt="kajupizza"
          />
          <Typography sx={{marginRight: '0.2rem'}}>KAJU'SPIZZA</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton to="/dashboard" component={RouterLink}>
                <ListItemIcon>
                  <DashboardCustomizeOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton to="/dashboard/booking" component={RouterLink}>
                    <ListItemIcon>
                    <BookmarkAddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Booking" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton to="/dashboard" component={RouterLink}>
                    <ListItemIcon>
                    <BookmarkAddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Booking" />
                </ListItemButton>
            </ListItem>
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open} sx={{ background: '#f6f6f6', height: '100vh' }}>
        <DrawerHeader />
        <Outlet />
      </Main>
      </Box>
      </>
  );
}

export default AdminSidebar
