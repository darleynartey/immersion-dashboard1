import React from "react";
import Barchart from "./Graphs/Barchart";
import Doughnutchart from "./Graphs/Doughnutchart";
import LegendLine from "./Graphs/Legendline";
import Linechart from "./Graphs/Linechart";
import { Grid } from "@mui/material";

export const Graphs = () => {
  return (
    <>
      <Doughnutchart />
      <Grid container spacing={2} sx={{ mt: "2rem" }}>
        <Barchart />
        <LegendLine />
        <Linechart />
      </Grid>
    </>
  );
};
