import React from 'react';
import '../style.scss';
import { Box, Button, Divider, Typography } from '@mui/material';
import BootstrapDialog from '../../../../Components/Layout/BootstrapDialog';

function GroundFloor() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="dashboard_box" pt={6} pb={6} px={4} py={3}>
        <Typography variant='h4' py={1}>
           Ground Floor
        </Typography>
        <Divider />
        <Box pt={2}>
          {['G101', 'G102', 'G103', 'G104', 'G105', 'G106', 'G107', 'G108', 'G109', 'G110', 'G111'].map((text, index)=>(
          <Button 
            color="warning" 
            key={index} 
            className={index % 2 === 0 ? 'groundfloor_btn_second': 'groundfloor_btn_first'}
            onClick={handleClickOpen}
            >
            {text}
            </Button>
          ))}
          <BootstrapDialog open={open} handleClose={handleClose} />
        </Box>

        <Typography variant='h4' py={1} pt={4}>
          First Floor
        </Typography>
        <Divider />
        <Box pt={2}>
        {['F201', 'F202', 'F203', 'F204', 'F205', 'F206', 'F207', 'F208', 'F209', 'F210', 'F211', 'F212', 'F213', 'F214', 'F215', 'F216', 'F217', 'F218'].map((text, index)=>(
          <Button key={index} className={index % 4 === 0 ? 'groundfloor_btn_second': 'groundfloor_btn_first'}>{text}</Button>
          ))}
        </Box>

        <Typography variant='h4' py={1} pt={4}>
        Parcels & Others
        </Typography>
        <Divider />
        <Box pt={2}>
        {['P301'].map((text, index)=>(
          <Button className={index % 2 === 0 ? 'groundfloor_btn_second': 'groundfloor_btn_first'} key={index}>{text}</Button>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default GroundFloor;
