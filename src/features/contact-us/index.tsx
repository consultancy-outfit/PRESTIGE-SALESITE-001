"use client";

import { ContactForm, ContactInfoCard } from "./components";
import { Box } from "@mui/material";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";

export const ContactUsFeature = () => {
  return (
    <Box>
      <ScaleInView>
        <ContainerGridLayout
          customStyles={{
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90dvh",
            backgroundColor: "#010101",
            p: 2,
          }}
        >
          <ItemGridLayout lg={4} md={6}>
            <ContactInfoCard />
          </ItemGridLayout>
          <ItemGridLayout lg={4} md={6}>
            <ContactForm />
          </ItemGridLayout>
        </ContainerGridLayout>
      </ScaleInView>
    </Box>
  );
};
