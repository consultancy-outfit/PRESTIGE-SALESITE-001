import { DevelopersIcon, DevelopersTextIcon } from "@/assets/icons/common";
import UiComingSoonState from "@/components/ui-status-states/ui-coming-soon-page-state";
import { Box, Stack, Typography } from "@mui/material";

export const ComingSoon = () => {
  return (
    <>
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
            <DevelopersIcon />
            <DevelopersTextIcon />
          </Box>
          <Typography variant="h2" color="white" fontWeight={600} textAlign="center">
            Build Fast Build Secure Build with <br /> Prestige
          </Typography>
          <Typography
            variant="body1"
            color="grey"
            sx={{ mb: 3, textAlign: "center" }}
          >
            Dive into our powerful APIs, clean documentation, and sandbox
            environment—everything you need to create, test, and launch next-gen{" "}
            <br />
            financial products. Whether you&#39;re integrating payments, accessing
            real-time data, or verifying users, Prestige gives developers the{" "}
            <br />
            tools to innovate without limits.
          </Typography>
        </Box>
      </Stack>
      <UiComingSoonState />;
    </>
  );
};

export default ComingSoon;
