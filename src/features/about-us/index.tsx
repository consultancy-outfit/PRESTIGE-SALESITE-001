"use client";

import { Box } from "@mui/material";
import { Hero, OurMission } from "./components";
import OurApproachCombined from "./components/our-aproach";
import OurLeadership from "./components/our-leadership";
import WhatWeDo from "./components/what-we-do";
import ContactUs from "./components/contact-us";
export const AboutUsFeature = () => {
  return (
    <>
      <Box
        
      >
        <Hero/>
        <OurMission/>
        <OurApproachCombined/>
        <OurLeadership/>
        <WhatWeDo/>
        <ContactUs/>
       
      </Box>
    </>
  );
};
