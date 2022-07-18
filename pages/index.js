
import * as React from "react";

import styles from "../styles/Home.module.css";
import DrawerAppBar from "./navbar.js";
import { Grid } from "@mui/material";
import AutoGrid from "./api/SuccessStories";
import FullyCustomisableWebsites from "./api/FullyCustomisableWebsites";
// import { ScriptHTMLAttributes } from "react";


import NestedGrid from "./api/GridOne.js";

import BoxComponent from "./api/BoxOne";
import ColumnsGrid from "./api/GridTwo";
// import Timer from "./api/CountDown";
// import timerApp from "./api/CountDown";
// import { useTimer } from "react-timer-hook";
// import Clock from "./api/CountDown";


export default function Home() {
  return (
    <div className={styles.container}>
      <DrawerAppBar />
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* below here */}
        <ColumnsGrid />
        {/* <GridThree style={{ zIndex: 3}}/> */}
   
      </Grid>
    
      <div
        style={{
          width: "95%",
          backgroundColor: "white",
          // zIndex: "3",
          color: "black",
          position: "absolute",
          alignObjects: "center",
          left: "2.5%",
          right: "2.5%",
          textAlign: "center",
          top: "600px",
        }}
      >
        <div style={{height: '200px'}}/>
       
        <h2 style={{
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: 1.167,
    overflowWrap: 'break-word',
 animation: 'fadeIn 5s'}}>Choose your website builder plan</h2>
      
      
        {/* ============================================================ */}
        <div>
        <NestedGrid />
        </div>
        <div style={{ height: "480px" }} />
        <br />
        <div>

        <div style={{height: '120px'}}></div>
        <BoxComponent />
        </div>
        <div style={{ height: "70px" }} />

        <br/>
        
        <AutoGrid/>
        <div style={{ height: "100px" }} />


        <FullyCustomisableWebsites/>

        <div style={{height: '150px'}} />

        <h1> timer here:</h1>

{/* <Clock/> */}



{/* =================================== */}

    
    
     
     
     
{/*      
     <Clock/> */}
    
  
{/* =================================== */}
      </div>
     
    </div>
  );
}


