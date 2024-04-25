// LoginPage.js
import React from "react";
import { Button, Typography, Box, Paper, Container } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(/main-background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the background covers the area without spaces
        backgroundPosition: "center", // Centers the background image
        textAlign: "center"
      }}
    >
      <Box>
        <img
          src="/main-screen-header.png"
          alt="Winners"
          style={{ width: "100%", maxWidth: "700px", height: "auto", marginTop: '50px' }}
        />
      </Box>
      <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location.href = "/auth/login")}
            disableRipple
            startIcon={<img src="login-button.png" alt="Winners" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />}
            style={{ backgroundColor: 'transparent',boxShadow:'none', width: '100%', maxWidth: '200px', height: 'auto', marginTop: '100px'}}
          />
    </Box>
  );
};

export default LoginPage;
