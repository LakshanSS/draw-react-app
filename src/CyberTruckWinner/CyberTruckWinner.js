import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getCyberTruckWinner } from "../api/api";
import { AnimatedTypography2 } from "../AnimatedTypography/AnimatedTypography";

const CyberTruckWinner = () => {
  const [displayWinner, setDisplayWinner] = useState(false);
  const [winner, setWinner] = useState({
    name: 'Alex Smith Rajapaksha',
    country: 'United States'
  });

  useEffect(() => {}, []);

  const showCyberTruckWinnerClicked = async () => {
    const winnerData = await getCyberTruckWinner();
    setWinner(winnerData);
    setDisplayWinner(true);
  }

  return (
    <Box textAlign="center" className="cyberTruckWinnerBackground">
      <Box sx={{display: 'flex', justifyContent: 'center', pt: 50, pl: 5}}>
        {displayWinner ? (
          <div style={{marginTop: 40}}>
            <AnimatedTypography2 actualWinner={winner.name}/>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              showCyberTruckWinnerClicked();
            }}
            disableRipple
            startIcon={<img src="select-winner.png" alt="Winners" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />}
            style={{ backgroundColor: 'transparent', width: '100%', maxWidth: '400px', height: 'auto',boxShadow:'none' }}
          />
        )}
        {/* {displayWinner && (
          <Typography variant="h3" color="#30fcfc">
          {winner.country}
        </Typography>
        )} */}
      </Box>
    </Box>
  );
};

export default CyberTruckWinner;
