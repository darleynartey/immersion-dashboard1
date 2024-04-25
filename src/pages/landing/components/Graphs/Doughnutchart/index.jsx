import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Paper, Card, Grid } from "@mui/material";

chartjs.register(ArcElement, Tooltip, Legend);

const Doughnutchart = () => {
  const data1 = {
    labels: ["Red", "Remaining"],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: ["#FF6384", "#DDDDDD"],
      },
    ],
  };

  const data2 = {
    labels: ["Blue", "Remaining"],
    datasets: [
      {
        data: [22, 78],
        backgroundColor: ["#36A2EB", "#DDDDDD"],
      },
    ],
  };

  const data3 = {
    labels: ["Green", "Remaining"],
    datasets: [
      {
        data: [62, 38],
        backgroundColor: ["#4CAF50", "#DDDDDD"],
      },
    ],
  };

  return (
    <Grid container>
      <Grid item lg={4}>
        <Doughnut data={data1} />
      </Grid>
      <Grid item lg={4}>
        <Doughnut data={data2} />
      </Grid>
      <Grid item lg={4}>
        <Doughnut data={data3} />
      </Grid>
    </Grid>
  );
};

export default Doughnutchart;
