"use client";

import { Button, Stack, Typography } from "@mui/material";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Image from "next/image";
import { HomeHeroSectionImage } from "../../assets";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/routes";

const Hero = () => {
  const router = useRouter();
  return (
    <SlideUpInView>
      <Stack alignItems="center" spacing={2}>
        <Typography
          textAlign="center"
          variant="h3"
          fontWeight={"bold"}
          fontFamily="Inter"
          m="auto"
          color="#fff"
          sx={{ width: { md: "50%", xs: "100%" } }}
        >
          Intelligent Financial Products for Confident Decisions
        </Typography>
        <Typography
          textAlign="center"
          fontSize={{ md: "1.25rem", xs: "1rem" }}
          fontFamily="Inter"
          color="#fff"
          sx={{ width: { md: "45%", xs: "100%" }, m: "auto" }}
        >
          Prestige delivers premium, high-performance financial technology —
          empowering businesses to manage, move, and understand money with
          precision. Our modular suite connects data, identity, payments, and
          automation to bring clarity and control to every financial
          interaction.
        </Typography>
        <Stack
          direction={{ md: "row", xs: "column" }}
          spacing={2}
          textAlign={"center"}
          pb={2}
        >
          <HoverScaleUpDown scale={1.02}>
            <Button
              variant="contained"
              sx={{
                color: "#010101",
                background: "#C3F53C",
                borderRadius: "2.5rem",
                px: "24px",
                py: "8px",
                height: "50px",
                fontSize: "1.125rem",
                fontFamily: "Inter",
                fontWeight: 600,
              }}
              onClick={() => router.push(APP_ROUTES.SERVICES)}
              endIcon={<EastSharpIcon />}
            >
              Explore Our Products
            </Button>
          </HoverScaleUpDown>
          <HoverScaleUpDown scale={1.02}>
            <Button
              variant="outlined"
              sx={{
                color: "#C3F53C",
                borderColor: "#C3F53C",
                borderRadius: "2.5rem",
                px: "24px",
                py: "8px",
                height: "50px",
                fontSize: "1.125rem",
                fontFamily: "Inter",
              }}
              onClick={() => router.push(APP_ROUTES.CONTACT_US)}
              endIcon={<EastSharpIcon />}
            >
              Contact Us
            </Button>
          </HoverScaleUpDown>
        </Stack>
        <Stack sx={{ width: { xs: "100%" } }}>
          <Image
            src={HomeHeroSectionImage}
            alt="Home Hero Section Image"
            style={{ width: "70%", height: "auto", margin: "auto" }}
          />
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default Hero;
