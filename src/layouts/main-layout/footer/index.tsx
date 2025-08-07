"use client";

import { DarkFooterLogoImage } from "@/assets/images/logo";
// import { Icon5 } from "@/assets/icons/common";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { about, products, resources } from "./footer.data";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#F2F5F7",
        color: "black",
        px: { xs: 5, sm: 10 },
        py: { xs: 3, sm: 5 },
      }}
    >
      <Grid container spacing={4} mb={4}>
        {/* Logo and Description */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Stack
            spacing={2}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Stack>
              <Image src={DarkFooterLogoImage} alt="Logo" />
            </Stack>

            {/* <Stack direction="row" spacing={2} mt={2}>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <Image src={Icon5} alt="icon5" />
              </IconButton>
            </Stack> */}
          </Stack>
        </Grid>
        {/* Products */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Typography
            variant="subtitle1"
            color="#000000"
            fontFamily="Manrope"
            fontWeight={600}
          >
            Products
          </Typography>
          {products.map((item) => (
            <Typography
              key={item?.label + item?.id}
              variant="body1"
              color="#000000"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid size={{ md: 2, xs: 6 }}>
          <Typography
            variant="subtitle1"
            color="#000000"
            fontFamily="Manrope"
            fontWeight={600}
          >
            Company
          </Typography>
          {about.map((item) => (
            <Typography
               key={item?.label+item?.id}
              variant="body1"
              color="#000000"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Resources */}
        <Grid size={{ md: 2, xs: 6 }}>
          <Typography
            variant="subtitle1"
            color="#000000"
            fontFamily="Manrope"
            fontWeight={600}
          >
            Resources
          </Typography>
          {resources.map((item) => (
            <Typography
              key={item?.label+item?.id}
              variant="body1"
              color="#000000"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Typography
            variant="subtitle1"
            color="#000000"
            fontFamily="Manrope"
            fontWeight={600}
          >
            Support
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1.5, cursor: "pointer" }}
            color="#000000"
            fontFamily="Manrope"
          >
            Email: info@prestige.co.uk
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1.5, cursor: "pointer" }}
            color="#000000"
            fontFamily="Manrope"
          >
            Address: 30 Churchill Place, London, England, E14 5RE
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom bar */}
      <hr />
      <Box
        mt={3}
        display="flex"
        justifyContent="center"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <Typography
          variant="body1"
          sx={{ color: "#000000", fontFamily: "Manrope" }}
        >
          Copyright © Prestige {currentYear}. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
