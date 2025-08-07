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

export default function TermsAndConditionsPolicy() {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const accountRegistration = [
    "Providing accurate, current information.",
    "Maintaining the confidentiality of your account credentials.",
    "Notifying us immediately of any unauthorised use.",
  ];
  const useOfServices = [
    "Violate any intellectual property or proprietary rights.",
    "Distribute harmful or malicious software.",
    "Attempt to gain unauthorised access to our systems.",
  ];
  const disclaimers = [
    "Continuous or secure access to our services.",
    "That the information is accurate, complete, or up to date.",
    "That our services will be free from viruses or other harmful components.",
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
        aria-label="Terms and Policy Tabs"
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
        <Tab label="Acceptance of Terms" {...a11yProps(0)} />
        <Tab label="Account Registration" {...a11yProps(1)} />
        <Tab label="Use of Services" {...a11yProps(2)} />
        <Tab label="Intellectual Property" {...a11yProps(3)} />
        <Tab label="Privacy" {...a11yProps(4)} />
        <Tab label="Disclaimers" {...a11yProps(5)} />
        <Tab label="Limitation of Liability" {...a11yProps(6)} />
        <Tab label="Modifications" {...a11yProps(7)} />
        <Tab label="Governing Law" {...a11yProps(8)} />
        <Tab label="Contact Us" {...a11yProps(9)} />
      </Tabs>

      {/* Right Content */}
      <Box flex={1}>
        <TabPanel value={value} index={0}>
          <Stack spacing={2}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontWeight={600}
              fontSize="1.5rem"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#C3F53C",
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontWeight={500}
              fontSize={{ xs: "2rem", md: "3.25rem" }}
              mt={1}
            >
              Welcome to Prestige
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Red Hat Display"
              fontSize="1.125rem"
              mt={2}
            >
              {` Welcome to Prestige. These Terms and Conditions ("Terms") govern
            your access to and use of our website, services, and digital
            platforms operated by Prime Money ("we," "us," or "our"). By using
            our services, you agree to be bound by these Terms.`}
            </Typography>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              textAlign="left"
            >
              Acceptance of Terms
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              By accessing or using our website or services, you confirm that
              you have read, understood, and agree to these Terms. If you do not
              agree, you must not use our services.
            </Typography>
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
              Account Registration
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              To access certain features, you may be required to create an
              account. You are responsible for:{" "}
            </Typography>
            {accountRegistration?.map((items) => (
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
              Use of Services{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              You agree to use our services only for lawful purposes and in
              compliance with all applicable laws. You must not:
            </Typography>
            {useOfServices?.map((items) => (
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
              fontWeight={500}
              textAlign="left"
            >
              Intellectual Property{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              All content on our site and services—including text, graphics,
              logos, software, and trademarks—is the property of Real Money or
              its licensors and is protected by intellectual property laws. You
              may not copy, distribute, or use it without prior written
              permission.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              fontWeight={500}
              textAlign="left"
            >
              Privacy
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              Your use of our services is also governed by our Privacy Policy,
              which explains how we collect and use your information.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              fontWeight={500}
              textAlign="left"
            >
              Disclaimers{" "}
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              Our services are provided “as is” and “as available” without
              warranties of any kind. We do not guarantee:
            </Typography>
            {disclaimers?.map((items) => (
              // eslint-disable-next-line react/jsx-key
              <Typography
                color="#575757"
                fontFamily="Inter"
                fontSize={"1.375rem"}
                component={"li"}
              >
                {items}
              </Typography>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={6}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
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
              fontWeight={500}
              textAlign="left"
            >
              Modifications
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page and become effective immediately.
              Continued use after changes indicates your acceptance.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={8}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              fontWeight={500}
              textAlign="left"
            >
              Governing Law
            </Typography>
            <Typography
              color="#575757"
              fontFamily="Inter"
              fontSize={"1.375rem"}
              textAlign="left"
            >
              These Terms are governed by the laws of United Kingdom, without
              regard to its conflict of law principles. Any disputes will be
              handled in the courts of UK.
            </Typography>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={9}>
          <Stack spacing={1}>
            <Typography
              color="#000"
              fontFamily="Inter"
              fontSize={"2rem"}
              fontWeight={500}
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
              If you have any questions or concerns about these Terms of
              Service, please reach out to us at info@prestige.co.uk
            </Typography>
          </Stack>
        </TabPanel>
      </Box>
    </Stack>
  );
}
