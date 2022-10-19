import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Cartcard from "./Cartcard";
import { fontSize } from "@mui/system";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Pincode = styled(Box)`
  display: flex;
`;

const Placeorder = styled(Box)`
 
`;

const Cartmain = () => {
    const chalja = useNavigate()
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item style={{ paddingLeft: 200 }}>
          <h2 style={{ textAlign: "center" }}>Flipkart</h2>
          <Pincode
            style={{ paddingTop: 20, paddingBottom: 15, borderStyle: "ridge" }}
          >
            <Typography style={{ paddingLeft: 15 }}>
              FROM SAVED
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
          <Cartcard />
          <Cartcard />
          <Link>
          <Placeorder style={{ paddingTop: 40, float: "right"}}>
          <Button
           onClick={()=> chalja("/adress")}
           style={{height:60, width:250,backgroundColor: "#fb641b", fontSize:18, fontWeight:700}} variant="contained">PLACE ORDER</Button>
          </Placeorder>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item style={{ paddingRight: 200 }}>
          <h3>PRICE DETAIL</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
                Price (2 items)
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                style={{ textAlign: "right", fontSize: 20, paddingTop: 30 }}
              >
                ₹2,629
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
                Discount
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                style={{ textAlign: "right", fontSize: 20, paddingTop: 30,color: "#388e3c" }}
              >
                − ₹1,531
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
                Delivery Charges
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                style={{ textAlign: "right", fontSize: 20, paddingTop: 30, color: "#388e3c" }}
              >
                Free
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item style={{ textAlign: "left", fontSize: 30, paddingTop: 30 }}>
                Total Amount
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                style={{ textAlign: "right", fontSize: 30, paddingTop: 30 }}
              >
                ₹1,098
              </Item>
            </Grid>
          </Grid>
          <Typography style={{fontSize:20 , color: "#388e3c",paddingTop:30,fontWeight:800}}>You will save ₹1,531 on this order</Typography>
          <Typography style={{fontSize:18 ,paddingTop:30}}>
            Save extra ₹25 using 25 SuperCoins on the next step
            Available Balance: 102
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Cartmain;
