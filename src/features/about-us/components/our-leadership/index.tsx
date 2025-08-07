"use client";

import React from "react";
import Image from "next/image";
import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import {
  leadershipImgOne,
  leadershipImgTwo,
  leadershipImgThree,
} from "../../assets";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import { useRouter } from "next/navigation";
import { pro9 } from "@/assets/images/common/images";

const OurLeadership: React.FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: "24px", md: "48px", lg: "80px" },
        color: "#080808",
      }}
    >
      <Stack gap={2} alignItems={"center"} justifyContent={"center"}>
        <Typography
          variant="body1"
          color="#080808"
          fontSize={18}
          sx={{
            borderBottom: "2px solid #C3F53C",
          }}
        >
          Leadership & Values
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          color="#080808"
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
            color: "#444444",
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
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                backgroundColor: "#080808",
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
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography
                variant="h6"
                color="#C3F53C"
                fontSize={24}
                fontWeight={500}
              >
                1. Security-First Engineering
              </Typography>

              <Typography
                variant="body2"
                color="#ffff"
                fontSize={18}
                fontWeight={400}
                sx={{ lineHeight: 1.6 }}
              >
                Your data is protected by industry-grade encryption and
                continuous compliance frameworks.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                backgroundColor: "#080808",
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
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography
                variant="h6"
                color="#C3F53C"
                fontSize={24}
                fontWeight={500}
              >
                2. Performance-Driven Design
              </Typography>

              <Typography
                variant="body2"
                color="#ffff"
                fontSize={18}
                fontWeight={400}
                sx={{ lineHeight: 1.6 }}
              >
                Our systems are scalable, reliable, and built for high-speed
                financial operations.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                backgroundColor: "#080808",
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
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography
                variant="h6"
                color="#C3F53C"
                fontSize={24}
                fontWeight={500}
              >
                3. Purposeful Innovation
              </Typography>

              <Typography
                variant="body2"
                color="#ffff"
                fontSize={18}
                fontWeight={400}
                sx={{ lineHeight: 1.6 }}
              >
                {` We don't follow trends blindly. We set the standard for what
                modern finance should be.`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          sx={{
            backgroundColor: "#080808",
            color: "white",
            p: { xs: 4, md: 6 },
            borderRadius: "16px",
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Stack gap={2} alignItems={"flex-start"}>
              <Typography
                variant="body1"
                color="#C3F53C"
                fontSize={18}
                sx={{
                  borderBottom: "2px solid #C3F53C",
                }}
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
                <Box component="span" sx={{ color: "#C3F53C" }}>
                  Build with confidence
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color="#ffff"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {`Start strong with an infrastructure that's fit for your first
              transaction — whether you're a platform, accelerator, or fintech
              startup. We have the infrastructure to power your growth.`}
              </Typography>

              <Button
                variant="contained"
                fullWidth={false}
                sx={{
                  color: "#010101",
                  background: "#C3F53C",
                  borderRadius: "2.5rem",
                  px: 3,
                  py: 1,
                  fontSize: "1.125rem",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  minWidth: "121px",
                }}
                endIcon={<EastSharpIcon />}
                onClick={() => router.push("/get-started")}
              >
                Register now
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 600 },
                backgroundImage: `url(${pro9.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                boxShadow: 3,
                display: "block",
                margin: { xs: "auto", md: "unset" },
                py: 2,
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OurLeadership;
