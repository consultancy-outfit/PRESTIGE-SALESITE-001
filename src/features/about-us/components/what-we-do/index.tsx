import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  BusinessCenterOutlined,
  VerifiedUserOutlined,
  LightbulbOutlined,
  PeopleOutlined,
  LockOutlined,
  FingerprintOutlined,
  GavelOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const securityFeatures = [
  {
    icon: <LockOutlined sx={{ fontSize: 24, color: "#16A34A" }} />,
    title: "Protected",
    description:
      "Your money is held securely in a ring-fenced account. You can access your funds whenever you like, and they're never invested or lent to anyone else.",
  },
  {
    icon: <FingerprintOutlined sx={{ fontSize: 24, color: "#16A34A" }} />,
    title: "Authenticated",
    description:
      "Your data is stored and protected by two and multiple layers of authentication. Two-factor authentication is enabled on your account for added security.",
  },
  {
    icon: <GavelOutlined sx={{ fontSize: 24, color: "#16A34A" }} />,
    title: "Licensed and Regulated",
    description:
      "Payments comply with regulations and industry standards in the many countries around the world where we operate.",
  },
];

const deliverFeatures = [
  {
    icon: <BusinessCenterOutlined sx={{ fontSize: 40, color: "#16A34A" }} />,
    title: "Enterprise-Ready",
    description: "Built for scale, security, and real-world complexity.",
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 40, color: "#16A34A" }} />,
    title: "Trust by Design",
    description: "Compliant, secure, and aligned with PSD2/PCI DSS standards.",
  },
  {
    icon: <LightbulbOutlined sx={{ fontSize: 40, color: "#16A34A" }} />,
    title: "Insight-Driven",
    description: "Data isn't just collected — it's transformed into opportunity.",
  },
  {
    icon: <PeopleOutlined sx={{ fontSize: 40, color: "#16A34A" }} />,
    title: "User-Centric",
    description: "We put stability and experience at the heart of every product.",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <Box sx={{ fontFamily: "Inter, sans-serif" }}>
      {/* Bank-level Security Section */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          py: { xs: 8, sm: 12, lg: 16 },
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: { xs: 6, sm: 8, md: 12 },
              textAlign: { xs: "center", lg: "left" },
              fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" },
              lineHeight: { xs: "2.25rem", sm: "2.5rem", md: 1 },
            }}
          >
            Bank-level Security
          </Typography>

<Grid container spacing={6} alignItems="center">
  {/* Features List */}
  <Grid size={{xs:12,lg:6}}>
    <Grid container spacing={4}>
      {securityFeatures.map((feature, index) => (
        <Grid size={12} key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box sx={{ flexShrink: 0, mt: 0.25 }}>{feature.icon}</Box>
            <Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                  fontSize: { xs: "1.125rem", sm: "1.25rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Grid>

  {/* Large Shield Icon */}
  <Grid size={{xs:12,lg:6}}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          height: { xs: 256, sm: 320, lg: 384 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#16A34A",
          borderRadius: "50%",
          boxShadow: "0 0 50px rgba(22, 163, 74, 0.7)",
        }}
        aria-hidden
      >
        <SecurityOutlined
          sx={{
            fontSize: { xs: 120, sm: 160, md: 200 },
            color: "white",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            border: "2px dashed rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            transform: "scale(1.2)",
          }}
        />
      </Box>
    </Box>
  </Grid>
</Grid>

        </Box>
      </Box>

      {/* What We Deliver Section */}
      <Box
        sx={{
          py: { xs: 8, sm: 12, lg: 16 },
          px: { xs: 2, sm: 3, lg: 4 },
          backgroundColor: "grey.50",
        }}
      >
        <Box sx={{ maxWidth: "1280px", mx: "auto", textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              color: "success.main",
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              letterSpacing: "0.1em",
            }}
          >
            What We Deliver
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "grey.900",
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
              <Grid size={{xs:12,lg:6}}key={index}>
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
                      sx={{
                        color: "grey.900",
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: "1.125rem", sm: "1.25rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "grey.600",
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
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
