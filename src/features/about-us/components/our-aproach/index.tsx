"use client";

import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AproachImageOne, AproachImageTwo } from "../../assets";
import IconTick from "@/assets/images/common/images/icon-tick";

const data = [
  "Go beyond transactions with enriched data, scoring, and insights",
  "Intelligent systems that learn, adapt, and inform smarter decision-making",
  "Embedded compliance: built-in safeguards for onboarding, identity, and PSD2",
  "Reliability at scale: trusted by startups, enterprises, and institutions alike",
];

const OurApproachCombined: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#080808",
        color: "white",
        py: { xs: 4, md: 6, lg: 10 },
        px: { xs: 2, md: 4, lg: 10 },
      }}
    >
      {/* First Section */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={"center"}
        gap={4}
        sx={{ mb: { xs: 8, md: 12 } }}
      >
        {/* Text Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography
            fontSize="1.125rem"
            fontWeight={500}
            fontFamily="Inter"
            color="#ffffff"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#C3F53C",
              mb: 2,
            }}
            variant="subtitle2"
          >
            Our Approach
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3.652rem" },
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#C3F53C",
              fontFamily: "Inter",
              mb: 2,
            }}
          >
            Modular Compliant Designed for high performance
          </Typography>
          <Typography
            variant="subtitle2"
            fontFamily="Inter"
            sx={{ color: "#fff", lineHeight: 1.6 }}
          >
            {`Prestige delivers modular fintech infrastructure tailored to
              modern financial ecosystems. Whether you're building a neobank,
              scaling an accounting platform, or launching a wallet app, our
              APIs and tools integrate effortlessly, grow with you, and meet the
              highest compliance standards. Every product we offer is
              purpose-built for flexibility, scalability, and confidence — because
              every decision matters.`}
          </Typography>
        </Grid>

        {/* Image Column */}
        <Grid size={{ md: 4, xs: 12 }}>
          <Box
            sx={{
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4 / 3",
            }}
          >
            <Image
              src={AproachImageOne}
              alt="Performance Analysis"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Second Section */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={"center"}
        gap={4}
      >
        {/* Image Column */}
        <Grid size={{ md: 4, xs: 12 }}>
          <Box
            sx={{
              width: "100%",
              height: 'auto',
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "1 / 1",
            }}
          >
            <Image
              src={AproachImageTwo}
              alt="Digital Transfer"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* Text & List Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3.652rem" },
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#C3F53C",
              fontFamily: "Inter",
              mb: 2,
            }}
          >
            What Sets Us Apart <br />
            <Box component="span" sx={{ color: "#fff" }}>
              Not just fintech. Fintech with foresight
            </Box>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "#fff", lineHeight: 1.6, mb: 3 }}
          >
            Prestige combines real-time financial tools with advanced analytics
            and regulatory-grade trust mechanisms.
          </Typography>

          {data.map((item, index) => (
            <HoverScaleUpDown scale={1.1} key={index}>
              <Stack direction="row" alignItems="center" spacing={2} mb={1.5}>
                <IconTick />
                <Typography fontSize="1.125rem" fontFamily="Inter" color="#fff">
                  {item}
                </Typography>
              </Stack>
            </HoverScaleUpDown>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurApproachCombined;
