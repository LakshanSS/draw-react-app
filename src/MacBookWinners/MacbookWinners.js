import React, { useState, useEffect } from "react";
import "./MacBookWinners.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getMacbookWinners } from "../api/api";
import { AnimatedTypography2 } from "../AnimatedTypography/AnimatedTypography";

const MacBookWinners = ({ setDisplayNext }) => {
  const [displayWinners, setDisplayWinners] = useState(false);
  const [winners, setWinners] = useState([]);
  const [leftColumnWinners, setLeftColumnWinners] = useState([]);
  const [rightColumnWinners, setRightColumnWinners] = useState([]);

  const macbookWinners = [
    {
      orgId: "603ee67d-f752-4223-8613-2849091a999a",
      name: "Alex John",
    },
    {
      orgId: "020e2bc8-f897-4521-aa7d-6a083982f234",
      name: "Kenny Thomas",
    },
    {
      orgId: "910d8c3f-ba85-4197-803c-871a29817e06",
      name: "David Wellington",
    },
    {
      orgId: "b8234034-82f9-49e2-ab6f-885e9072bed9",
      name: "Tommy Lee",
    },
    {
      orgId: "cbab72d1-592f-4164-b01e-906d33d0634d",
      name: "Nancy Drew",
    },
    {
      orgId: "7fa3d30c-984a-43f0-a72c-65ca28d2518b",
      name: "Benny Hill",
    },
    {
      orgId: "ff6624d3-6f80-4991-9751-e3a227baa3b0",
      name: "Quincy Jones",
    },
    {
      orgId: "6a14cba3-52c3-4c06-89b0-1c8540533c3c",
      name: "Mickey Mouse",
    },
    {
      orgId: "7d22e454-0f59-40b8-9e47-334c1f83424a",
      name: "Nina Simone",
    },
    {
      orgId: "ed37af5d-1211-464f-b1ca-6d1aa013f2fd",
      name: "Oscar Wilde",
    },
  ];

  // const leftColumnWinners = macbookWinners.slice(0, 5);
  // const rightColumnWinners = macbookWinners.slice(5);

  useEffect(() => {
    // const winners = getMacbookWinners();
  }, []);

  const showMacWinnersClicked = async () => {
    const winnersData = await getMacbookWinners();
    setWinners(winnersData);
    setLeftColumnWinners(winnersData.slice(0, 5));
    setRightColumnWinners(winnersData.slice(5));
    setDisplayWinners(true);
  };

  const [counter, setCounter] = useState(0);
  useEffect(() => {
      setDisplayNext(counter > 10);
  },[counter]);

  useEffect(() => {
    setCounter(1)
    const interval = setInterval(() => {
      if (displayWinners) {
         setCounter((counter) => counter + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [displayWinners]);
  return (
    <Box textAlign="center" className="macbookWinnersBackground">
      <Box pt={"19%"} pl={5}>
        {displayWinners ? (
          <div style={{ display: "flex" }}>
            {/* Left column */}
            <div style={{ flex: 1 }}>
              {leftColumnWinners.map((winner, index) => {
                return (
                  counter > index && (
                    <Box display="flex" flexDirection="row" key={winner.name}>
                      <Typography
                        variant="h3"
                        color="#30fcfc"
                        className="a-text"
                        key={winner.name}
                        style={{
                          padding: 10,
                          display: "flex",
                          whiteSpace: "nowrap",
                          justifyContent: "flex-start",
                          fontFamily: "Kanit, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {index + 1}.
                      </Typography>
                      <AnimatedTypography2 actualWinner={winner.name}/>
                    </Box>
                  )
                );
              })}
            </div>

            {/* Right column */}
            <div style={{ flex: 1 }}>
              {rightColumnWinners.map(
                (winner, index) =>
                  counter > index + leftColumnWinners.length && (
                    <Box display="flex" flexDirection="row" key={winner.name}>
                    <Typography
                      variant="h3"
                      color="#30fcfc"
                      className="a-text"
                      key={winner.name}
                      style={{
                        padding: 10,
                        display: "flex",
                        whiteSpace: "nowrap",
                        justifyContent: "flex-start",
                        fontFamily: "Kanit, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {index + leftColumnWinners.length + 1}.
                    </Typography>
                    <AnimatedTypography2 actualWinner={winner.name}/>
                  </Box>
                  )
              )}
            </div>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              showMacWinnersClicked();
            }}
            disableRipple
            startIcon={
              <img
                src="select-winners.png"
                alt="Winners"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            }
            style={{
              backgroundColor: "transparent",
              width: "100%",
              boxShadow:'none',
              borderRadius: '100%',
              maxWidth: "400px",
              height: "auto",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default MacBookWinners;
