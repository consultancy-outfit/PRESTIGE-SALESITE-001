"use client";

import { Grid } from "@mui/material";
import { LoginForm } from "./components";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const Login = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "80dvh", backgroundColor: "common.white" }}
    >
      <Grid size={{ md: 4, xs: 12 }}>
        <ScaleInView>
          <LoginForm />
        </ScaleInView>
      </Grid>
    </Grid>
  );
};
