"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { HeroImage } from "../../assets";

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT: Text content */}
          <Grid size={{xs:12,md:6}}>
            <Stack spacing={3}>
              {/* small pill + About Us */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    p: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupOutlinedIcon sx={{ color: "white", fontSize: 20 }} />
                </Box>

                <Typography
                  variant="body1"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  About Us
                </Typography>
              </Stack>

              {/* Heading */}
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  maxWidth: 600,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                  lineHeight: 1.05,
                  fontWeight: 700,
                }}
              >
                Where Intelligence Meets Integrity
              </Typography>

              {/* Paragraph 1 */}
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 600 }}
              >
                Prestige empowers financial organisations with intelligent,
                modular tools that simplify complexity, ensure compliance, and
                unlock actionable insight.
              </Typography>

              {/* Paragraph 2 */}
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 600 }}
              >
                We deliver precision-built infrastructure for businesses who
                demand more from their data, their partners, and their
                platforms.
              </Typography>

              {/* Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<CheckCircleOutlineIcon />}
                  sx={{
                    backgroundColor: "primary.main",
                    textTransform: "none",
                    py: 1.1,
                    px: 2.5,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Secure Transfers
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* RIGHT: Image */}
          <Grid size={{xs:12,md:6}}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, sm: 360, md: 420 },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 6,
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Image
                src={HeroImage}
                alt="Prestige financial intelligence"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
