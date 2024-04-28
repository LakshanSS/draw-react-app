import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { getCyberTruckWinner, getParticipants } from "../api/api";
import { AnimatedTypography } from "../AnimatedTypography/AnimatedTypography";

const CyberTruckWinner = () => {
  const [displayWinner, setDisplayWinner] = useState(false);
  const [allParticipantNames, setAllParticipantNames] = useState(["asas", "gggg", "asas", "gggg", "asas", "gggg", "asas", "gggg", "asas", "gggg", "asas", "gggg"]);
  const [winner, setWinner] = useState({
    name: 'Alex Smith'
  });

  useEffect(() => {}, []);

  const showCyberTruckWinnerClicked = async () => {
    const participantsData = await getParticipants();
    const participantNames = participantsData.map(participant => participant.name);
    setAllParticipantNames(participantNames);
    const winnerData = await getCyberTruckWinner();
    setWinner(winnerData);
    setDisplayWinner(true);
  }

  return (
    <Box textAlign="center" className="cyberTruckWinnerBackground">
      <Box sx={{display: 'flex', justifyContent: 'center', pt: 50, pl: 5}}>
        {displayWinner ? (
          <div style={{marginTop: 50, paddingLeft: 100}}>
            <AnimatedTypography actualWinner={winner.name} allParticipantNames={allParticipantNames}/>
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
            startIcon={<img src="select-winner.png" alt="Winners" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />}
            style={{ backgroundColor: 'transparent', width: '100%', maxWidth: '400px', height: 'auto',boxShadow:'none' }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CyberTruckWinner;
