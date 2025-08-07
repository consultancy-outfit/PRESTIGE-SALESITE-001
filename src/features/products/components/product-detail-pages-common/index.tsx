"use client";
import {
  CheckedIcon,
  TextUnderscoreIcon,
  UseCasesGetStartedIcon,
} from "@/assets/icons/common";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

export const ProductDetailPagesCommon = (props: any) => {
  const {
    PageIcon,
    PageName,
    PageTitle,
    PageDescription,
    PageHeaderImage,
    gridContent,
  } = props;
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={10}
          px={2}
          m={2}
          pb={20}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PageIcon />
            <PageName />
          </Box>
          <Typography
            variant="h2"
            color="white"
            fontWeight={600}
            textAlign={"center"}
          >
            {PageTitle}
          </Typography>
          <Typography
            variant="body1"
            color="grey"
            sx={{ mb: 3, textAlign: "center" }}
          >
            {PageDescription}
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Image
          src={PageHeaderImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "660px",
            position: "relative",
            bottom: "200px",
          }}
        />
      </Box>

      <Grid container sx={{ backgroundColor: "#F2F5F7", px: 15, py: 5 }}>
        {gridContent.map((item: any, idx: number) => (
          <React.Fragment key={item?.id}>
            {idx % 2 === 0 ? (
              <>
                {/* Text first, then image */}
                <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 8 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <TextUnderscoreIcon />
                  </Box>
                  <Typography variant="h3" fontWeight={600} mb={3}>
                    {item.subtitle}
                  </Typography>
                  <Typography mb={3}>{item.description}</Typography>
                  {item.innerValues &&
                    item.innerValues.map((val: any, idx: number) => (
                      <Box key={idx} sx={{ mb: 3 }}>
                        <Typography fontWeight={600}>{val.liTitle}</Typography>
                        <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                          {val.liList.map((value: string, i: number) => (
                            <Typography
                              component="li"
                              sx={{
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                              key={i}
                            >
                              <CheckedIcon style={{ fontSize: 20 }} />
                              {value}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 8 }}>
                  <Image
                    src={item.sectionImage}
                    alt="HeroSection"
                    style={{
                      width: "100%",
                      height: "660px",
                    }}
                  />
                </Grid>
              </>
            ) : (
              <>
                {/* Image first, then text */}
                <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 8 }}>
                  <Image
                    src={item.sectionImage}
                    alt="HeroSection"
                    style={{
                      width: "100%",
                      height: "660px",
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 8 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <TextUnderscoreIcon />
                  </Box>
                  <Typography variant="h3" fontWeight={600} mb={3}>
                    {item.subtitle}
                  </Typography>
                  <Typography mb={3}>{item.description}</Typography>
                  {item.innerValues &&
                    item.innerValues.map((val: any, idx: number) => (
                      <Box key={idx}>
                        <Typography fontWeight={600}>{val.liTitle}</Typography>
                        <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                          {val.liList.map((value: string, i: number) => (
                            <Typography
                              component="li"
                              sx={{
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                              key={i}
                            >
                              <CheckedIcon style={{ fontSize: 20 }} />
                              {value}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                </Grid>
              </>
            )}
          </React.Fragment>
        ))}
      </Grid>

      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          py={10}
          px={2}
          m={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <UseCasesGetStartedIcon />
          </Box>
          <Typography
            variant="h2"
            color="white"
            fontWeight={600}
            textAlign={"center"}
          >
            “Prestige helps us move faster while staying <br /> fully compliant.
            The data quality and API <br /> reliability are unmatched.”
          </Typography>
          <LinkButton
            link={APP_ROUTES?.Get_STARTED}
            customStyles={{
              borderRadius: "999px",
              border: `1.5px solid linear-gradient(0deg, #C3F53C 0%, #C3F53C 100%)`,
              px: "24px",
              py: "8px",
              background: "linear-gradient(0deg, #C3F53C 0%, #C3F53C 100%)",
              color: "#000000",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              fontWeight: 600,
            }}
          >
            Register <ArrowRightAltIcon />
          </LinkButton>
        </Box>
      </Stack>
    </>
  );
};

export default ProductDetailPagesCommon;
