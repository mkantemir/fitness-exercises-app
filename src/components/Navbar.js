import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Logo2 from "../assets/icons/logo-2.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: "100px",  xs:"40px"}, justifyContent:"none"}}>
      <Link to="/">
        <img src={Logo2} alt="logo" style={{width:"200px", height:"auto",margin:"0 5px" }} />
      </Link>
      <Stack direction="row"  gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration:"none", color:"#fff", borderBottom:"3px solid #D4Af37"}}>Home</Link>
        <a href="#exercises" style={{textDecoration:"none", color:"#fff"}}>Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
