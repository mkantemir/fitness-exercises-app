import { Typography } from "@mui/material";
import { height, Stack, width } from "@mui/system";
import React from "react";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        backgroundColor: "#000",
        borderBottomLeftRadius: "20px",
        width: "180px",
        height: "180px",
        border: bodyPart === item ? "4px solid #D4Af37" : "4px solid #363131",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1750, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPart === "Back" ?Back  : Icon }
        alt="dumbell"
        style={{ width: "50px", height: "50px" }}
      />
      <Typography
        fontSize={20}
        mt="10px"
        fontWeight="bold"
        color="#D4Af37"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
