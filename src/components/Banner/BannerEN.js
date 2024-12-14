import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: '#FFA500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0',
        position: 'relative',
        marginTop: '30px',
        marginBottom: '13px',
      }}
    >
      {/* Left Icon */}
      <Box
        component="img"
        src="/icons/left.png"
        alt="Left Icon"
        sx={{
          width: '50px',
          position: 'absolute',
          top: '0',
          left: 'calc(50% - 250px)',
        }}
      />

      {/* Center Text */}
      <Typography
        variant="h6"
        sx={{
          color: 'white',
          fontFamily: 'Vazirmatn',
          fontSize: { xs: '24px', sm: '30px' },
          fontWeight: 'bold',
          zIndex: 1,
        }}
      >
        Today's Discounts
      </Typography>

      {/* Right Icon */}
      <Box
        component="img"
        src="/icons/right.png"
        alt="Right Icon"
        sx={{
          width: '50px',
          position: 'absolute',
          top: '0',
          right: 'calc(50% - 250px)',
        }}
      />
    </Box>
  );
}
