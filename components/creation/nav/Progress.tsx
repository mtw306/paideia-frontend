import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularProgressWithLabel: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Box
      sx={{
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "1rem",
      }}
    >
      <Box>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            size="4rem"
            sx={{ position: "relative", zIndex: 2 }}
            value={value * 20}
            color="success"
          />
          <CircularProgress
            variant="determinate"
            sx={{ position: "absolute", color: "text.secondary" }}
            size="4rem"
            value={100}
            // color="circleBackground"
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              fontWeight: 450,
            }}
          >
            {value * 20}%
          </Box>
        </Box>
      </Box>

      <Box sx={{ fontWeight: 500, fontSize: ".6rem" }}>
        DAO CREATION PROGRESS
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
