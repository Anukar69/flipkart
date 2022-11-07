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
import { amountParse, amountPrice } from "../../common/function";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));



const Pricedetail = (props) => {
  const count = useSelector(selectCount);
  const data = amountParse(amountPrice(props.price*count));
  return (
    <Item style={{ paddingRight: 200 }}>
      <h3>PRICE DETAIL</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
            Price (1 items)
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ textAlign: "right", fontSize: 20, paddingTop: 30 }}>
            {(props.price * count)}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
            Discount
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            style={{
              textAlign: "right",
              fontSize: 20,
              paddingTop: 30,
              color: "#388e3c",
            }}
          >
            − ₹ {(props.price*count * 35) / 100}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
            Delivery Charges
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            style={{
              textAlign: "right",
              fontSize: 20,
              paddingTop: 30,
              color: "#388e3c",
            }}
          >
            Free
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ textAlign: "left", fontSize: 20, paddingTop: 30 }}>
            Total Amount
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ textAlign: "right", fontSize: 30, paddingTop: 30 }}>
            {data}
          </Item>
        </Grid>
      </Grid>
      <Typography
        style={{
          fontSize: 20,
          color: "#388e3c",
          paddingTop: 30,
          fontWeight: 800,
        }}
      >
        You will save ₹ {(props.price*count * 35) / 100} on this order
      </Typography>
      <Typography style={{ fontSize: 18, paddingTop: 30 }}>
        Save extra ₹25 using 25 SuperCoins on the next step Available Balance:
        102
      </Typography>
    </Item>
  );
};

export default Pricedetail;
