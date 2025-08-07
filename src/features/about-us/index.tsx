"use client";

import { ReadyToGetStarted } from "@/components/ready-to-get-started";
import { Box } from "@mui/material";
import { Hero, OurMission } from "./components";
import OurApproachCombined from "./components/our-aproach";
import OurLeadership from "./components/our-leadership";
import WhatWeDo from "./components/what-we-do";

export const AboutUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#010101",
          mb: 4,
        }}
      >
        <Hero />

        <Box sx={{ my: 3 }}>
          <OurMission />
        </Box>
        <Box sx={{ my: 3 }}>
          <OurApproachCombined />
        </Box>
        <Box sx={{ my: 3 }}>
          <OurLeadership />
        </Box>
        <Box sx={{ my: 3 }}>
          <WhatWeDo />
        </Box>
        <Box sx={{ my: 3 }}>
          <ReadyToGetStarted />
        </Box>
      </Box>
    </>
  );
};
