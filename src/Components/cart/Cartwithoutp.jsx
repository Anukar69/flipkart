import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Cartcard from "./Cartcard";
import { fontSize } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pricedetail from "./Pricedetail";
import LoadingScreen from "../../common/LoadingScreen";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Pincode = styled(Box)`
  display: flex;
`;

const Placeorder = styled(Box)``;

const Cartwithoutp = () => {

  return (
    <>
    
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item style={{ paddingLeft: 200 }}>
              <h2 style={{ textAlign: "center" }}>Flipkart</h2>
              <Pincode
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  borderStyle: "ridge",
                }}
              >
                <Typography style={{ paddingLeft: 15 }}>
                  ADDRESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Typography>
                <Button style={{ fontWeight: "900" }} variant="outlined">
                  Enter Delivery Pincode{" "}
                </Button>
              </Pincode>
             
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Pricedetail/>
          </Grid>
        </Grid>
    </>
  );
};

export default Cartwithoutp;
