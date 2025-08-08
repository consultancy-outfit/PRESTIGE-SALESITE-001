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
          variant="subtitle2"
          color={"primary.main"}
          customStyles={{ textDecoration: "underline", mt: 1 }}
        >
          GetStarted
        </CustomText>
      </Box>
      <Box
        textAlign={"center"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <HeadingText
          color={"common.white"}
          fontWeight={"fontWeightNormal"}
          variant="h2"
          customStyles={{ width: { lg: "50%" } }}
        >
          Begin Your Journey with Prestige
        </HeadingText>
        <SubHeadingText
          color={"common.white"}
          fontWeight={"fontWeightThin"}
          customStyles={{ width: { lg: "60%" } }}
        >
          Join thousands using secure, real-time financial access. Whether
          you're a developer, fintech business, or individual — our platform
          helps you connect, innovate, and thrive.
        </SubHeadingText>
      </Box>
    </Box>
  );
};

export default Hero;
