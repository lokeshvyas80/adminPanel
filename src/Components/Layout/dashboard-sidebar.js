import {Link as RouterLink, NavLink} from 'react-router-dom';

import PropTypes from 'prop-types';
import {Box, Button, Chip, Divider, Drawer, Typography, useMediaQuery} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

import Scrollbar from '../scrollbar';
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import PieChartIcon from "@mui/icons-material/PieChart";
import EmailIcon from "@mui/icons-material/Email";
import StoreIcon from "@mui/icons-material/Store";
import '../../Pages/Panel/Layout/style.scss';


export const DashboardSidebar = (props) => {
    const {onClose, open} = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        noSsr: true
    });

    const [openAdz, setOpenAdz] = React.useState(false);
    const handleAdzMenu = () => {
        setOpenAdz(!openAdz);
    }

    const content = (
        <>
            <Scrollbar
                sx={{
                    height: '100%',
                    backgroundColor:'#111827',
                    '& .simplebar-content': {
                        height: '100%'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        backgroundColor: "#111827"
                    }}
                    id="sidebar"
                >
                    <div>
                        <Box sx={{p: 2}}>

                            <Typography
                                variant="h6"
                                noWrap
                                to="/" component={RouterLink}
                                className={lgUp ? "logo" : "mobile_logo"}
                                sx={{
                                    mr: {sm:2},
                                    display: { md: 'flex'},
                                }}
                            >
                               ADMINPANEL
                            </Typography>
                        </Box>

                        <Box sx={{px: 2, display:{xs:'none', sm:'inherit'}}}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    px: 3,
                                    py: '11px',
                                    borderRadius: 1
                                }}
                            >
                                <div>
                                    <Typography
                                        color="inherit"
                                        variant="subtitle1"
                                    >
                                        Acme Inc
                                    </Typography>
                                    <Typography
                                        color="neutral.400"
                                        variant="body2"
                                    >
                                        Premium
                                    </Typography>
                                </div>

                            </Box>
                        </Box>
                    </div>
                    <Divider
                        sx={{
                            borderColor: '#2D3748',
                            my: {sm:3, xs:1}
                        }}
                    />
                    <Box sx={{flexGrow: 1}}>
                        <List  sx={{
                            color: 'neutral.500',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            lineHeight: 2.5,
                            ml: 4,
                            textTransform: 'uppercase'
                        }}>
                            <ListItem key="Overview" disablePadding>
                                <NavLink to="overview" onClick={onClose}>
                                    <ListItemButton>
                                        <ListItemIcon><HomeIcon/></ListItemIcon>
                                        <ListItemText primary="Overview"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>

                            {/* <ListItem key="Finance" disablePadding>
                                <ListItemButton onClick={handleAdzMenu}>
                                    <ListItemIcon>
                                        <SignalCellularAltIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Adz"/>
                                    {openAdz ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openAdz} timeout="auto" unmountOnExit>
                                <List component="div" sx={{ml: 2}} disablePadding>
                                    <ListItem key="create" disablePadding>
                                        <NavLink to="ad/create"  onClick={onClose}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <ListItemText primary="Create"/>
                                            </ListItemButton>
                                        </NavLink>
                                    </ListItem>
                                    <ListItem key="list" disablePadding>
                                        <NavLink to="ad/list"  onClick={onClose}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <ListItemText primary="Show"/>
                                            </ListItemButton>
                                        </NavLink>
                                    </ListItem>
                                </List>
                            </Collapse> */}

                            {/* <ListItem key="Finance" disablePadding>
                                <NavLink to="finance"  onClick={onClose}>
                                    <ListItemButton>
                                        <ListItemIcon><PieChartIcon/></ListItemIcon>
                                        <ListItemText primary="Finance"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem> */}
                            {/* <ListItem key="Finance" disablePadding>
                                <NavLink to="messages"  onClick={onClose}>
                                    <ListItemButton>
                                        <ListItemIcon><EmailIcon/></ListItemIcon>
                                        <ListItemText primary="Messages"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                            <ListItem key="Store" disablePadding>
                                <NavLink to="store"  onClick={onClose}>
                                    <ListItemButton>
                                        <ListItemIcon><StoreIcon/></ListItemIcon>
                                        <ListItemText primary="Store"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem> */}
                        </List>
                    </Box>

                </Box>
            </Scrollbar>

        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        borderRightColor: 'divider',
                        borderRightStyle: 'solid',
                        borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
                        color: '#FFFFFF',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
            }}
            sx={{zIndex: (theme) => theme.zIndex.appBar + 100}}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
