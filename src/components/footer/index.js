import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import * as moment from "moment";
import Clock from "./clock";

const Footer = () => {
  const dateTime = new Date();
  return (
    <div>
      <Box
        sx={{
          marginLeft: 8,
          marginRight: 8,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h5">Plat No</Typography>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">B 1234 AMV</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">Counter</Typography>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">Counter EM</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs="auto" sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h4">
            <span> {moment(dateTime).format("dddd, MMMM Do YYYY")} </span>
            <Clock />
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
