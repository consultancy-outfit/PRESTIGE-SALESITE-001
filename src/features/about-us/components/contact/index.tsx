"use client";
import React from "react";
import {  Typography, Button, Container, Stack } from "@mui/material";
import EastSharpIcon from "@mui/icons-material/EastSharp";

const ContactUs = () => {
  return (
    <Stack
      spacing={8}
      px={{ lg: 20, xs: 5 }}
      py={8}
      sx={{ backgroundColor: "#080808" }}
    >
      <Stack sx={{ color: "#03020C" }} spacing={2} alignItems="center">
        <Typography
          textAlign="center"
          fontSize="1.125rem"
          fontWeight={500}
          fontFamily="Inter"
          color="#C3F53C"
          sx={{ textDecoration: "underline", textDecorationColor: "#00C805" }}
        >
          Ready to get started?
        </Typography>
        <Typography
          textAlign="center"
          fontSize={{ lg: "3.625rem", xs: "2.5rem" }}
          fontWeight={500}
          fontFamily="Inter"
          color="#fff"
          width={{ lg: "70%", xs: "100%" }}
        >
          “Prestige helps us move faster while staying fully compliant. The data
          quality and API reliability are unmatched.”
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "#010101",
            background: "#C3F53C",
            borderRadius: "2.5rem",
            px: 3,
            py: 2,
            fontFamily: "Inter",
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
          endIcon={<EastSharpIcon />}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContactUs;