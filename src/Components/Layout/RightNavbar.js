import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React, {useRef, useState} from "react";
import {NotificationsPopover} from "./notifications-popover";
import {Box, ButtonBase} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const NotificationsButton = () => {
    const anchorRef = useRef(null);
    const [unread, setUnread] = useState(0);
    const [openPopover, setOpenPopover] = useState(false);

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
                    sx={{ml: 1}}
                    onClick={handleOpenPopover}
                >
                    <Badge
                        color="error"
                        badgeContent={unread}
                    >
                        <NotificationsIcon fontSize="small"/>
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

function RightNavbar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.up('xs')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        color:'rgba(0, 0, 0, 0.54)',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(3)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '0',
                '&:focus': {
                    width: '20ch',
                },
            },
            [theme.breakpoints.up('xs')]: {
                width: '0',
                '&:focus': {
                    width: '15ch',
                },
            },
        },
    }));

    return (
        <React.Fragment>
            <Box sx={{flexGrow: 1}}/>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder=""
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <NotificationsButton/>
            <AccountButton/>
        </React.Fragment>
    )
}

export default RightNavbar;