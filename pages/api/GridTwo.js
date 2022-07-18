import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import App from './CountDown';

import Timer from './timer';
import FlawlessTemplates from './flawlessTemplates';
import GridThree from './GridThree';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={12} md={6} lg={6}>
          <Item>
          <video
              src={"https://zyro.com/_nuxt/videos/hero.e87c7d8.mp4"}
              autoPlay="autoplay"
              loop="loop"
              muted="muted"
              playsInline=""
              style={{
                height: "350px",
                width: "370px",
                position: "absolute",
                top: "70px",
                left: "30px",
              }}></video>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item> 
            <FlawlessTemplates />
            <button style={{backgroundcolor: '#583bb6', borderRadius:'20px',zIndex: 3, padding: '16px 20px'}}>START FOR FREE</button>
          </Item>
        
        </Grid>
      </Grid>
      <div style={{height:' 70px', display:'flex'}}>
          </div>
          {/* <Timer/> */}
          {/* <GridThree/> */}
          {/* <App style={{zIndex: 4}}/> */}
    </Box>
      
  );
}
