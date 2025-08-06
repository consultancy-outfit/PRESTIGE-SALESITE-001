"use client";

import React from "react";
import { Box, Stack, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import { AproachImageOne, AproachImageTwo } from "../../assets";

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
            <Typography variant="subtitle1" sx={{ color: "success.light", fontWeight: 700, mb: 1 }}>
              Our Approach
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Modular Compliant Designed for high performance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Prestige delivers modular fintech infrastructure tailored to modern financial ecosystems.
              Whether you're building a neobank, scaling an accounting platform, or launching a wallet app,
              our APIs and tools integrate effortlessly, grow with you, and meet the highest compliance
              standards. Every product we offer is purpose-built for flexibility, scalability, and confidence —
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
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              What Sets Us Apart <br />
              <Box component="span" sx={{ color: "success.light" }}>
                Not just fintech. Fintech with foresight
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Prestige combines real-time financial tools with advanced analytics and regulatory-grade trust mechanisms.
            </Typography>
            <List sx={{ textAlign: "left", px: { xs: 0, sm: 4, md: 0 } }}>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: "36px", color: "success.main" }}>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Go beyond transactions with enriched data, scoring, and insights" />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: "36px", color: "success.main" }}>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Intelligent systems that learn, adapt, and inform smarter decision-making" />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: "36px", color: "success.main" }}>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Embedded compliance: built-in safeguards for onboarding, identity, and PSD2" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "36px", color: "success.main" }}>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Reliability at scale: trusted by startups, enterprises, and institutions alike" />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default OurApproachCombined;
