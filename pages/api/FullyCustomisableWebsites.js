import React from "react";
import { Grid } from "@mui/material";
// import SwipeableTextMobileStepper from "./Carousel";
// import DotsMobileStepper from "./Carousel";
// import Example from "./CarouselTwo";
// import Carousel from "./CarouselTwo";


function FullyCustomisableWebsites() {
  return (
    <div>
      <h2
        style={{
          fontFamily: "Roboto",
          fontSize: "48px",
          fontWeight: "500",
          lineHeight: 1.167,
          overflowWrap: "break-word",
        }}
      >
        Fully customizable website templates
      </h2>

      {/* style={{opacity: 1,
    transition: 'all .35s ease',
    transform: 'translateY(0)',
    }} */}

      <p style={{ marginBottom: "32px", color: "#474b4f" }}>
        Designer-made templates built to meet your needs. Choose a template and
        edit anything – change colors, fonts, images, and more. No coding skills
        needed.
      </p>

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          left: "20%",
          right: "20%",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs="auto">
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#fa2356",
                    borderBottom: "2px solid #fa2356",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  <u>Popular templates</u>
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  Portfolio
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  eCommerce
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    hover: { background: "#f3f3f3" },
                    backgroundColor: 'transparent'
                  }}
                >
                  Blog
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  Business
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  Resume
                </button>
              </div>
            </item>
          </Grid>

          <Grid item xs={16} md={1.5}>
            <item>
              <div>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#474b4f",
                    borderBottom: "2px solid #474b4f",
                    border: "none",
                    fontFamily: "Roboto,fallback-font",
                    backgroundColor: 'transparent'
                  }}
                >
                  Events
                </button>
              </div>
            </item>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: "70px" }} />

      <Grid container spacing={1} columns={16}>
        <Grid item xs={16} md={5}>
          
        <item style={{boxSizing: 'border-box',
    padding: 0,
    margin: 0}}>
                  <img style ={{width: '250px', height: '280px', borderRadius: '7px'}} src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/homePage/template-popular-one.png"/>
          </item>
         
        </Grid>

        <Grid item xs={16} md={5}>
          
        <item style={{boxSizing: 'border-box',
    padding: 0,
    margin: 0}}>
                  <img style ={{width: '250px', height: '280px', borderRadius: '7px'}} src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/homePage/template-popular-two.png"/>
          </item>
         
        </Grid>

        <Grid item xs={16} md={5}>
          
          <item style={{boxSizing: 'border-box',
    padding: 0,
    margin: 0}}>
                  <img style ={{width: '250px', height: '280px', borderRadius: '7px'}} src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/homePage/template-popular-three.png"/>
          </item>
         
        </Grid>
      </Grid>

      <div style={{
    height: '30px'
      }}/>
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
					Explore templates
				</a>

<div style={{height: '30px'}}/>

        {/* ============================================ */}

       <h2 style={{
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: 1.167,
    overflowWrap: 'break-word',
 animation: 'fadeIn 5s'}}>Create a website you're proud of in 5 steps</h2>



 <div style={{height: '30px'}}/>




 {/* <DotsMobileStepper/> */}
 {/* <SwipeableTextMobileStepper/> */}

{/* <Example/> */}

{/* <Carousel/> */}
    </div>
  );
}

export default FullyCustomisableWebsites;
