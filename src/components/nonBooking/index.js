import { Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(noPol) {
  return { noPol };
}

const rows = [
  createData("B 1234 AMV"),
  createData("B 1234 AMV"),
  createData("B 1234 AMV"),
  createData("B 1234 AMV"),
  createData("B 1234 AMV"),
];

const NonBooking = () => {
  return (
    <div>
      <Typography variant="h5">Non Booking</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minHeight: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No Polisi</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NonBooking;
