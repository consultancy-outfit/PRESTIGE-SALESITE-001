"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AproachImageOne, AproachImageTwo } from "../../assets";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
        backgroundColor: "#111827",
        color: "white",
        padding: { xs: "24px", md: "48px", lg: "80px" },
      }}
    >
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          sx={{ mb: { xs: 8, md: 12 } }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              fontSize={"1.125rem"}
              fontWeight={500}
              fontFamily="Inter"
              color="#ffffff"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#C3F53C",
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
                fontWeight: 700,
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
              sx={{
                color: "#fff",
                lineHeight: 1.6,
              }}
            >
              Prestige delivers modular fintech infrastructure tailored to
              modern financial ecosystems. Whether you're building a neobank,
              scaling an accounting platform, or launching a wallet app, our
              APIs and tools integrate effortlessly, grow with you, and meet the
              highest compliance standards. Every product we offer is
              purpose-built for flexibility, scalability, and confidence —
              because every decision matters.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src={AproachImageOne}
              alt="Performance Analysis"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 1 },
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src={AproachImageTwo}
              alt="Digital Transfer"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3.652rem" },
                fontWeight: 700,
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
              sx={{
                color: "#fff",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Prestige combines real-time financial tools with advanced
              analytics and regulatory-grade trust mechanisms.
            </Typography>

            {/* Replace the static list with the mapped one */}
            {data?.map((item, index) => (
              <HoverScaleUpDown scale={1.1} key={index}>
                <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                  <CheckCircleIcon
                    sx={{
                      background: "#C3F53C",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      p: 0.5,
                    }}
                  />
                  <Typography
                    textAlign="left"
                    fontSize="1.125rem"
                    fontFamily="Inter"
                    color="#fff"
                  >
                    {item}
                  </Typography>
                </Stack>
              </HoverScaleUpDown>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default OurApproachCombined;
