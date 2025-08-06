"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { OurMissionImage } from "../../assets";

const OurMission: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: "24px", md: "48px" },
      }}
    >
      <Stack
        sx={{
          textAlign: "center",
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: 0.6,
            mb: 1,
          }}
        >
          Our Mission
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.25rem", lg: "2.5rem" },
            fontWeight: 700,
            maxWidth: 1000,
            mx: "auto",
            lineHeight: 1.08,
            mb: 2,
          }}
        >
          Precision-built tools for the next generation of finance
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 960,
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Our mission is to enable smarter financial systems through innovation,
          trust, and performance. We help companies unlock deeper insights,
          accelerate transactions, and build trusted relationships with users all
          within a secure, compliant ecosystem. At Prestige, we don't just follow
          the future of finance — we build it.
        </Typography>

        <Box
          sx={{
            mt: 4,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 4",
          }}
        >
          <Image
            src={OurMissionImage}
            alt="Precision-built tools for finance"
            style={{ width: "100%", height: "450px", objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default OurMission;
