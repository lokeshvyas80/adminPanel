import React from 'react'
import Container from '@mui/material/Container';
import Helmet from 'react-helmet'

function Overview(){

    return (

        <React.Fragment>
            <Helmet>
                <title>Admin</title>
            </Helmet>
            <Container maxWidth="lg">
                <h4>Welcome to admin panel.</h4>
            </Container>

        </React.Fragment>

    )
}
export default Overview;