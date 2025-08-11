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
        px={{ lg: 20, md: 10, sm: 5, xs: 3 }}
        py={{ md: 6, xs: 4 }}
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

          <Grid container spacing={4}>
            {/* Large Feature Card */}
            <Grid size={{ lg: 8, xs: 12 }}>
              <Card
                sx={{
                  background: "#080808",
                  px: { md: 4, xs: 2 },
                  py: { md: 4, xs: 3 },
                  borderRadius: "2rem",
                  height: "100%",
                }}
              >
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  alignItems="center"
                  spacing={{ md: 4, xs: 3 }}
                >
                  <Typography
                    textAlign="left"
                    fontSize={{ md: "2.5rem", xs: "1.8rem" }}
                    fontWeight={500}
                    fontFamily="Inter"
                    color="#fff"
                    flex={1}
                  >
                    Prestige powers world-class companies with intelligent, high
                    performance financial infrastructure.
                  </Typography>
                  <Image
                    src={PixelCloudImage}
                    alt="4 pixel cloud"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "350px",
                    }}
                  />
                </Stack>
              </Card>
            </Grid>

            {/* Story Cards */}
            {[
              {
                img: NexoraLTDImage,
                title: "Nexora",
                desc: "partnered with Prestige to streamline cross border billing and simplify payments at scale.",
              },
              {
                img: RideFlowImage,
                title: "RideFlow",
                desc: "upgraded its payout system with Prestige, ensuring fast, secure, and seamless payments for its driver network.",
              },
              {
                img: SyncoraImage,
                title: "Syncora",
                desc: "boosted its transaction approval rates by 8% by leveraging Prestige’s intelligent payment authorisation engine.",
              },
              {
                img: TrademixImage,
                title: "Trademix",
                desc: "uses Prestige to strengthen fraud defenses while accelerating transaction authorisations for global customers.",
              },
            ].map((story, index) => (
              <Grid size={{ lg: 4, sm: 6, xs: 12 }} key={index}>
                <Card
                  sx={{
                    borderRadius: "2rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={story.img}
                    alt={`${story.title} image`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderTopLeftRadius: "2rem",
                      borderTopRightRadius: "2rem",
                    }}
                  />
                  <Typography
                    sx={{ p: 3 }}
                    textAlign="left"
                    fontSize={{ md: "1.5rem", xs: "1.2rem" }}
                    fontWeight={500}
                    fontFamily="Inter"
                  >
                    <b>{story.title}</b> {story.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default CustomerStoriesHome;
