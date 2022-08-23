import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { fontWeight } from "@mui/system";

const Detail = ({ exercisesDetail }) => {
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: exercisesDetail.bodyPart,
    },
    {
      icon: TargetImage,
      name: exercisesDetail.target,
    },
    {
      icon: EquipmentImage,
      name: exercisesDetail.equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" } }}
      p="20px"
      alignItems="center"
    >
      <img
        src={exercisesDetail.gifUrl}
        alt={exercisesDetail.name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography  sx={{color:"#D4Af37"}} variant="h3" textTransform="capitalize">
          {exercisesDetail.name}
        </Typography>
        <Typography  sx={{color:"#fff"}} variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ color: "#D4Af37", fontWeight: "bold" }}>
            {exercisesDetail.name}
          </span>{" "}
          is one of the best exercises to target your{" "}
          <span style={{ color: "#D4Af37", fontWeight: "bold" }}>
            {exercisesDetail.target}
          </span>
          . It will help you improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#363131 ",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" }, color:"#D4Af37"}}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
