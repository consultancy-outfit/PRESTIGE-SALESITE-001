"use client";
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactUs = () => {
  return (
   <Container
      maxWidth="lg"
      sx={{ my: 8, py: 5, background: "#F9FAFB", borderRadius: "30px" }}
    >
     <Box
     
    >
      {/* Main content container */}
      <Box
        sx={{
          backgroundColor: '#1A1A1A', // Darker background for the main card
          borderRadius: '1.5rem', // Rounded corners
          borderBottomLeftRadius: '1.5rem', // Ensure rounded bottom
          borderBottomRightRadius: '1.5rem',
          padding: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive padding
          textAlign: 'center',
          maxWidth: '900px', // Max width for content
          width: '90%', // Fluid width
          boxShadow: '0 10px 15px rgba(0,0,0,0.2)', // Subtle shadow
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* "Ready to get started?" text */}
        <Typography
          variant="body1"
          sx={{
            color: '#A4F03F', // Green color
            fontWeight: '600',
            marginBottom: '1rem',
            fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
          }}
        >
          Ready to get started?
        </Typography>

        {/* Quote text */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#FFFFFF', // White text
            fontWeight: 'bold',
            marginBottom: '2.5rem',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
            lineHeight: { xs: '1.3', sm: '1.4' }, // Responsive line height
            maxWidth: '700px', // Limit width of the quote for readability
          }}
        >
          "Prestige helps us move faster while staying fully compliant. The data quality and API reliability are unmatched."
        </Typography>

        {/* Register Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#A4F03F', // Green button background
            color: '#1A1A1A', // Dark text color
            borderRadius: '9999px', // Fully rounded button
            padding: { xs: '0.75rem 1.5rem', sm: '1rem 2rem' }, // Responsive padding
            textTransform: 'none', // Prevent uppercase text
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.1rem' }, // Responsive font size
            boxShadow: 'none', // Remove default MUI shadow
            '&:hover': {
              backgroundColor: '#8FD930', // Slightly darker green on hover
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Subtle hover shadow
            },
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Smooth transition
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
    </Container>
  );
};

export default ContactUs;
