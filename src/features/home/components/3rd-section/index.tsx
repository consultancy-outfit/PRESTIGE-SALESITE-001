import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  AccountingPlatformsIcon,
  DigitalBanksIcon,
  EnterpriseSaasIcon,
  FintechInnovatorsIcon
} from "../../assets";

const HomeThirdSection = () => {
  const data = [
    {
      id: 1,
      image: FintechInnovatorsIcon,
      heading: "Fintech Innovators",
      description: "Get same-day transfers on most major currencies.",
    },
    {
      id: 2,
      image: DigitalBanksIcon,
      heading: "Digital Banks",
      description: "Collect and pay like a local, hold up to 35 currencies.",
    },
    {
      id: 3,
      image: AccountingPlatformsIcon,
      heading: "Accounting Platforms",
      description: "Payment exchange rate are cheaper than bank.",
    },
    {
      id: 4,
      image: EnterpriseSaasIcon,
      heading: "Enterprise SaaS",
      description:
        "Our security is based on the highest international standards.",
    },
  ];

  return (
    <SlideUpInView initialY={-80}>
      <Stack
        spacing={8}
        alignItems="center"
        px={{ lg: 4, xs: 3 }}
        py={8}
        sx={{ backgroundColor: "#F2F5F7" }}
      >
        <Stack
          sx={{ width: { lg: "90%", xs: "100%" }, color: "#03020C" }}
          spacing={2}
        >
          <Typography
            textAlign="left"
            fontSize={{ md: "3.625rem", xs: "1.8rem" }}
            fontWeight={500}
            fontFamily="Inter"
            color="#000"
          >
            Who We Serve
          </Typography>
          <Typography
            textAlign="left"
            fontSize={"1.25rem"}
            fontWeight={500}
            fontFamily="Inter"
            color="#454745"
            sx={{ width: { lg: "40%", md: "60%", xs: "100%" } }}
          >
            {`From disruptive startups to global-scale platforms, Prestige empowers diverse organisations across the financial ecosystem. Whether you're launching, scaling, or transforming  we meet you where you are.`}
          </Typography>
          <Typography
            textAlign="left"
            fontSize={"1.25rem"}
            fontWeight={500}
            fontFamily="Inter"
            color="#000"
            sx={{
              width: "40%",
              textDecoration: "underline",
              textDecorationColor: "#C3F53C",
            }}
          >
            Audience Types
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={{ md: "space-between", xs: "flex-start" }}
            alignItems={{ md: "center", xs: "flex-start" }}
            spacing={2}
          >
            {data?.map((items) => (
              <Stack key={items?.id} spacing={1}>
                <Stack>
                  <Image src={items?.image} alt={items?.heading} />
                </Stack>
                <Typography
                  textAlign="left"
                  fontSize={"1.5rem"}
                  fontWeight={500}
                  fontFamily="Inter"
                  color="#080808"
                >
                  {items?.heading}
                </Typography>
                <Typography
                  textAlign="left"
                  fontSize={"1.125rem"}
                  fontFamily="Inter"
                  color="#454745"
                >
                  {items?.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default HomeThirdSection;
