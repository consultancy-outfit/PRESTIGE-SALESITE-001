"use client";

import IconAboutUS from "@/assets/images/common/images/icon-aboutus";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HeroImage } from "../../assets";
import { RealMoneyChooseUsIcon } from "../../assets/icons";

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#010101",
        p: { xs: 2, sm: 6, lg: 8 },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconAboutUS />
              <Typography
                variant="subtitle2"
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
              variant="h3"
              fontWeight={600}
              fontFamily="Inter"
              sx={{
                color: "common.white",
                maxWidth: 600
              }}
            >
              Where Intelligence Meets Integrity
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="body1"
              sx={{ color: "common.white", maxWidth: 650 }}
              fontFamily="Inter"
            >
              Prestige empowers financial organisations with intelligent,
              modular tools that simplify complexity, ensure compliance, and
              unlock actionable insight.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="body1"
              sx={{ color: "common.white", maxWidth: 650 }}
              fontFamily="Inter"
            >
              We deliver precision-built infrastructure for businesses who
              demand more from their data, their partners, and their platforms.
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
                  fontFamily: "Inter",
                  border: "1px solid #ffff",
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

        <Grid size={{ xs: 12, md: 5 }}>
          <ScaleInView>
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
          </ScaleInView>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
