import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getCyberTruckWinner} from "../api/api";
import { AnimatedTypography } from "../AnimatedTypography/AnimatedTypography";

const CyberTruckWinner = () => {
  const [displayWinner, setDisplayWinner] = useState(false);
  const [winner, setWinner] = useState({
    name: 'Alex Smith'
  });

  useEffect(() => {}, []);

  const showCyberTruckWinnerClicked = async () => {
    const winnerData = await getCyberTruckWinner();
    setWinner(winnerData);
    setDisplayWinner(true);
  }

  return (
    <Box textAlign="center">
      <Box>
      <img src="/grand-prize-header.png" alt="Winners" style={{ width: '100%', maxWidth: '800px', height: 'auto', marginTop: '50px' }} />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 10}}>
        {displayWinner ? (
          <div>
            {/* <Typography
              variant="h2"
              color="#30fcfc"
              key={winner}
              style={{
                padding: 10,
                fontFamily: 'Kanit, sans-serif',
                fontWeight: 500, // Medium font weight
              }}
            >
              {winner.name}
            </Typography> */}
            <AnimatedTypography text={winner.name} />
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
            startIcon={<img src="select-now-button.png" alt="Winners" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />}
            style={{ backgroundColor: 'transparent', width: '100%', maxWidth: '400px', height: 'auto',boxShadow:'none' }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CyberTruckWinner;
