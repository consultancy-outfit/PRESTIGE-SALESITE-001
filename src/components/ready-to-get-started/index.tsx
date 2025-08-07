"use client";

import { UseCasesGetStartedIcon } from "@/assets/icons/common";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Stack, Typography } from "@mui/material";

export const ReadyToGetStarted = () => {
  return (
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
  );
};
