import { CareersIcon, CareersTextIcon } from "@/assets/icons/common";
import { Box, Stack, Typography } from "@mui/material";

export default function Careers() {
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
            <Stack direction="row" spacing={1} alignItems="center">
              <CareersIcon
                sx={{
                  fontSize: 40,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                Careers
              </Typography>
            </Stack>
          </Box>
          <Typography variant="h2" color="white" fontWeight={600} textAlign={'center'}>
            Join the Team Build the Future.
          </Typography>
          <Typography
            variant="subtitle2"
            color="white"
            sx={{ mb: 3, textAlign: "center" }}
          >
            We’re on a mission to redefine finance through smarter connectivity,
            intelligent data, and seamless digital experiences. Our platform{" "}
            <br />
            powers everything from real-time payments to advanced credit
            scoring, and we need bright minds like yours to keep pushing <br />
            boundaries.
          </Typography>
        </Box>
      </Stack>
      <div style={{ height: "100vh", background: "#fff" }}>
        <iframe
          src="https://recruiting.peoplescreed.ai//job-boards?boardName=prestige-1754288398804&companyId=68904ca595179f36a7528267"
          width="100%"
          height="100%"
          no-border
          title="Jobs Widget"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
