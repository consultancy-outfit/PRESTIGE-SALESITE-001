/* eslint-disable react/jsx-key */
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { SecurityAndRegulatoryReadinessImage } from "../../assets";
const SecurityAndRegulatoryReadinessHome = () => {
  const data = [
    "PSD2 & FCA Compliant (UK & EU)",
    " End-to-End Data Encryption",
    "Consent-First Architecture",
    "Bank-Level Audit & Monitoring",
  ];
  return (
    <SlideUpInView>
      <Stack
        spacing={8}
        px={{ lg: 20, xs: 3 }}
        py={8}
        sx={{ backgroundColor: "#fff" }}
      >
        <Stack
          sx={{ color: "#03020C" }}
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
        >
          <Stack spacing={2}>
            <Typography
              textAlign="left"
              fontSize={{ md: "3.625rem", xs: "2.5rem" }}
              fontWeight={500}
              fontFamily="Inter"
              color="#000"
              sx={{
                borderTop: "3px solid #C3F53C",
              }}
            >
              Security & Regulatory Readiness
            </Typography>
            <Typography
              textAlign="left"
              fontSize="1.125rem"
              fontWeight={500}
              fontFamily="Inter"
              color="#454745"
              sx={{ width: { lg: "80%", xs: "100%" } }}
            >
              Prestige is built from the ground up to meet enterprise-grade
              compliance and security needs.{" "}
            </Typography>
            {data?.map((items) => (
              <HoverScaleUpDown scale={1.1}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <DoneRoundedIcon
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
                    color="#454745"
                  >
                    {items}
                  </Typography>
                </Stack>
              </HoverScaleUpDown>
            ))}
          </Stack>
          <Stack width={"100%"}>
            <HoverScaleUpDown>
              <Image
                src={SecurityAndRegulatoryReadinessImage}
                alt="Feature Image"
                style={{ width: "100%" }}
              />
            </HoverScaleUpDown>
          </Stack>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default SecurityAndRegulatoryReadinessHome;
