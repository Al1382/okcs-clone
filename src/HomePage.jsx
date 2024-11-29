import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';

function HomePage() {
  return (
    <div>
      {/* نوار بالایی */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            فروشگاه زنجیره‌ای افق کوروش
          </Typography>
          <Button color="inherit">ورود / ثبت‌نام</Button>
        </Toolbar>
      </AppBar>

      {/* محتوای اصلی */}
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                تخفیف‌های امروز
              </Typography>
              <Typography variant="body1">
                تمامی محصولات با تخفیف ویژه برای شما عرضه شده‌اند.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
