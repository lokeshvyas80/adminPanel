import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RemoveIcon from '@mui/icons-material/Remove';
// import '../../../WebLayout/Footer/style.scss'
import {useMediaQuery} from "@mui/material";

function Footer(){
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        noSsr: true
    });

    return (
        <footer style={{
            ...(lgUp === true && {
                marginLeft: '280px'
            })
        }} id="footer" >
            <Container maxWidth="md" className="menu_section" sx={{height:{xs:"16rem", sm:"12rem"}}}>
                <Grid container spacing={2} columns={18} className="">
                    <Grid item sm={6} xs={12}>
                        <Typography className="grey_title">
                            Adzwall LLC <br/>
                            info@adzwall.com
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <Typography
                            variant="h5"
                            className="grey_title"
                        >
                            Legal
                        </Typography>
                        <List >
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Terms & Conditions" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Contact Us" />
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography
                            variant="h5"
                            className="grey_title"
                        >
                            Social
                        </Typography>
                        <List >
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Instagram" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Linkedin" />
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
                <div className="hr_line" />
                <Grid container spacing={2} columns={16}>
                    <Grid item sm={16} className="copyRight">
                        All Rights Reserved.
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
export default Footer;