import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    ButtonBase,
    IconButton,
    Toolbar,
    Tooltip
} from '@mui/material';
import {styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { NotificationsPopover } from './notifications-popover';
import { ContentSearchDialog } from './content-search-dialog';
import Button from "@mui/material/Button";
import RightNavbar from "./RightNavbar";

const DashboardNavbarRoot = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottomColor: theme.palette.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    boxShadow: 'none'


}));

const ContentSearchButton = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenSearchDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseSearchDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Tooltip title="Search">
                <IconButton
                    onClick={handleOpenSearchDialog}
                    sx={{ ml: 1 }}
                >
                    <SearchIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <ContentSearchDialog
                onClose={handleCloseSearchDialog}
                open={openDialog}
            />
        </>
    );
};

const AccountButton = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <Box
                component={ButtonBase}

                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: 2
                }}
            >
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
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
                    <MenuItem to="/dashboard/overview" component={RouterLink}>
                        <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                    <MenuItem to="/login" component={RouterLink}>
                        <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                </Menu>
            </Box>

        </>
    );
};

const NotificationsButton = () => {
    const anchorRef = useRef(null);
    const [unread, setUnread] = useState(0);
    const [openPopover, setOpenPopover] = useState(false);
    // Unread notifications should come from a context and be shared with both this component and
    // notifications popover. To simplify the demo, we get it from the popover

    const handleOpenPopover = () => {
        setOpenPopover(true);
    };

    const handleClosePopover = () => {
        setOpenPopover(false);
    };

    const handleUpdateUnread = (value) => {
        setUnread(value);
    };

    return (
        <>
            <Tooltip title="Notifications">
                <IconButton
                    ref={anchorRef}
                    sx={{ ml: 1 }}
                    onClick={handleOpenPopover}
                >
                    <Badge
                        color="error"
                        badgeContent={unread}
                    >
                        <NotificationsIcon fontSize="small" />
                    </Badge>
                </IconButton>
            </Tooltip>
            <NotificationsPopover
                anchorEl={anchorRef.current}
                onClose={handleClosePopover}
                onUpdateUnread={handleUpdateUnread}
                open={openPopover}
            />
        </>
    );
};

export const DashboardNavbar = (props) => {
    const {onOpenSidebar, ...other} = props;

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onOpenSidebar}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon fontSize="small"/>
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="menu_itmes">
                        <Button
                            to="/" component={RouterLink}
                            sx={{ my: 2 }}
                        >
                            Home
                        </Button>
                        <Button
                            to="/" component={RouterLink}
                            sx={{ my: 2 }}
                        >
                            Adz
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                   <RightNavbar />
                </Toolbar>

            </DashboardNavbarRoot>
        </>
    );
};

DashboardNavbar.propTypes = {
    onOpenSidebar: PropTypes.func
};
