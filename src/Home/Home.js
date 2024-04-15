import React, { useState, useEffect } from "react";
import "./Home.css";
import MacBookWinners from "../MacBookWinners/MacbookWinners";
import CyberTruckWinner from "../CyberTruckWinner/CyberTruckWinner";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Home = () => {
  const [page, setPage] = useState("macbookWinners");
  const [displayNext, setDisplayNext] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className="homeBackground">
      {page === "macbookWinners" ? <MacBookWinners setDisplayNext={setDisplayNext} /> : <CyberTruckWinner />}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginRight: 30,
          marginTop: 10,
        }}
      >
        {displayNext && (
          <Button variant="contained" color="primary" size="large" onClick={() => {
            setPage("cyberTruckWinner");
            setDisplayNext(false);
          }}>
            Next
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Home;
