import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getCyberTruckWinner} from "../api/api";

const CyberTruckWinner = () => {
  const [displayWinner, setDisplayWinner] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {}, []);

  const showCyberTruckWinnerClicked = async () => {
    const winnerData = await getCyberTruckWinner();
    setWinner(winnerData);
    setDisplayWinner(true);
  }

  return (
    <Box textAlign="center">
      <Typography variant="h2" color="white">
        Cyber Truck Winner!
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 40}}>
        {displayWinner ? (
          <div>
            <Typography
              variant="h4"
              color="white"
              key={winner}
              style={{ padding: 10 }}
            >
              {winner.name}
            </Typography>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              showCyberTruckWinnerClicked();
            }}
          >
            See the Winner
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CyberTruckWinner;
