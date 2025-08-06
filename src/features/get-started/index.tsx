"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { GetStartedInfoCard, GetStartedForm } from "./components";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import Hero from "./components/hero";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

export const GetStarted = () => {
  return (
    <Box>
      <SlideUpInView>
        <Hero />
      </SlideUpInView>
      <Box sx={{ backgroundColor: "common.white" }}>
        <ScaleInView>
          <ContainerGridLayout
            customStyles={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80dvh",
            }}
          >
            <ItemGridLayout md={6}>
              <GetStartedForm />
            </ItemGridLayout>
          </ContainerGridLayout>
        </ScaleInView>
      </Box>
    </Box>
  );
};
