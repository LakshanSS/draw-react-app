import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export const AnimatedTypography = ({ actualWinner, allParticipantNames }) => {
    // Ensure allParticipantNames has an even length
    const adjustedNames = allParticipantNames.length % 2 === 0 ? allParticipantNames : allParticipantNames.slice(0, -1);
    const middleIndex = adjustedNames.length / 2;

    // Create a new array with the actualWinner in the middle
    const participantNames = [
        ...adjustedNames.slice(0, middleIndex),
        actualWinner,
        ...adjustedNames.slice(middleIndex)
    ];
    console.log(participantNames);
    const elements = participantNames.map((name) => 
    <Typography variant="h3" color="#30fcfc" className="a-text" key={name} style={{ padding: 10, display:'flex', whiteSpace:'nowrap', justifyContent:'flex-start', fontFamily: 'Kanit, sans-serif', fontWeight: 400 }}>
      {name}
    </Typography>);
  
    return (
      <Box height={75} overflow="hidden" display="flex" justifyContent="flex-start" alignItems="center">
        <Box height="fit-content" className="animated-text">{elements}</Box>
     </Box>
    );
  } 