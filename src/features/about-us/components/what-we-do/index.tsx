import { pro10 } from "@/assets/images/common/images";
import Iconab1 from "@/assets/images/common/images/icon-ab1";
import Iconab2 from "@/assets/images/common/images/icon-ab2";
import Iconab3 from "@/assets/images/common/images/icon-ab3";
import IconAb4 from "@/assets/images/common/images/icon-ab4";
import Iconab6 from "@/assets/images/common/images/icon-ab5";
import Iconab7 from "@/assets/images/common/images/icon-ab7";
import Iconab8 from "@/assets/images/common/images/icon-ab9";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const securityFeatures = [
  {
    icon: Iconab1,
    title: "Protected",
    description:
      "Your money is held securely in a ring-fenced account. You can access your funds whenever you like, and they're never invested or lent to anyone else.",
  },
  {
    icon: Iconab2,
    title: "Authenticated",
    description:
      "Your data is stored and protected by two and multiple layers of authentication. Two-factor authentication is enabled on your account for added security.",
  },
  {
    icon: Iconab3,
    title: "Licensed and Regulated",
    description:
      "Payments comply with regulations and industry standards in the many countries around the world where we operate.",
  },
];

const deliverFeatures = [
  {
    icon: <IconAb4 sx={{ fontSize: 40 }} />,
    title: "Enterprise-Ready",
    description: "Built for scale, security, and real-world complexity.",
  },
  {
    icon: <Iconab6 sx={{ fontSize: 40 }} />,
    title: "Trust by Design",
    description: "Compliant, secure, and aligned with PSD2/PCI DSS standards.",
  },
  {
    icon: <Iconab7 sx={{ fontSize: 40 }} />,
    title: "Insight-Driven",
    description:
      "Data isn't just collected — it's transformed into opportunity.",
  },
  {
    icon: <Iconab8 sx={{ fontSize: 40 }} />,
    title: "User-Centric",
    description:
      "We put stability and experience at the heart of every product.",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <Box sx={{ fontFamily: "Inter, sans-serif" }}>
      {/* Bank-level Security Section */}
      <Container
        maxWidth="xl"
        sx={{
          pt: 5,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="#FFFFFF"
          sx={{
            fontWeight: 800,
          }}
        >
          <Box component="span" sx={{ color: "#C3F53C" }}>
            Bank-level
          </Box>{" "}
          Security
        </Typography>

        <Grid container>
          {/* Features List */}
          <Grid size={{ xs: 12, lg: 6 }} alignItems={"center"}>
            <Stack mt={5} gap={3}>
              {securityFeatures.map((feature, index) => (
                <Stack
                  key={index}
                  flexDirection={"row"}
                  alignItems="flex-start"
                  gap={2}
                >
                  <feature.icon sx={{ fontSize: "40px" }} />
                  <Stack key={index} gap={1}>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      fontSize={24}
                      color="#FFFFFF"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={400}
                      fontSize={18}
                      color="#FFFFFF"
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Large Shield Icon */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack alignItems={"center"} width={"100%"}>
              <Box
                sx={{
                  width: "100%",
                  height: 600,
                  backgroundImage: `url(${pro10.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  display: "block",
                  margin: { xs: "auto", md: "unset" },
                  py: 2,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* What We Deliver Section */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100%",
          pb: { xs: 8 },
          pt: 5,
          px: { xs: 3, lg: 7 },
        }}
      >
        <Stack alignItems={"center"} gap={2} sx={{ mx: "auto" }}>
          <Typography
            variant="body1"
            color="#080808"
            fontSize={18}
            sx={{
              borderBottom: "2px solid #C3F53C",
            }}
          >
            Join the Prestige Network
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "#080808",
              fontWeight: 800,
              mb: { xs: 6, sm: 8, md: 12 },
              fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" },
              lineHeight: { xs: "2.25rem", sm: "2.5rem", md: 1 },
            }}
          >
            Intelligent Financial Products for Confident Decisions
          </Typography>

          {/* Feature Cards Grid — xs 12 / md 6 (2 columns from md and up).
              You asked "start 6 by 6 at xs 12" — here xs=12, sm=6 so it becomes 2-col from sm.
              If you prefer 2-col only from md, change sm={6} to md={6}. */}
          <Grid container spacing={4} justifyContent="center">
            {deliverFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, lg: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    height: "100%",
                    backgroundColor: "white",
                    border: "1px solid",
                    borderColor: "grey.200",
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>{feature.icon}</Box>

                  <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      color="#080808"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: "1.125rem", sm: "1.25rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#454745"
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
