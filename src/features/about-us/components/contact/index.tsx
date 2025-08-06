"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ContactUs = () => {
  return (
    <Box
      sx={{
      
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // Dark background color
        color: '#fff', // White text color for contrast
        padding: { xs: 2, md: 4 }, // Responsive padding
        borderRadius: '16px', // Rounded corners for the entire section
        fontFamily: 'Inter, sans-serif', // Using Inter font as specified
      }}
    >
      
        {/* "Ready to get started?" text */}
        <Typography
          variant="body1"
          sx={{
            color: '#00FF00', // Green color
            marginBottom: { xs: 2, md: 3 }, // Responsive margin-bottom
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size
          }}
        >
          Ready to get started?
        </Typography>

        {/* The main quote */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, // Responsive font size
            lineHeight: { xs: 1.3, md: 1.2 }, // Responsive line height
            marginBottom: { xs: 4, md: 6 }, // Responsive margin-bottom
            maxWidth: '800px', // Max width for the quote
            mx: 'auto', // Center the quote
          }}
        >
          &ldquo;Prestige helps us move faster while staying fully compliant. The data quality and API reliability are unmatched.&rdquo;
        </Typography>

        {/* Register Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#90EE90', // Light green background for the button
            color: '#000', // Black text color for the button
            padding: { xs: '10px 20px', md: '12px 24px' }, // Responsive padding
            borderRadius: '9999px', // Fully rounded corners
            textTransform: 'none', // Prevent uppercase text
            fontWeight: 'bold',
            fontSize: { xs: '1rem', md: '1.1rem' }, // Responsive font size
            '&:hover': {
              backgroundColor: '#7CFC00', // Darker green on hover
            },
            boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.3)', // Subtle green shadow
          }}
        >
          Register
        </Button>
     
    </Box>
  );
};

export default ContactUs;