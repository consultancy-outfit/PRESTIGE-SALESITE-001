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
import { HeroImage } from "../../assets";
import { AboutIcon, RealMoneyChooseUsIcon } from "../../assets/icons";

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#010101",
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
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
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
                  <AboutIcon />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  About Us
                </Typography>
              </Stack>

              {/* Heading */}
              <Typography
                variant="h1"
                sx={{
                  maxWidth: 600,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                  lineHeight: 1.05,
                  fontWeight: 700,
                  color: "common.white",
                }}
              >
                Where Intelligence Meets Integrity
              </Typography>

              {/* Paragraph 1 */}
              <Typography
                variant="body1"
                sx={{ color: "common.white", maxWidth: 600 }}
              >
                Prestige empowers financial organisations with intelligent,
                modular tools that simplify complexity, ensure compliance, and
                unlock actionable insight.
              </Typography>

              {/* Paragraph 2 */}
              <Typography
                variant="body1"
                sx={{ color: "common.white", maxWidth: 600 }}
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
                  startIcon={<RealMoneyChooseUsIcon />}
                  sx={{
                    backgroundColor: "#1C1C1C",
                    color: "#FFFFFF",
                    borderRadius: "30px",
                    textTransform: "none",
                    padding: "1.1em 2.5em",
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#2C2C2C",
                      boxShadow: "none",
                    },
                  }}
                >
                  Secure Transfers
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* RIGHT: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
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
