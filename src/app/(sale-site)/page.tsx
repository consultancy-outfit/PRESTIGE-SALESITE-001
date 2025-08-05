import { Hero } from "@/features/home/components";
import HomeThirdSection from "@/features/home/components/3rd-section";
import ExploreOurProductsHome from "@/features/home/components/explore-our-product";
import WhatOurCustomersSaySection from "@/features/home/components/what-our-customers-say";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack textAlign="center">
        <Hero />
        <ExploreOurProductsHome />
        <HomeThirdSection />
        <WhatOurCustomersSaySection />
      </Stack>
    </>
  );
}
