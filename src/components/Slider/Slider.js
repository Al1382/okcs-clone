import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

export default function HeaderImg() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [imageHeight, setImageHeight] = React.useState(0);

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Calculate the image height dynamically
  React.useEffect(() => {
    const img = new Image();
    img.src = images[currentImageIndex];
    img.onload = () => {
      const aspectRatio = img.height / img.width;
      setImageHeight(window.innerWidth * aspectRatio);
    };
  }, [currentImageIndex]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          margin: 0,
          padding: 0,
          position: 'relative',
          width: '100%',
          height: imageHeight,
          boxShadow: 1,
          overflow: 'hidden',
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={() => changeImage('prev')}
          sx={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            color: 'white',
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 1s ease',
          }}
        />

        {/* Right Arrow */}
        <IconButton
          onClick={() => changeImage('next')}
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            color: 'white',
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Dots at the Bottom Center */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToImage(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
}
