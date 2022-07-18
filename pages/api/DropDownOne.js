import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Typography } from '@mui/material';


export default function DropDownOne() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div sx={{position:'absolute', right:'0', backgroundColor: 'blue', zIndex: 1}}>
      <Button
        id="basic-button" sx ={{backgroundColor: 'inherit', color: 'white'}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
          Why Zyro
      
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{fontWeight:'100px'}}><span><PersonIcon style={{color: "#fb506e", verticalAlign: 'middle'}}/> For personal websites<br/><i style={{fontSize:'10px', color:'grey'}}>Create portfolios, blogs, and more</i></span></MenuItem>
        <MenuItem onClick={handleClose}><span><ShoppingBagIcon style={{color: "#fb506e", verticalAlign: 'middle'}}/>For small online stores and businesses<br/><i style={{fontSize:'10px', color:'grey'}}>Start selling instantly and build your brand</i></span></MenuItem>
        <MenuItem onClick={handleClose}><span><ShoppingCartIcon style={{color: "#fb506e", verticalAlign: 'middle'}}/>For advanced online stores and businesses<br/><i style={{fontSize:'10px', color:'grey'}}>Scale with powerful marketing integrations</i></span></MenuItem>
      </Menu>
    </div>
  );
}
