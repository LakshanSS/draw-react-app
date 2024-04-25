import React, { useState, useEffect } from "react";
import "./MacBookWinners.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getMacbookWinners } from "../api/api";
import { AnimatedTypography } from "../AnimatedTypography/AnimatedTypography";

const MacBookWinners = ({ setDisplayNext }) => {
  const [displayWinners, setDisplayWinners] = useState(false);
  const [winners, setWinners] = useState([]);
  const [leftColumnWinners, setLeftColumnWinners] = useState([]);
  const [rightColumnWinners, setRightColumnWinners] = useState([]);

  const macbookWinners = [
    {
      orgId: "603ee67d-f752-4223-8613-2849091a999a",
      name: "Philip",
    },
    {
      orgId: "020e2bc8-f897-4521-aa7d-6a083982f234",
      name: "Kasun T",
    },
    {
      orgId: "910d8c3f-ba85-4197-803c-871a29817e06",
      name: "Maduranga Rathnamalala",
    },
    {
      orgId: "b8234034-82f9-49e2-ab6f-885e9072bed9",
      name: "Sachini Dissanayaka",
    },
    {
      orgId: "cbab72d1-592f-4164-b01e-906d33d0634d",
      name: "Naqeeb Maknojia",
    },
    {
      orgId: "7fa3d30c-984a-43f0-a72c-65ca28d2518b",
      name: "Jangid Jeetmal",
    },
    {
      orgId: "ff6624d3-6f80-4991-9751-e3a227baa3b0",
      name: "Kelum Thenuwara",
    },
    {
      orgId: "6a14cba3-52c3-4c06-89b0-1c8540533c3c",
      name: "Lakvin Amarasinghe",
    },
    {
      orgId: "7d22e454-0f59-40b8-9e47-334c1f83424a",
      name: "Mohamed Fathir",
    },
    {
      orgId: "ed37af5d-1211-464f-b1ca-6d1aa013f2fd",
      name: "Anjala Dilhara",
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
    // setDisplayNext(true);
  };

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setDisplayNext(counter> 10);
  },[counter]);
  useEffect(() => {
    setCounter(1)
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayWinners]);
  return (
    <Box textAlign="center">
      <Box>
        <img
          src="/macbook-pro-winners-header.png"
          alt="Winners"
          style={{ width: "100%", maxWidth: "800px", height: "auto", marginTop: "50px"}}
        />
      </Box>
      <Box mt={10}>
        {displayWinners ? (
          <div style={{ display: "flex" }}>
            {/* Left column */}
            <div style={{ flex: 1 }}>
              {leftColumnWinners.map((winner, index) => {
                return (
                  counter > index && (
                    <Box display="flex" flexDirection="row" key={winner.name}>
                      <Typography
                        variant="h2"
                        color="#30fcfc"
                        className="a-text"
                        key={winner.name}
                        style={{
                          padding: 10,
                          display: "flex",
                          whiteSpace: "nowrap",
                          justifyContent: "flex-start",
                          fontFamily: "Kanit, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {index + 1}.
                      </Typography>
                      <AnimatedTypography text={winner.name} />
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
                      variant="h2"
                      color="#30fcfc"
                      className="a-text"
                      key={winner.name}
                      style={{
                        padding: 10,
                        display: "flex",
                        whiteSpace: "nowrap",
                        justifyContent: "flex-start",
                        fontFamily: "Kanit, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {index + leftColumnWinners.length + 1}.
                    </Typography>
                    <AnimatedTypography text={winner.name} />
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
                src="select-now-button.png"
                alt="Winners"
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
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
