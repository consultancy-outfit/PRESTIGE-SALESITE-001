"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { OurMissionImage } from "../../assets";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const OurMission: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: "24px", md: "48px" },
      }}
    >
      <SlideUpInView>
        <Stack
          sx={{
            textAlign: "center",
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          <Typography
            textAlign="center"
            fontSize={"1.125rem"}
            fontWeight={500}
            fontFamily="Inter"
            color="#080808"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#C3F53C",
            }}
          >
            Our Mission
          </Typography>

          <Typography
            variant="h3"
            fontSize={{ md: "3.625rem", xs: "2.5rem" }}
            fontWeight={500}
            fontFamily="Inter"
            color="#080808"
            sx={{
              mt: "19px",
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
            fontSize="1.125rem"
            fontFamily="Inter"
            sx={{
              maxWidth: 960,
              mx: "auto",
              color: "#454745",
              lineHeight: 1.6,
              mb: "24px",
            }}
          >
            Our mission is to enable smarter financial systems through
            innovation, trust, and performance. We help companies unlock deeper
            insights, accelerate transactions, and build trusted relationships
            with users all within a secure, compliant ecosystem. At Prestige, we
            don't just follow the future of finance — we build it.
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
              marginBottom:" 24px",
            }}
          >
            <Image
              src={OurMissionImage}
              alt="Precision-built tools for finance"
              style={{ width: "100%", height: "450px", objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </SlideUpInView>
    </Box>
  );
};

export default OurMission;
