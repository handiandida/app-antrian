import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/img/plazatoyota.png";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          marginLeft: 8,
          marginRight: 8,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={Logo} />
        <Typography variant="h2">
          <span style={{ color: "red" }}> PLAZA TOYOTA </span> Tendean
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
