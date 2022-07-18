// import * as React from 'react';

import React, {Component} from "react";
// import { styled } from '@mui/material/styles';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { motion, AnimatePresence } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Profile from "./trustPilot";
// import FullWidthTabs from "./trustPilot";
// import App from '../PageProps';
import {useRouter} from "next/router";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";






// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
   
    <Box>
<motion.div initial="hidden" animate="visible" variants={{
    hidden: {
        scale: .0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        zIndex: 3,
        transition: {
            delay: .4,
        }
    },
}}>
<h2 style={{color: 'black'}}>
		Zyro success stories
        </h2>
</motion.div>

<div style={{height : '20px'}}/>
<p>
		Join over 250,000 small business owners. Find out what you can do with a Zyro website
	</p>



 {/* =================================here================================= */}

 {/* <FullWidthTabs/> */}

 <Profile/>



 {/* ======================================================================== */}
    <div style={{height : '20px'}}/>
      <Grid container spacing={0}>

        <Grid item xs={12} md={4}>
          <item style={{color: "#fb506e",  backgroundColor:'transparent', width:'50%', fontWeight: '200', animation: 'fadeIn 5s5s'}}><u>Clients</u></item>
        </Grid>
        <Grid item xs={12} md={4}>
          <item style={{color: "#fb506e",  backgroundColor:'transparent', width:'50%', fontWeight: '200', animation: 'fadeIn 5s'}}><u>Tech experts</u></item>
        </Grid>
        <Grid item xs={12} md={4}>
          <item style={{color: "#fb506e",  backgroundColor:'transparent', width:'50%', fontWeight: '200', animation: 'fadeIn 5s'}}><u>Trustpilot</u></item>
        </Grid>
  
      </Grid>

{/* =========================
<ul className="grid">
    {results.map(result => {
        const {id, name, image} = result;
        return(
            <motion.li key={id} className="card" whileHover={{
                position: 'relative', 
                zIndex: 1,
                background: 'white', 
                scale: [1, 1.4, 1.2],
                filter:[
                    'hue-rotate(0) contrast(100%)',
                    'hue-rotate(360deg) contrast(200%)',
                    'hue-rotate(45deg) contrast(100%)'
                ],
                transition:{
                    duration: .2
                }
                
            }}>
                <h1> hi there </h1>
            </motion.li>
        )
    })}
</ul> */}

{/* ========================= */}











 <div style={{height: '30px'}}/>
      <Grid container spacing={3}>
  <Grid item xs={12} md={6} lg={4}>
    <item><Paper style={{borderRadius: '15px', height: '180px'}}><p style={{marginBottom: '32px',
    color:'#474b4f', alignText: 'left', animation: 'fadeIn 5s'}}>
						"A portfolio is all about making an impression. 
                        I wanted a solution with great templates so that people 
                        can find my work easily and quickly."
					</p></Paper></item>
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <item><Paper style={{borderRadius: '15px', height: '180px'}}><p style={{marginBottom: '32px',
    color:'#474b4f', alignText: 'left', animation: 'fadeIn 5s'}}>
						"Zyro really empowers new businesses because you don’t 
                        need a lot of time, money, or experience to make it work.  
                        You can invest that straight back into your business."
					</p></Paper></item>
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <item><Paper style={{borderRadius: '15px', height: '180px'}}><p style={{marginBottom: '32px',
    color:'#474b4f', alignText: 'left', animation: 'fadeIn 5s'}}>
						"I needed a simple website, very fast, to get found online and start my business. 
                        Now, I’m ready to take the next step with Zyro and create an online store."
					</p></Paper></item>
  </Grid>
</Grid>

<div style ={{height: '30px'}}/>
<Grid container spacing={2} columns={16}>
  <Grid item xs={12} md={6} >
    <item>
        <div style={{height: '20px'}}/>
    <h2 style={{
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: 1.167,
    overflowWrap: 'break-word',
 animation: 'fadeIn 5s'}}>Build fast. Grow faster. Load fastest.</h2>
    <div style={{height: '20px'}}/>
    <p style={{marginBottom: '32px',
    color:'#474b4f', animation: 'fadeIn 5s'}}>Get a professional website that loads at lightning speed. Convert more of your website traffic into paying customers and rank higher on search engines.
			</p>
            <div style={{height: '20px'}}/>

            <a style={{ backgroundColor: '#fa2356',borderColor: '#fa2356', color: '#fff', position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    overflow: 'hidden',
    font: 'inherit',
    fontWeight: 500,
    lineHeight: 1.67,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.188em',
    cursor: 'pointer',
    border: '0 solid rgba(0,0,0,0)',
    borderRadius: '50px',
    fontSize: '12px',
    padding: '16px 38px',
    borderWidth: 0, animation: 'fadeIn 5s'}}href="/signup" ><span></span> 
					Start for free
				</a>

    </item>
  </Grid>
  <Grid item xs={12} md ={6}>
    <item>
        <img style={{animation: 'fadeIn 5s'}} src='https://zyro.com/cdn-cgi/image/w=800,q=85,f=auto/images/homePage/headphones.png'/>
    </item>
  </Grid>
</Grid>



<Grid container spacing={3} columns={16}>
  <Grid item xs={12} md={8}>
    <item>
        <img style={{animation: 'fadeIn 5s'}} src='https://zyro.com/cdn-cgi/image/w=800,q=85,f=auto/images/homePage/pop-up.png'/>
    </item>
  </Grid>
  <Grid item xs={12} md={8}>
    <item>

    <div style={{height: '50px'}}/>
    <h2 style={{
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: 1.167,
    overflowWrap: 'break-word',
animation: 'fadeIn 5s'}}>Customer support. Ready 24/7.
			</h2>

            <div style={{height: '30px'}}/>

            <p style={{marginBottom: '32px',
    color:'#474b4f',animation: 'fadeIn 5s'}}>
				Stuck? Not for long. Our live support team can help, no matter the time of day (or night).
			</p>

            <div style={{height: '30px'}}/>
            <a style={{ backgroundColor: '#fa2356',borderColor: '#fa2356', color: '#fff', position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    overflow: 'hidden',
    font: 'inherit',
    fontWeight: 500,
    lineHeight: 1.67,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.188em',
    cursor: 'pointer',
    border: '0 solid rgba(0,0,0,0)',
    borderRadius: '50px',
    fontSize: '12px',
    padding: '16px 38px',
    borderWidth: 0, animation: 'fadeIn 5s'}} href="/signup" ><span></span> 
					Start for free
				</a>
    </item>
  </Grid>
</Grid>

<div style={{height: '30px'}}/>


<Grid container spacing={2} columns={16}>
  <Grid item xs={16} md={8}>
    <item>
    <Box style={{textAlign: 'left'}}>
    <h2 style={{textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: 1.167,
    overflowWrap: 'break-word',
}}>Sell online with no hidden fees</h2>

<p style={{textAlign: 'left', display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px', marginBottom: '32px',
    color:'#474b4f',animation: 'fadeIn 5s'}}>Zyro's powerful eCommerce builder has everything you need to start, manage and grow your business online without taking a cut of your profits.</p>
 </Box>
    </item>
  </Grid>
  <Grid item xs={16} md={8}>
    <item></item>
  </Grid>
</Grid>

<div style={{height: '30px'}}/>

<Grid container spacing={2} columns={16}>
  <Grid item xs={16} md={8}>
    <item>
    <Box style={{textAlign: 'left'}}>
    <div>
        <p style={{marginBottom: '8px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.5715,
    overflowWrap: 'break-word',
    letterSpacing: '.1786em',
    textTransform: 'uppercase', textAlign:'left'}}><AccessTimeIcon style={{color: '#fa2356', verticalAlign: 'middle', fontSize: '22px'}}/>SET UP IN MINUTES</p>
        <span style={{marginBottom: '32px',
    color:'#474b4f',textAlign: 'left',animation: 'fadeIn 5s'}}>Use our all-in-one eCommerce platform to build your shop and start selling online today.</span>
    </div>

   <div style={{height: '30px'}}/>

    <div>
        <p style={{marginBottom: '8px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.5715,
    overflowWrap: 'break-word',
    letterSpacing: '.1786em',
    textTransform: 'uppercase', textAlign:'left'}}><LanguageIcon style={{color: '#fa2356', verticalAlign: 'middle', fontSize: '22px'}}/>SELL EVERYWHERE</p> 
    <span style={{marginBottom: '32px',
    color:'#474b4f',textAlign: 'left',animation: 'fadeIn 5s'}}>Make your products available on your online store, Facebook and Instagram</span>
    </div>

    <div style={{height: '30px'}}/>
    {/* ============================================================ =     1 */}
    <div>
    <p style={{marginBottom: '8px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.5715,
    overflowWrap: 'break-word',
    letterSpacing: '.1786em',
    textTransform: 'uppercase', textAlign:'left',animation: 'fadeIn 5s'}}><CheckCircleOutlineIcon style={{color: '#fa2356', verticalAlign: 'middle', fontSize: '22px'}}/>MANAGEMENT MADE EASY</p>
        <span style={{marginBottom: '32px',
    color:'#474b4f',textAlign: 'left'}}>Whether it's inventory, shipping, or even taxes, our automatic tools will do the hard work for you.</span>
    </div>

   <div style={{height: '30px'}}/>

    {/* ==============================================================      2 */}
    <div>
    <p style={{marginBottom: '8px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.5715,
    overflowWrap: 'break-word',
    letterSpacing: '.1786em',
    textTransform: 'uppercase', textAlign:'left',animation: 'fadeIn 5s'}}><TrendingUpIcon style={{color: '#fa2356', verticalAlign: 'middle', fontSize: '22px'}}/>GROW YOUR BUSINESS</p>
        <span style={{marginBottom: '32px',
    color:'#474b4f',textAlign: 'left'}}>Unleash the power of our AI tools and third party marketing tools to scale your online business.</span>
    </div>

   <div style={{height: '30px'}}/>

    {/* ==============================================================       3 */}
    <div>
    <p style={{marginBottom: '8px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.5715,
    overflowWrap: 'break-word',
    letterSpacing: '.1786em',
    textTransform: 'uppercase', textAlign:'left',
    animation: 'fadeIn 5s'}}><FolderOpenIcon style={{color: '#fa2356', verticalAlign: 'middle', fontSize: '22px'}}/>MULTIPLE PAYMENT OPTIONS</p>
        <span style={{marginBottom: '32px',
    color:'#474b4f',textAlign: 'left'}}><span>Zyro Business, Online Store and Advanced Store plans support all of the most popular payment methods. From PayPal and Visa to Mastercard and more, accept online payments from all over the globe. <a href="/payment-methods">
	See payment gateways
</a>.</span></span>
    </div>

   <div style={{height: '30px'}}/>
   

    </Box>  
    </item>
  </Grid>
  <Grid item xs={8}>
    <item>
        <img style={{height: '450px', width: '500px', alignItems: 'right'}} src='https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/homePage/shopping-cart.png'/>
    </item>
  </Grid>



  <a style={{ backgroundColor: '#fa2356',borderColor: '#fa2356', color: '#fff', position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    overflow: 'hidden',
    font: 'inherit',
    fontWeight: 500,
    lineHeight: 1.67,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.188em',
    cursor: 'pointer',
    border: '0 solid rgba(0,0,0,0)',
    borderRadius: '50px',
    fontSize: '12px',
    padding: '16px 38px',
    borderWidth: 0, animation: 'fadeIn 5s'}} href="/signup" ><span></span> 
					Start for free
				</a>






</Grid>

<div style={{height: '30px'}}> </div>

<h2 >Create a website you're proud of in 5 steps</h2>


    
    </Box >
    
    
  );
}
