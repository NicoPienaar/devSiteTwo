import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BoxComponent() {
  return (
    
    <Box  style={{textAlign: 'left', paddingLeft: '20px', backgroundColor: 'lightgrey', width: '65%', height: '130px', position: 'absolute', left: '17.5%', right: '17.5%', borderRadius: '10px',}}>
      <h4>Which plan is best for you?</h4>
      <p >Still not sure which plan to pick? Don't worry, the Zyro pricing wizard will guide you to your perfect plan.</p>
      <button style={{fontSize: '16px',lineHeight: '1.5',color: '#583bb6',cursor: 'pointer',background: 'none',border: 'none'}}>Try pricing wizard<ArrowForwardIcon style={{color: '#583bb6', verticalAlign: 'middle'}}/></button>
    </Box>
  );
}
