"use client";
import {
  Box,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: { xs: 2, md: 4 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

export default function PrivacyPolicy() {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const infoWeCollect = [
    "Personal Information: Name, email address, phone number, company name, job title.",
    "Financial Data: Bank account information, transaction history (if applicable to our services).",
    "Technical Information: IP address, browser type, device details, and cookies.",
    "Usage Data: Pages visited, actions taken, and preferences on our site.",
  ];
  const howWeUseYourInfo = [
    "Provide and manage our products and services.",
    "Communicate with you regarding updates or support.",
    "Improve our website functionality and user experience",
    "Ensure legal and regulatory compliance.",
    "Market relevant offers or updates (only with your consent).",
  ];
  const dataProtection = [
    "Trusted third-party service providers (e.g., hosting, analytics, CRM).",
    "Regulators or legal authorities if required by law.",
    "Affiliates or subsidiaries under Real Money for internal operations.",
  ];
  const yourRights = [
    "Access or correct your personal data.",
    "Request deletion of your data.",
    "Withdraw consent for marketing.",
    "File a complaint with a data protection authority.",
  ];
  return (
    <Stack
      sx={{
        background: "#fff",
        py: { md: 4, xs: 10 },
        px: { xs: 2, md: 6 },
        flexDirection: { xs: "column", md: "row" },
      }}
      spacing={isMobile ? 3 : 0}
    >
      {/* Left Menu */}
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons={isMobile ? "auto" : false} // only show on mobile
        allowScrollButtonsMobile={isMobile}
        value={value}
        onChange={handleChange}
        aria-label="Privacy Policy Tabs"
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "divider",
          minWidth: isMobile ? "100%" : "250px",
          "& .MuiTab-root": {
            whiteSpace: "nowrap",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textTransform: "none",
          },
        }}
      >
        <Tab label="Information We Collect" {...a11yProps(0)} />
        <Tab label="How We Use Your Information" {...a11yProps(1)} />
        <Tab label="Data Protection & Security" {...a11yProps(2)} />
        <Tab label="Your Rights" {...a11yProps(3)} />
        <Tab label="Third-Party Services" {...a11yProps(4)} />
        <Tab label="Data Retention" {...a11yProps(5)} />
        <Tab label="Policy Updates" {...a11yProps(6)} />
        <Tab label="Contact Us" {...a11yProps(7)} />
        <Tab label="How to contact us" {...a11yProps(8)} />
      </Tabs>

      {/* Right Content */}
      <Box flex={1}>
        <TabPanel value={value} index={0}>
          <Stack spacing={2}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontWeight={600}
              fontSize="1.8rem"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#C3F53C",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontWeight={500}
              fontSize={{ xs: "2rem", md: "3.25rem" }}
              mt={1}
            >
              Introduction
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Red Hat Display"
              fontSize="1.125rem"
              mt={2}
            >
              {`At Prestige, your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or use our services.`}
            </Typography>

            <Stack spacing={1}>
              <Typography
                color="#000"
                fontFamily="Inter"
                fontSize={"2rem"}
                textAlign="left"
              >
                Information We Collect
              </Typography>
              <Typography
                color="#575757"
                fontFamily="Inter"
                fontSize={"1.375rem"}
                textAlign="left"
              >
                We may collect the following types of information:
              </Typography>
              {infoWeCollect?.map((items) => (
                // eslint-disable-next-line react/jsx-key
                <Typography
                  color="#575757"
                  fontFamily="Inter"
                  fontSize={"1.375rem"}
                  textAlign="left"
                  component={"li"}
                >
                  {items}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              How We Use Your Information
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              We use your information to:
            </Typography>
            {howWeUseYourInfo?.map((items) => (
              // eslint-disable-next-line react/jsx-key
              <Typography
                color="#575757"
                fontFamily="Inter"
                fontSize={"1.375rem"}
                textAlign="left"
                component={"li"}
              >
                {items}
              </Typography>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Data Protection & Security{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              We do not sell your personal data. However, we may share it
              with:{" "}
            </Typography>
            {dataProtection?.map((items) => (
              // eslint-disable-next-line react/jsx-key
              <Typography
                color="#575757"
                fontFamily="Inter"
                fontSize={"1.375rem"}
                textAlign="left"
                component={"li"}
              >
                {items}
              </Typography>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Your Rights
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              Depending on your location, you may have the right to:
            </Typography>
            {yourRights?.map((items) => (
              // eslint-disable-next-line react/jsx-key
              <Typography
                color="#575757"
                fontFamily="Inter"
                fontSize={"1.375rem"}
                textAlign="left"
                component={"li"}
              >
                {items}
              </Typography>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Third-Party Services{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              Our site may include links to third-party sites. We are not
              responsible for their privacy practices and encourage you to
              review their policies.{" "}
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Data Retention{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              We retain your data only as long as necessary to fulfil the
              purposes stated or as required by law.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={6}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"1.5rem"}
              fontWeight={500}
              textAlign="left"
            >
              Limitation of Liability
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              To the maximum extent permitted by law, Real Money shall not be
              liable for any indirect, incidental, special, or consequential
              damages, or loss of data, arising from your use of our services.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={7}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Policy Updates{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              We may update this Privacy Policy periodically. You’ll be notified
              of significant changes via email or a prominent site notice.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={8}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Contact Us{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              If you have any questions or concerns regarding your privacy,
              please contact us at info@prestige.co.uk
            </Typography>
          </Stack>
        </TabPanel>
      </Box>
    </Stack>
  );
}
