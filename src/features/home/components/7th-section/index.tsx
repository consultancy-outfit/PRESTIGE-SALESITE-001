import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  NexoraLTDImage,
  PixelCloudImage,
  RideFlowImage,
  SyncoraImage,
  TrademixImage,
} from "../../assets";
import Image from "next/image";

import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const CustomerStoriesHome = () => {
  return (
    <SlideUpInView>
      <Stack
        spacing={8}
        px={{ lg: 20, xs: 5 }}
        py={6}
        sx={{ backgroundColor: "#F2F5F7" }}
      >
        <Stack sx={{ color: "#03020C" }} spacing={2}>
          <Typography
            textAlign="left"
            fontSize={{ md: "3.625rem", xs: "2.5rem" }}
            fontWeight={500}
            fontFamily="Inter"
            color="#000"
          >
            Customer stories
          </Typography>
          <Grid container rowGap={5}>
            <Grid size={{ lg: 8, xs: 12 }}>
              <Card
                sx={{
                  background: "#080808",
                  px: 2,
                  py: 4,
                  borderRadius: "2rem",
                  width: { md: "60rem", xs: "24rem" },
                  height: { md: "30rem", xs: "auto" },
                }}
              >
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  alignItems="center"
                >
                  <Typography
                    textAlign="left"
                    fontSize={{ md: "2.5rem", xs: "2rem" }}
                    fontWeight={500}
                    fontFamily="Inter"
                    color="#fff"
                  >
                    Prestige powers world-class companies with intelligent, high
                    performance financial infrastructure.
                  </Typography>
                  <Image
                    src={PixelCloudImage}
                    alt="4 pixel cloud"
                    style={{ width: "100%" }}
                  />
                </Stack>
              </Card>
            </Grid>
            <Grid size={{ lg: 4, xs: 12 }}>
              <Card
                sx={{
                  borderRadius: "2rem",
                  width: "24rem",
                  height: "30rem",
                }}
              >
                <Image src={NexoraLTDImage} alt="Image" />
                <Typography
                  sx={{ p: 3 }}
                  textAlign="left"
                  fontSize="1.5rem"
                  fontWeight={500}
                  fontFamily="Inter"
                >
                  <b>Nexora</b> partnered with Prestige to streamline cross
                  border billing and simplify payments at scale.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ lg: 4, xs: 12 }}>
              <Card
                sx={{
                  borderRadius: "2rem",
                  width: "24rem",
                  height: "30rem",
                }}
              >
                <Image src={RideFlowImage} alt="Image" />
                <Typography
                  sx={{ p: 3 }}
                  textAlign="left"
                  fontSize="1.5rem"
                  fontWeight={500}
                  fontFamily="Inter"
                >
                  <b>RideFlow</b> upgraded its payout system with Prestige,
                  ensuring fast, secure, and seamless payments for its driver
                  network.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ lg: 4, xs: 12 }}>
              <Card
                sx={{
                  borderRadius: "2rem",
                  width: "24rem",
                  height: "30rem",
                }}
              >
                <Image src={SyncoraImage} alt="Image" />
                <Typography
                  sx={{ p: 3 }}
                  textAlign="left"
                  fontSize="1.5rem"
                  fontWeight={500}
                  fontFamily="Inter"
                >
                  <b>Syncora</b> boosted its transaction approval rates by 8% by
                  leveraging Prestige’s intelligent payment authorisation
                  engine.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ lg: 4, xs: 12 }}>
              <Card
                sx={{
                  borderRadius: "2rem",
                  width: "24rem",
                  height: "30rem",
                }}
              >
                <Image src={TrademixImage} alt="Image" />
                <Typography
                  sx={{ p: 3 }}
                  textAlign="left"
                  fontSize="1.5rem"
                  fontWeight={500}
                  fontFamily="Inter"
                >
                  <b>Trademix</b> uses Prestige to strengthen fraud defenses
                  while accelerating transaction authorisations for global
                  customers.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default CustomerStoriesHome;
