import { Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(noPol, appoinmentTime) {
  return { noPol, appoinmentTime };
}

const rows = [
  createData("B 1234 AMV", 20),
  createData("B 1234 AMV", 30),
  createData("B 1234 AMV", 20),
  createData("B 1234 AMV", 30),
  createData("B 1234 AMV", 20),
];

const CustomerBooking = () => {
  return (
    <div>
      <Typography variant="h5">Customer Booking</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minHeight: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No Polisi</TableCell>
              <TableCell align="right">Appoinment Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.noPol}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.noPol}
                </TableCell>
                <TableCell align="right">{row.appoinmentTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerBooking;
