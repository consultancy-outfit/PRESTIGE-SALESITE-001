import { Hero } from "@/features/home/components";
import HomeThirdSection from "@/features/home/components/3rd-section";
import SecurityAndRegulatoryReadinessHome from "@/features/home/components/4th-section";
import WhyChoosePrestigeHome from "@/features/home/components/5th-section";
import OurTechStackHome from "@/features/home/components/6th-section";
import CustomerStoriesHome from "@/features/home/components/7th-section";
import ReadyToGetStartedHome from "@/features/home/components/8th-section";
import ExploreOurProductsHome from "@/features/home/components/explore-our-product";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack textAlign="center">
        <Hero />
        <ExploreOurProductsHome />
        <HomeThirdSection />
        <SecurityAndRegulatoryReadinessHome />
        <WhyChoosePrestigeHome/>
        <OurTechStackHome/>
        <CustomerStoriesHome/>
        <ReadyToGetStartedHome/>
      </Stack>
    </>
  );
}
