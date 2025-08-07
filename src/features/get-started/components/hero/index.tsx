import { Box } from "@mui/material";
import React from "react";
import { UserIcon } from "../../assets/icons";
import { CustomText } from "@/components/text/custom-text";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";

const Hero = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      px={2}
      py={6}
    >
      <Box display={"flex"} gap={1}>
        <UserIcon />
        <CustomText
          color={"primary.main"}
          customStyles={{ textDecoration: "underline" }}
        >
          GetStarted
        </CustomText>
      </Box>
      <Box textAlign={"center"} sx={{ width: { lg: "40%" } }}>
        <HeadingText color={"common.white"}>
          Begin Your Journey with Prestige
        </HeadingText>
        <SubHeadingText color={"common.white"} fontWeight={"fontWeightThin"}>
          Join thousands using secure, real-time financial access. Whether
          you're a developer, fintech business, or individual — our platform
          helps you connect, innovate, and thrive.
        </SubHeadingText>
      </Box>
    </Box>
  );
};

export default Hero;
