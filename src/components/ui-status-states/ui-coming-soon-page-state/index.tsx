"use client";

import { CommonUIStatesComingSoonImage } from "@/assets/images/common/ui-states";
import { LinkButton } from "@/components/buttons/link-button";
import { Avatar, Box } from "@mui/material";
import { ComingSoonStatePropsI } from "../ui-status-states.interface";

const UiComingSoonState = (props: ComingSoonStatePropsI) => {
  const {
    hasImage = true,
    image = hasImage ? CommonUIStatesComingSoonImage : "",
    children,
    height = "80vh",
    buttonLink = "/",
    hasButton = false,
    buttonText = "Back to home",
  } = props;

  return (
    <Box
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "common.white",
      }}
    >
      {!!hasImage && (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            placeContent: "center",
            marginY: 4,
          }}
        >
          <Avatar
            src={image?.src}
            alt="Not Found"
            sx={{
              width: "100%",
              height: "100%",
            }}
            variant="rounded"
          />
        </Box>
      )}

      {children}
      {hasButton && (
        <LinkButton variant="contained" link={buttonLink}>
          {buttonText}
        </LinkButton>
      )}
    </Box>
  );
};

export default UiComingSoonState;
