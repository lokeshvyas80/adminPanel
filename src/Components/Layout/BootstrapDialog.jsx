import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { 
    field: "id", 
    headerName: "ID", 
    width: 70 
  },
  { 
    field: "tableNo", 
    headerName: "Table No", 
  },
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "billAmount",
    headerName: "Bill Amount",
  },
  {
    field: "time",
    headerName: "Time",
  },
];

const rows = [
  { id: 1, tableNo: "102", name: "Dummy", billAmount: 3500 , time: "7PM" },
];



function BootstrapDialog({ open, handleClose }) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "900px",  // Set your width here
        },
      },
    }}
    >
      <DialogTitle>{"Book Table No. 2"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {/* <Container> */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {[0, 1, 2, 3].map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <ListItem
                          key={value}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(value)}
                              checked={checked.indexOf(value) !== -1}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemText
                              id={labelId}
                              primary={`Line item ${value + 1}`}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ height: 400, width: "100%" }}>
                  <Typography>
                    Add Items
                  </Typography>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                    />
                  </div>
                </Grid>
              </Grid>
            </Box>
          {/* </Container> */}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BootstrapDialog;
