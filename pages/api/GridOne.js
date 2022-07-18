import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { borderRadius } from "@mui/system";
import { Add } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  return (
    <Box>
      <Paper
        style={{
          border: "0.5px solid",
          width: "80%",
          height: "60px",
          top: "10%",
          bottom: "10%",
          position: "absolute",
          textAlign: "center",
          verticalAlign: "middle",
          left: "10%",
          right: "10%",
          borderRadius: "10px",
        }}
      >
        <container style={{display: "flexbox", width: '100%', height:'40px'}}>
          <span
            sx={{
              width: "90%",
              alignContent: "center",
            //   position: "absolute",
              left: "5%",
              right: "5%",
              display: 'flex',
              alignItems:'center',
              justifyContent:'center',
              verticalAlign: 'middle'

              
            }}
          >
            30-day money-back guarantee with every Zyro plan.
          </span>
        </container>
      </Paper>

      <div style={{ height: "150px" }}></div>
      <div style={{ height: "150px" }}></div>
      <Box
        sx={{
          flexGrow: 1,
          width: "95%",
          position: "absolute",
          left: "2.5%",
          right: "2.5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

<Box>
                
                
                </Box>

                <div style={{height: '80px'}}></div>

        <Grid container spacing={1.5} style={{ width: "95%" }}>
          <Grid item xs={12} md={4} lg={4}>
            <item sx={{ padding: "0.01em 16px" }}>
              <Paper
                sx={{ border: "0.5px solid ligthgrey", borderRadius: "20px" }}
              >


                <p>Website</p>

                   <div style={{height: '20px'}}></div>
             
                <p style={{ alignItems: 'left'}}>
                  Create a professional portfolio, blog, or personal website.
                </p>

                   <div style={{height: '20px'}}></div>

                <div>
                  <span>
                    <del> $11.99 </del>
                  </span>
                  <span
                    style={{
                      padding: "5px 8px",
                      margin: "0",
                      color: "#fff",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      background: "#fa2356",
                      borderRadius: "3px",
                    }}
                  >
                    75% off
                  </span>
                </div>

                <div>
                  <span>From:</span>

                  <div>
                    <span>
                      <span style={{ fontSize: "36px" }}>$2.99</span>
                    </span>
                    <span>/mo</span>
                  </div>
                </div>
                <p style={{ marginBottom: "24px", color: "#72777c", alignItems: 'left' }}>
                  VAT may apply.
                </p>
                <a
                  href="/payments/periods?plan=unleashed"
                  style={{
                    borderWidth: "0",
                    paddingTop: "10px",
                    paddingRight: "24px",
                    paddingBottom: "10px",
                    paddingLeft: "24px",
                    backgroundColor: "#583bb6",
                    borderColor: "#583bb6",
                    borderTopColor: "rgb(88, 59, 182)",
                    borderRightColor: "rgb(88, 59, 182)",
                    borderBottomColor: "rgb(88, 59, 182)",
                    borderLeftColor: "rgb(88, 59, 182)",
                    color: "#fff",
                  }}
                >
                  Select
                </a>
                <div style={{ height: "30px" }}></div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle", alignItems: 'left' }}
                    />
                    Free domain for 1 year
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    Free email for 3 months
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    24/7 Customer support
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    Marketing integrations
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle" }}
                    />
                     See all features
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />

                   
                  </span>


                </div>
              </Paper>
            </item>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <item sx={{ padding: "0.01em 16px" }}>
              <Paper
                sx={{ border: "0.5px solid ligthgrey", borderRadius: "20px" }}
              >
                <p>Website</p>

                   <div style={{height: '20px'}}></div>
                <p>
                  Create a professional portfolio, blog, or personal website.
                </p>

                   <div style={{height: '20px'}}></div>

                <div>
                  <span>
                    <del> $11.99 </del>
                  </span>
                  <span
                    style={{
                      padding: "5px 8px",
                      margin: "0",
                      color: "#fff",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      background: "#fa2356",
                      borderRadius: "3px",
                    }}
                  >
                    75% off
                  </span>
                </div>

                <div>
                  <span>From:</span>

                  <div>
                    <span>
                      <span style={{ fontSize: "36px" }}>$2.99</span>
                    </span>
                    <span>/mo</span>
                  </div>
                </div>
                <p style={{ marginBottom: "24px", color: "#72777c" }}>
                  VAT may apply.
                </p>
                <a
                  href="/payments/periods?plan=unleashed"
                  style={{
                    borderWidth: "0",
                    paddingTop: "10px",
                    paddingRight: "24px",
                    paddingBottom: "10px",
                    paddingLeft: "24px",
                    backgroundColor: "#583bb6",
                    borderColor: "#583bb6",
                    borderTopColor: "rgb(88, 59, 182)",
                    borderRightColor: "rgb(88, 59, 182)",
                    borderBottomColor: "rgb(88, 59, 182)",
                    borderLeftColor: "rgb(88, 59, 182)",
                    color: "#fff",
                  }}
                >
                  Select
                </a>
                <div style={{ height: "30px" }}></div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    Free domain for 1 year
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    Free email for 3 months
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle" ,  alignItems: 'left'}}
                    />
                    24/7 Customer support
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle", alignItems: 'left' }}
                    />
                    Marketing integrations
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle" }}
                    />
                    See all features
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>
              </Paper>
            </item>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <item sx={{ padding: "0.01em 16px" }}>
              <Paper
                sx={{ border: "0.5px solid ligthgrey", borderRadius: "20px" }}
              >
                <p>Website</p>

                   <div style={{height: '20px'}}></div>
                <p>
                  Create a professional portfolio, blog, or personal website.
                </p>

                   <div style={{height: '20px'}}></div>

                <div>
                  <span>
                    <del> $11.99 </del>
                  </span>
                  <span
                    style={{
                      padding: "5px 8px",
                      margin: "0",
                      color: "#fff",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      background: "#fa2356",
                      borderRadius: "3px",
                    }}
                  >
                    75% off
                  </span>
                </div>

                <div>
                  <span>From:</span>

                  <div>
                    <span>
                      <span style={{ fontSize: "36px" }}>$2.99</span>
                    </span>
                    <span>/mo</span>
                  </div>
                </div>
                <p style={{ marginBottom: "24px", color: "#72777c" }}>
                  VAT may apply.
                </p>
                <a
                  href="/payments/periods?plan=unleashed"
                  style={{
                    borderWidth: "0",
                    paddingTop: "10px",
                    paddingRight: "24px",
                    paddingBottom: "10px",
                    paddingLeft: "24px",
                    backgroundColor: "#583bb6",
                    borderColor: "#583bb6",
                    borderTopColor: "rgb(88, 59, 182)",
                    borderRightColor: "rgb(88, 59, 182)",
                    borderBottomColor: "rgb(88, 59, 182)",
                    borderLeftColor: "rgb(88, 59, 182)",
                    color: "#fff",
                  }}
                >
                  Select
                </a>
                <div style={{ height: "30px" }}></div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle", alignItems: 'left' }}
                    />
                    Free domain for 1 year
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle", alignItems: 'left' }}
                    />
                    Free email for 3 months
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle" ,  alignItems: 'left'}}
                    />
                    24/7 Customer support
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>

                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle",  alignItems: 'left' }}
                    />
                    Marketing integrations
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <DoneIcon
                      style={{ color: "green", verticalAlign: "middle" }}
                    />
                    See all features
                    <ErrorOutlineIcon
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        fontSize: "15px",
                      }}
                    />
                  </span>
                </div>
              </Paper>
            </item>
          </Grid>
        </Grid>

        <div style={{height: '30px'}}></div>
        <a style={{ color: '#583bb6'}}><AddIcon style={{ color: '#583bb6'}}/>See all features</a>
        <div style={{height: '30px'}}></div>
      </Box>
      
    </Box>
  );
}
