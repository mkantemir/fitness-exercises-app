import React from 'react'
import {Box,Button,Stack,Typography} from "@mui/material"
import HeroBannerImage from "../assets/images/banner.png"
import HeroBannerImage2 from "../assets/images/hero-banner-2.jpg"
import HeroBannerImage3 from "../assets/images/hero-banner.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg:"212px", xs:"70px"}, ml:{sm:"50px"}}} position="relative" p="20px" >
        <Typography color="#D4Af37" fontWeight="600px" fontSize="20px">
            Fitness Club
        </Typography>
        <Typography color="#fff" fontWeight={700} sx={{fontSize:{lg:"44px", xs:"40px"}}} mb="23px" mt="30px">Sweat, Smile <br/> and Repeat</Typography>
        <Typography color="#fff" fontSize={22} lineHeight="35px" mb={4} >Check out most effective exercises</Typography>
        <Button variant='contained' color="error" href="#exercises" sx={{backgroundColor:"#D4Af37", padding:"15px"}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#D4Af37" sx={{opacity:0.4, display:{lg:'block', xs:"none"}}} fontSize="200px">Exercises</Typography>
        <img src={HeroBannerImage3} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner