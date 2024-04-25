import React from "react";
import { Line } from "react-chartjs-2";
import { Box, CardContent, Paper, Card, Grid } from "@mui/material";

const LegendLine = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2020",
        data: [
          10000, 12000, 11000, 15000, 14000, 16000, 18000, 19000, 20000, 22000,
          21000, 23000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.6,
      },
      {
        label: "2021",
        data: [
          14000, 16000, 15000, 18000, 17000, 19000, 20000, 22000, 21000, 23000,
          24000, 22000,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.6,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return "$" + value / 1000 + "k";
            },
          },
        },
      ],
    },
  };

  return (
    <Grid item lg={6}>
      <Card elevation={3}>
        <Paper elevation={3}>
          <Box sx={{ p: 2 }}>
            <Line data={data} options={options} />
          </Box>
        </Paper>
      </Card>
    </Grid>

    // <div>
    //   <h2>Total Revenue for 2020 and 2021</h2>
    //   <Line data={data} options={options} />
    // </div>
  );
};

export default LegendLine;
