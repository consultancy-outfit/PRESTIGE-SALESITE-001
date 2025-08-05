import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  BuiltInSecurityImage,
  DeveloperReadyImage,
  FullyScalableImage,
} from "../../assets";
import Image from "next/image";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const HomeThirdSection = () => {
  const data = [
    {
      id: 1,
      image: BuiltInSecurityImage,
      title: "Built-in Security",
      heading: "Bank-Grade Protection",
      description:
        "Security is our top priority. We never store login credentials and use bank-level encryption and secure APIs to protect every data request and payment. We’re fully aligned with FCA, GDPR, and PSD2 standards, giving your customers total confidence.",
      initialX: -50,
    },
    {
      id: 2,
      image: DeveloperReadyImage,
      title: "Developer Ready",
      heading: "Easy API Integration",
      description:
        "Get started fast with clean, well-documented APIs, test environments, and responsive support—designed for startups and enterprises alike.",
      initialX: 100,
    },
    {
      id: 3,
      image: FullyScalableImage,
      title: "Fully Scalable",
      heading: "Built for Growth",
      description:
        "Whether you're processing hundreds or millions of transactions, our cloud-based infrastructure grows with your business. Scale without limits while maintaining peak performance, uptime, and access to deep financial data insights that unlock new revenue opportunities.",
      initialX: -50,
    },
  ];

  return (
    <SlideUpInView initialY={-80}>
      <Stack
        spacing={8}
        alignItems="center"
        px={{ lg: 4, xs: 3 }}
        py={8}
        sx={{ backgroundColor: "#F2F5F7" }}
      >
        <Stack
          sx={{ width: { lg: "90%", xs: "100%" }, color: "#03020C" }}
          spacing={2}
        >
          <Typography
            textAlign="left"
            fontSize={{ md: "3.625rem", xs: "1.8rem" }}
            fontWeight={500}
            fontFamily="Inter"
            color="#000"
          >
            Who We Serve
          </Typography>
          <Typography
            textAlign="left"
            fontSize={"1.25rem"}
            fontWeight={500}
            fontFamily="Inter"
            color="#454745"
            sx={{ width: "40%" }}
          >
            {`From disruptive startups to global-scale platforms, Prestige empowers diverse organisations across the financial ecosystem. Whether you're launching, scaling, or transforming  we meet you where you are.`}
          </Typography>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default HomeThirdSection;
