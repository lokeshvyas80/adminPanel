import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from '../../../Components/Layout/dashboard-navbar';
import { DashboardSidebar } from '../../../Components/Layout/dashboard-sidebar';
import { Box } from '@mui/material';
import {Outlet} from "react-router-dom";
import Footer from "./Footer/index";

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const DashboardLayout = (props) => {
    const { children } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%',
                    }}

                >
                    <Box
                        component="main"
                        sx={{

                            paddingBottom: {sm:'13rem', xs:'17rem'},

                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />

            <DashboardSidebar
                onClose={() => setIsSidebarOpen(false)}
                open={isSidebarOpen}
            />
            {/* <Footer /> */}
        </>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node
};
export default DashboardLayout;