import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import GroundFloor from "./GroundFloor";

function Booking() {
  return (
    <div>
      <Container>
        <GroundFloor />
        {/* <Box className="dashboard_box" pt={6} pb={2} px={4} py={3}>
          <Typography variant="h4" py={1}>
            Book now
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth label="Name" id="name" />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth label="Number" id="number" />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth label="Number" id="number" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                fullWidth
                size="large"
                className="green_btn"
                variant="contained"
                color="success"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <div className="hr_line" mt={3} />
        </Box> */}
      </Container>
    </div>
  );
}

export default Booking;
