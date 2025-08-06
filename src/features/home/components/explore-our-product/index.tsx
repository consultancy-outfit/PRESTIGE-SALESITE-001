"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { card1, card2, card3, card4 } from "../../assets";

const ExploreOurProductsHome = () => {
  const data = [
    {
      id: 1,
      icon: card1,
      heading: "Data Intelligence & Insights",
      description:
        "Structure raw banking data into clean, usable, categorised insights — ready for forecasting, risk modeling, and smarter financial services",
    },
    {
      id: 2,
      icon: card2,
      heading: "Centspay",
      description:
        "Empower users to save, track, and manage spending in real time — using modern, embedded wallet tools and smart analytics.",
    },
    {
      id: 3,
      icon: card3,
      heading: "Account Access & Connectivity",
      description:
        "Offer users secure, consent-driven access to their financial data. Perfect for onboarding, integrations, and compliance-ready flows.",
    },
    {
      id: 4,
      icon: card4,
      heading: "Payments & Money movement",
      description:
        "Enable real-time transactions, instant wallet-to-wallet transfers, and seamless currency exchange for businesses and consumers.",
    },
  ];
  return (
    <ScaleInView initialScale={0.5}>
      <Stack
        spacing={4}
        alignItems="center"
        pt={{ md: 10, xs: 5 }}
        pb={5}
        sx={{ background: "#fff" }}
      >
        <Typography
          textAlign="center"
          fontSize={{ md: "3.5rem", xs: "2.5rem" }}
          fontWeight={500}
          fontFamily="Inter"
          m="auto"
        >
          Explore Our Product
        </Typography>
        <Typography
          textAlign="center"
          fontSize="1.25rem"
          fontFamily="Inter"
          m="auto"
          color="#454745"
        >
          Prestige offers a connected suite of modular services — each designed
          to solve a critical financial challenge. Combine them to unlock
          performance, automation, insight, and control.
        </Typography>
        <Stack width={{ lg: "70%", xs: "100%" }} px={2}>
          <Grid container spacing={6}>
            {data?.map((items) => (
              <Grid
                size={{ md: 6, xs: 12 }}
                sx={{ display: "flex", justifyContent: "center" }}
                key={items?.id}
              >
                <HoverScaleUpDown scale={1.01}>
                  <Card
                    sx={{
                      minHeight: "37rem",
                      width: "100%",
                      backgroundImage: `url(${items?.icon?.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "none",
                      borderRadius: { md: "20px", xs: "12px" },
                    }}
                  >
                    {/* Text Section */}
                    <Stack
                      px={{ xs: 3, md: 6 }}
                      py={{ xs: 3, md: 4 }}
                      spacing={2}
                    >
                      <Typography
                        textAlign="center"
                        fontSize={{ xs: "1.5rem", md: "2.25rem" }}
                        fontFamily="Inter"
                        fontWeight={500}
                        color="#C3F53C"
                      >
                        {items?.heading}
                      </Typography>
                      <Typography
                        textAlign="center"
                        fontSize={{ xs: "1rem", md: "1.125rem" }}
                        fontFamily="Inter"
                        color="#fff"
                      >
                        {items?.description}
                      </Typography>
                    </Stack>
                  </Card>
                </HoverScaleUpDown>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{
              color: "#010101",
              background: "#C3F53C",
              borderRadius: "2.5rem",
              px: 3,
              py: 1,
              fontSize: "1.125rem",
              fontFamily: "Inter",
              fontWeight: 500,
              width: "fit-content",
            }}
            endIcon={<EastSharpIcon />}
          >
            Explore Our Products
          </Button>
        </Stack>
      </Stack>
    </ScaleInView>
  );
};

export default ExploreOurProductsHome;
