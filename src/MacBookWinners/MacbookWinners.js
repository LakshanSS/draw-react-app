import React, { useState, useEffect } from "react";
import "./MacBookWinners.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { getMacbookWinners} from "../api/api";

const MacBookWinners = ({setDisplayNext}) => {
  const [displayWinners, setDisplayWinners] = useState(false);
  const [winners, setWinners] = useState([]);
  // const macbookWinners = [
  //   "Alice Cooper",
  //   "Bob Green",
  //   "Charlie Davidson",
  //   "Diana Maxwell",
  //   "Eve Johnson",
  //   "Frank Erickson",
  //   "Grace Maddison",
  //   "Henry Jake",
  //   "Isla Dominic",
  //   "Jack Oliver",
  // ];

  useEffect(() => {
    // const winners = getMacbookWinners();
  }, []);

  const showMacWinnersClicked = async () => {
    const winnersData = await getMacbookWinners();
    setWinners(winnersData);
    setDisplayWinners(true);
    setDisplayNext(true);
  }

  return (
    <Box textAlign="center">
      <Typography variant="h2" color="white">
        10 Lucky MacBook Pro Winners!
      </Typography>
      <Box mt={10}>
        {displayWinners ? (
          <div>
            {winners.map((winner) => (
              <Typography
                variant="h4"
                color="white"
                key={winner}
                style={{ padding: 10 }}
              >
                {winner}
              </Typography>
            ))}
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              showMacWinnersClicked();
            }}
          >
            See Winners
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MacBookWinners;
