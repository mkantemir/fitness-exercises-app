import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ name, exercisesVideos }) => {
  return (
    <Box sx={{ mt: { lg: "50", xs: "5px" } }} p="20px">
      <Typography sx={{color:"#fff"}} variant="h4" mb="20px">
        Watch{" "}
        <span style={{ color: "#D4Af37", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '30px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exercisesVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '18px', xs: '8px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
