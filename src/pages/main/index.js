import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import CustomerBooking from "../../components/customerBooking";
import NonBooking from "../../components/nonBooking";
import Ekpress from "../../components/ekpress";

const Main = () => {
  return (
    <>
      <Box sx={{ margin: 8 }}>
        <Grid container spacing={2}>
          <Grid
            container
            spacing={1}
            item
            xs={6}
            display="flex"
            flexDirection="row"
          >
            <Grid item xs={6}>
              <CustomerBooking />
            </Grid>
            <Grid item xs={3}>
              <NonBooking />
            </Grid>
            <Grid item xs={3}>
              <Ekpress />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            item
            xs={6}
            display="flex"
            flexDirection="row"
          >
            <Grid item xs={4}>
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter EM
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 2
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 3
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 4
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 5
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 6
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 7
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Counter 8
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ mt: 1 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    SA Mobile 1
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B 1234 AMV
                  </Typography>
                  <Typography variant="body2">Booking</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
