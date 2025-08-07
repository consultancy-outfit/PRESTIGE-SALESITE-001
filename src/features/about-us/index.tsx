"use client";

import { Box } from "@mui/material";
import { Hero } from "./components";
import AboutUsList from "./components/about-us-list";
import { RealMoneyMeetTeam } from "./components/real-money-meet-team";
import { WhatWeDoRealMoney } from "./components/what-we-do-real-money";
import { ReadyToGetStarted } from "@/components/ready-to-get-started";

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
          <WhatWeDoRealMoney />
        </Box>
        <Box sx={{ my: 3 }}>
          <AboutUsList />
        </Box>
        <Box sx={{ my: 3 }}>
          <RealMoneyMeetTeam />
        </Box>
        <Box sx={{ my: 3 }}>
          <ReadyToGetStarted />
        </Box>
      </Box>
    </>
  );
};
