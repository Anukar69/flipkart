import * as React from "react";
import Banner from "../home/Banner";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
  
    height: 100,
  }));
 

const Left =(props)=>{
    const navigate = useNavigate();
    return(<>
        <img
                style={{ height: 600, width:700 }}
                src={props.thumbnail}
                alt="product"
              />
              <Box style={{ paddingLeft: 100, paddingTop: 30 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Item>
                      <Button
                        onClick={() => navigate("/cartmain")}
                        style={{
                          width: 289,
                          height: 60,
                          borderRadius: 2,
                          backgroundColor: "#ff9f00",

                          fontSize: 20,
                        }}
                        variant="contained"
                      >
                        BUY NOW
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <Link>
                        <Button
                          style={{
                            width: 289,
                            height: 60,
                            borderRadius: 2,
                            color: "",
                            backgroundColor: "#ff7943",
                            fontSize: 20,
                          }}
                          variant="contained"
                        >
                          {props.price}
                        </Button>
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              </>
    )
}

export default Left;