import React, { useState, useEffect } from "react";
import "./CyberTruckWinner.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export const AnimatedTypography = ({ text }) => {
    const randomeNames = ['Ann Johanna', 'Shani Perera', 'Charlie Davidson', 'David Dexter', text, 'Eva Alexandra', 'Sharon Xavier', 'Grace Molly', 'Helen Victoria']
    const elements = randomeNames.map((name) => 
    <Typography variant="h2" color="#30fcfc" className="a-text" key={name} style={{ padding: 10, display:'flex', whiteSpace:'nowrap', justifyContent:'flex-start', fontFamily: 'Kanit, sans-serif', fontWeight: 500 }}>
      {name}
    </Typography>);
  
    return (
      <Box height={92} overflow="hidden" display="flex" justifyContent="flex-start" alignItems="center">
        <Box height="fit-content" className="animated-text">{elements}</Box>
     </Box>
    );
  }