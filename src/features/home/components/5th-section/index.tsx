/* eslint-disable react/jsx-key */
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { WhyChoosePrestigeIcon, WhyChoosePrestigeImage } from "../../assets";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

const WhyChoosePrestigeHome = () => {
  const data = [
    "Unified API Architecture",
    "Enterprise-Grade Compliance",
    "Real-Time Intelligence",
    "Embedded Finance Flexibility",
    "Developer-First Experience",
    "Modular by Design",
    "Built for Scale",
  ];
  return (
    <ScaleInView initialScale={0.5}>
      <Stack
        spacing={8}
        px={{ lg: 20, xs: 5 }}
        py={8}
        sx={{ backgroundColor: "#080808" }}
      >
        <Stack
          sx={{ color: "#03020C" }}
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-evenly"
          spacing={{ md: 15, sm: 10, xs: 3 }}
        >
          <Stack>
            <Image
              src={WhyChoosePrestigeImage}
              alt=""
              style={{ width: "100%" }}
            />
          </Stack>
          <Stack textAlign="left" spacing={2}>
            <Stack textAlign="left">
              <Image src={WhyChoosePrestigeIcon} alt="Icon" />
            </Stack>
            <Typography
              textAlign="left"
              fontSize={{ md: "3.625rem", xs: "2.5rem" }}
              fontWeight={500}
              fontFamily="Inter"
              color="#fff"
            >
              Why Choose Prestige
            </Typography>
            <Typography
              textAlign="left"
              fontSize="1.125rem"
              fontWeight={500}
              fontFamily="Inter"
              color="#fff"
              sx={{ width: { lg: "80%", xs: "100%" } }}
            >
              A Platform Built for Financial Excellence
            </Typography>
            <Typography
              textAlign="left"
              fontSize="1.125rem"
              fontWeight={500}
              fontFamily="Inter"
              color="#fff"
              sx={{ width: { lg: "80%", xs: "100%" } }}
            >
              Prestige isn’t just another Open Banking provide. We’re your
              strategic infrastructure partner. Here’s what sets us apart:{" "}
            </Typography>
            {data?.map((items) => (
              <HoverScaleUpDown scale={1.1}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <DoneRoundedIcon
                    sx={{
                      background: "#C3F53C",
                      width: "28px",
                      height: "28px",

                      borderRadius: "50%",
                      p: 0.6,
                    }}
                  />
                  <Typography
                    textAlign="left"
                    fontSize="1.125rem"
                    fontFamily="Inter"
                    color="#DFDFDF"
                  >
                    {items}
                  </Typography>
                </Stack>
              </HoverScaleUpDown>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </ScaleInView>
  );
};

export default WhyChoosePrestigeHome;
