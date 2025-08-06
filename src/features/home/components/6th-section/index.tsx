/* eslint-disable react/jsx-key */
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
    OurTechStackImage
} from "../../assets";
const OurTechStackHome = () => {
  const data = [
    "ISO 27001-grade security",
    "Open Finance infrastructure",
    "Full auditability",
    "Role-based access controls",
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
          justifyContent="space-evenly"
        >
          <Stack spacing={3}>
            <Typography
              textAlign="left"
              fontSize={{ md: "3.625rem", xs: "2.5rem" }}
              fontWeight={500}
              fontFamily="Inter"
              color="#000"
              sx={{
                borderTop: "3px solid #00C805",
                width: { lg: "70%", xs: "100%" },
              }}
            >
              Our Technology Stack
            </Typography>
            <Typography
              textAlign="left"
              fontSize="1.125rem"
              fontWeight={500}
              fontFamily="Inter"
              color="#454745"
              sx={{ width: { lg: "70%", xs: "100%" } }}
            >
              Prestige is built on robust, cloud-native architecture with speed,
              flexibility, and reliability at the core. We integrate seamlessly
              into your stack with real-time processing, high-availability APIs,
              and built-in compliance logic.
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
                src={OurTechStackImage}
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

export default OurTechStackHome;
