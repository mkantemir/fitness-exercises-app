import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import Logo2 from "../assets/icons/logo-2.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#000">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" >
      <img src={Logo2} alt="logo" style={{ width: '200px', height: 'auto' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '18px', xs: '10px' }, color:"#D4Af37" }} mt="10px" textAlign="center" pb="40px">Made by MK</Typography>
  </Box>
);

export default Footer;