"use client";

import React from "react";
import Image from "next/image";
import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import {
  leadershipImgOne,
  leadershipImgTwo,
  leadershipImgThree,
} from "../../assets";

const OurLeadership: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: "24px", md: "48px", lg: "80px" },
        color: "#111827",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 2,
          textAlign: "center",
          mb: { xs: 8, md: 12 },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "success.main", fontWeight: 700, mb: 1 }}
        >
          Leadership & Values
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
          Leading with trust. Innovating with purpose.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.6,
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
          }}
        >
          Prestige is built on the belief that financial systems should be both
          powerful and principled. Our values drive our innovation: every
          service is crafted with trust, transparency, and intelligence at its
          core.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{xs:12, md:6, lg:4}}>
            <Box
              sx={{
                backgroundColor: "#111827",
                color: "white",
                p: 4,
                borderRadius: "16px",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Image
                  src={leadershipImgOne}
                  alt="Security Icon"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                1. Security-First Engineering
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Your data is protected by industry-grade encryption and
                continuous compliance frameworks.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{xs:12, md:6, lg:4}}>
            <Box
              sx={{
                backgroundColor: "#111827",
                color: "white",
                p: 4,
                borderRadius: "16px",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Image
                  src={leadershipImgTwo}
                  alt="Performance Icon"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                2. Performance-Driven Design
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Our systems are scalable, reliable, and built for high-speed
                financial operations.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{xs:12, md:6, lg:4}}>
            <Box
              sx={{
                backgroundColor: "#111827",
                color: "white",
                p: 4,
                borderRadius: "16px",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Image
                  src={leadershipImgThree}
                  alt="Innovation Icon"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                3. Purposeful Innovation
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                We don't follow trends blindly. We set the standard for what
                modern finance should be.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          sx={{
            backgroundColor: "#111827",
            color: "white",
            p: { xs: 4, md: 6 },
            borderRadius: "16px",
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "success.main", fontWeight: 700, mb: 1 }}
            >
              Join the Prestige Network
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Partner with purpose <br />
              <Box component="span" sx={{ color: "success.light" }}>
                Build with confidence
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
              Start strong with an infrastructure that's fit for your first
              transaction — whether you're a platform, accelerator, or fintech
              startup. We have the infrastructure to power your growth.
            </Typography>

            <Button variant="contained" color="success" size="large">
              Register now
            </Button>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "6rem", md: "10rem" },
                fontWeight: 800,
                color: "success.main",
                opacity: 0.2,
                lineHeight: 1,
              }}
            >
              0%
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default OurLeadership;
