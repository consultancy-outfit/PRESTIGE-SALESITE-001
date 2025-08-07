"use client";
import {
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro6,
  pro7,
  pro8,
} from "@/assets/images/common/images";
import IconProducts from "@/assets/images/common/images/icon-products";
import IconTick from "@/assets/images/common/images/icon-tick";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { GetStarted } from "../get-started";

const products = [
  {
    img: pro2,
    tag: "Data Intelligence & Insights",
    title: "See clearer decide smarter.",
    description:
      "Data is the new engine of growth. Prestige gives you the tools to unlock deep intelligence from raw financial data enabling smarter decisions, better customer experiences, and sharper business performance.",
    url: "/",
  },
  {
    img: pro3,
    tag: "Payments & Money Movement",
    title: "Move money with confidence instantly.",
    description:
      "Prestige lets you power every kind of transfer to enterprise-level disbursements. Whether domestic or international, micro or bulk, we make payments fast, intelligent, and secure.",
    url: "/",
  },
  {
    img: pro4,
    tag: " Account Access & Connectivity",
    title: "Frictionless connection total control.",
    description:
      "Prestige ensures secure, compliant, and high-performance connectivity to financial accounts. Our SmartBank layer delivers real-time data access, control, and consent orchestration across banking ecosystems.",
    url: "/",
  },
  {
    img: pro5,
    tag: "Identity & Regulatory Compliance",
    title: "Verify, comply, and scale seamlessly.",
    description:
      "Regulatory compliance doesn’t have to slow you down. With Prestige, your business gets built-in KYC, identity verification, and robust PSD2/FCA alignment — so you can focus on growth, not red tape.",
    url: "/",
  },
  {
    img: pro6,
    tag: "Product · Accountant HelpSquad",
    title: "Smarter tools for better finance teams.",
    description:
      "Whether you’re managing corporate finance or supporting SMB clients, our Accountant HelpSquad gives you smart automation and deep visibility — saving time, boosting accuracy, and powering better decisions.",
    url: "/",
  },
  {
    img: pro7,
    tag: "Centspay",
    title: "Make every transaction count.",
    description:
      "Centspay transforms ordinary financial activity into meaningful value — helping users spend smarter, save seamlessly, and engage with their money in real time.",
    url: "/",
  },
];

function ProductNewFeature() {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#080808",
            height: "100%",
            pb: { xs: 8 },
            pt: 5,
          }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, xl: 6 }}>
              <Stack gap={2}>
                <Stack flexDirection={"row"} gap={1}>
                  <IconProducts
                    sx={{
                      fontSize: 30,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="#C3F53C"
                    sx={{
                      borderBottom: "2px solid #C3F53C",
                    }}
                  >
                    Products
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  fontSize={72}
                  color="#FFFFFF"
                >
                  Elite Financial Infrastructure Precision Crafted for the
                  Future
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={400}
                  fontSize={16}
                  color="#FFFFFF"
                >
                  {`Whether you're building a fintech product, running a platform,
                or managing financial operations, Prestige delivers modular
                tools that integrate flawlessly — with unmatched speed,
                security, and intelligence.`}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, xl: 6 }}>
              <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${pro1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />
              </SlideSidewayInView>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100%",
          pb: { xs: 8 },
          pt: 5,
          px: { xs: 3, lg: 20 },
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="body1"
              color="#080808"
              fontSize={58}
              fontWeight={500}
            >
              Product Categories
            </Typography>
          </Grid>
          {products.map((item, index) => (
            <Grid size={{ xs: 12, xl: 6 }} key={index + item.title}>
              <Stack gap={2} alignItems={"flex-start"}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250 },
                    backgroundImage: `url(${item.img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                <Box
                  bgcolor={"#080808"}
                  px={2}
                  py={0.5}
                  borderRadius={35}
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  gap={2}
                  height={30}
                  width={"fit-content"}
                >
                  <Box
                    bgcolor={"#C3F53C"}
                    px={1}
                    borderRadius={35}
                    height={22}
                    width={"fit-content"}
                    display={"flex"}
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    <Typography
                      variant="body1"
                      color="#080808"
                      fontSize={12}
                      fontWeight={500}
                    >
                      Product
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="#C3F53C"
                    fontSize={12}
                    fontWeight={500}
                  >
                    {item.tag}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="#080808"
                  fontSize={24}
                  fontWeight={500}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="#454745"
                  fontSize={14}
                  fontWeight={400}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth={false}
                  sx={{
                    color: "#010101",
                    background: "#C3F53C",
                    borderRadius: "2.5rem",
                    px: 3,
                    py: 1,
                    fontSize: "1.125rem",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    minWidth: "121px",
                  }}
                  endIcon={<EastSharpIcon />}
                  onClick={() => router.push(item.title)}
                >
                  Explore
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#F2F5F7",
          height: "100%",
          pb: { xs: 8 },
          pt: 5,
          px: { xs: 3, lg: 20 },
        }}
      >
        <Stack gap={2} alignItems={"flex-start"}>
          <Typography
            variant="body1"
            color="#080808"
            sx={{
              borderBottom: "2px solid #C3F53C",
            }}
          >
            What Makes It Different
          </Typography>
          <Typography
            variant="body1"
            color="#080808"
            fontSize={58}
            fontWeight={500}
          >
            Performance, intelligence, ease of integration, compliance
          </Typography>
          <Box width={"100%"}>
            <Grid container spacing={0} mt={3}>
              <Grid size={{ xs: 12, xl: 6 }}>
                <Typography
                  variant="body1"
                  fontSize={36}
                  mb={2}
                  color="#080808"
                >
                  Business Value
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <IconTick />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#454745", fontSize: 18 },
                      }}
                      primary="Multi-Currency Wallet"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <IconTick />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#454745", fontSize: 18 },
                      }}
                      primary="Real-Time Micro-Payments"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <IconTick />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#454745", fontSize: 18 },
                      }}
                      primary="Currency Exchange & Conversion"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <IconTick />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#454745", fontSize: 18 },
                      }}
                      primary="Savings with Cents"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <IconTick />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#454745", fontSize: 18 },
                      }}
                      primary="Peer-to-Peer Transfers"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid size={{ xs: 12, xl: 6 }}>
                <SlideSidewayInView>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 336 },
                      backgroundImage: `url(${pro8.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                </SlideSidewayInView>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>

      <GetStarted />
    </>
  );
}

export default ProductNewFeature;
