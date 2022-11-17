import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import { useGetProductDataQuery } from "../services/Api";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));
const Pincode = styled(Box)`
  display: flex;
`;
const Placeorder = styled(Box)``;
const PaymentForm = () => {
  const { data, error, isLoading } = useGetProductDataQuery("");
  console.log({ data });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>Oops, an error occured</div>;
  }
  console.log(data);
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item style={{ paddingLeft: 200 }}>
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="UPI"
              />
              <FormControlLabel control={<Checkbox />} label="Wallet" />
            </FormGroup>
          </Grid>
          <Link to="payment">
            <Placeorder style={{ paddingTop: 40, float: "right" }}>
              <Button
                style={{
                  height: 60,
                  width: 250,
                  backgroundColor: "#fb641b",
                  fontSize: 18,
                  fontWeight: 700,
                }}
                variant="contained"
              >
                CONTINUE
              </Button>
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
                
              {data.price} 
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
          <Typography
            style={{
              fontSize: 20,
              color: "#388e3c",
              paddingTop: 30,
              fontWeight: 800,
            }}
          >
            You will save ₹1,531 on this order
          </Typography>
          <Typography style={{ fontSize: 18, paddingTop: 30 }}>
            Save extra ₹25 using 25 SuperCoins on the next step Available
            Balance: 102
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default PaymentForm;
