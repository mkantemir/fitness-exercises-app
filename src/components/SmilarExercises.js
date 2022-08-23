import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"

const SmilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:"60px",xs:"0"}}} ml="20px">
      <Typography sx={{color:"#fff"}} variant='h4' mb={5}>Exercises that target the <span style={{ color: "#D4Af37" }}>same muscle group</span></Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
      {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> :<Loader/>}
      </Stack>

      <Typography sx={{color:"#fff"}} variant='h4' mb={5} mt={15}>Exercises that use the <span style={{ color: "#D4Af37" }}> same equipment</span></Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
      {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> :<Loader/>}
      </Stack>
    </Box>
  )
}

export default SmilarExercises