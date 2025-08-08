"use client";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import * as MuiIcons from "@mui/icons-material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { navLinksData } from "./header.data";
import { MobileHeader } from "./mobile-header";

const getIconComponent = (
  icon?: string | React.FC<any>,
  marginRight: string = "8px",
) => {
  if (!icon) return null;

  if (typeof icon === "string") {
    const MuiIconComponent = MuiIcons[icon as keyof typeof MuiIcons];
    return MuiIconComponent ? (
      <MuiIconComponent sx={{ fontSize: 18, marginRight }} />
    ) : null;
  } else if (typeof icon === "function") {
    const CustomIconComponent = icon;
    return <CustomIconComponent sx={{ fontSize: 18, marginRight }} />;
  }
  return null;
};

export const Header = () => {
  const pathname = usePathname();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [developersAnchorEl, setDevelopersAnchorEl] =
    useState<null | HTMLElement>(null);
  const openDevelopersMenu = Boolean(developersAnchorEl);

  // Close dropdowns when switching to mobile view
  useEffect(() => {
    if (isMobile) {
      setDevelopersAnchorEl(null);
    }
  }, [isMobile]);

  const handleDevelopersClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setDevelopersAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleDevelopersClose = useCallback(() => {
    setDevelopersAnchorEl(null);
  }, []);

  useEffect(() => {
    if (!theme) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        controls.start({
          width: isMobile ? "95%" : "85%",
          transition: { duration: 0.4 },
          boxShadow:
            "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.05)",
          backgroundColor: theme.palette.common.black,
          top: 20,
          padding: "1.5rem 1rem",
        });
      } else {
        controls.start({
          width: "90%",
          transition: { duration: 0.4 },
          boxShadow: "none",
          backgroundColor: theme.palette.common.black,
          top: 0,
          padding: "2.5rem 1rem",
        });
      }
    });
    return () => unsubscribe();
  }, [controls, scrollYProgress, theme, isMobile]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{
          width: "90%",
          backgroundColor: "#010101",
          boxShadow: "none",
          top: 0,
        }}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 1rem",
          margin: "0 auto",
          borderRadius: 16,
          height: 80,
        }}
      >
        <Box>
          <Link href={APP_ROUTES.HOME}>
            <LogoAvatar height="auto" isCenter isLight={false} />
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={{ xl: 3, xs: 2 }}
          alignItems="center"
          display={{ xs: "none", lg: "flex" }}
        >
          {navLinksData.map((item) => {
            const isActiveParent = item.children
              ? item.children.some((child) => pathname?.startsWith(child.path))
              : pathname?.startsWith(item.path) && item.path !== "/"
                ? true
                : pathname === "/" && item.path === "/";

            const textColor = theme
              ? isActiveParent
                ? theme.palette.primary.main
                : theme.palette.common.white
              : "inherit";

            if (item.title === "Developers") {
              return (
                <React.Fragment key={item.title}>
                  <Button
                    id="developers-button"
                    aria-controls={
                      openDevelopersMenu ? "developers-menu" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openDevelopersMenu ? "true" : undefined}
                    onClick={handleDevelopersClick}
                    sx={{
                      textTransform: "none",
                      color: textColor,
                      fontWeight: theme?.typography?.fontWeightMedium,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      padding: "6px 8px",
                      minWidth: "auto",
                    }}
                    endIcon={
                      openDevelopersMenu ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                  >
                    <Typography variant="body2" component="span">
                      {item?.title}
                    </Typography>
                  </Button>
                  <Menu
                    id="developers-menu"
                    anchorEl={developersAnchorEl}
                    open={openDevelopersMenu}
                    onClose={handleDevelopersClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ zIndex: 2000 }}
                    slotProps={{
                      paper: {
                        sx: {
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          minWidth: "200px",
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 14,
                            width: 18,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                      list: {
                        "aria-labelledby": "developers-button",
                      },
                    }}
                  >
                    {item.children?.map((childItem) => (
                      <MenuItem
                        key={childItem.title}
                        onClick={handleDevelopersClose}
                        component={Link}
                        href={childItem.path}
                        sx={{
                          color:
                            pathname === childItem.path
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                          fontWeight:
                            pathname === childItem.path
                              ? theme.typography.fontWeightBold
                              : theme.typography.fontWeightRegular,
                          "&:hover": {
                            backgroundColor: theme.palette.action.hover,
                          },
                          borderRadius: 1,
                          px: 2,
                          py: 1,
                          justifyContent: "flex-start",
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{
                            gap: "8px",
                            width: "100%",
                            justifyContent: "flex-start",
                          }}
                        >
                          {getIconComponent(childItem.icon)} {childItem.title}
                        </Stack>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              );
            } else {
              return (
                <Typography
                  key={item?.title}
                  variant="body2"
                  component={Link}
                  href={item?.path}
                  sx={{
                    textDecoration: "none",
                    color: textColor,
                    fontWeight: theme?.typography?.fontWeightMedium,
                  }}
                >
                  {item?.title}
                </Typography>
              );
            }
          })}
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Stack
            direction="row"
            spacing={2}
            display={{ xs: "none", sm: "flex" }}
          >
            <LinkButton
              link={APP_ROUTES?.PARTNER_WITH_US}
              variant="outlined"
              customStyles={{
                borderRadius: "999px",
                border: "2px solid #C3F53C",
                px: "24px",
                py: "8px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                color: "#C3F53C",
                fontWeight: 600,
                bgcolor: theme?.palette?.common?.black,
              }}
            >
              Login
            </LinkButton>
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
              Register
            </LinkButton>
          </Stack>
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
              zIndex: 1500,
              pointerEvents: "auto",
            }}
          >
            <MobileHeader getIconComponent={getIconComponent} />
          </Box>
        </Stack>
      </motion.div>
    </>
  );
};
