import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Pincode = styled(Box)`
  display: flex;
`;

const Placeorder = styled(Box)`
 
`;

const AddressForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item style={{ paddingLeft: 200 }}>
          
        <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
          <Link to="payment">
          <Placeorder style={{ paddingTop: 40, float: "right"}}>
          <Button style={{height:60, width:250,backgroundColor: "#fb641b", fontSize:18, fontWeight:700}} variant="contained">DELIVER HERE</Button>
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

export default AddressForm;