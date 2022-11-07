import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { FormControlLabel } from '@mui/material';
import Pricedetail from "../cart/Pricedetail";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Pincode = styled(Box)`
  display: flex;
`;

const Placeorder = styled(Box)``;
const AddressForm = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [myData, setMyData] = useState([]);

  const { category, productID } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const productId = location.pathname.split(":")[1];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [isError, setIsError] = useState("");

  const RecipeReviewCard = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    console.log(myData, "check my data");
  };

  const container =
  window !== undefined ? () => window().document.body : undefined;
useEffect(() => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      const neededProduct = response.data.products?.filter((product) => {
        if (product.id == productId) {
          return true;
        }
      });
    
      setMyData(neededProduct[0]);
    })
    .catch((error) => setIsError(error.message));
}, [productId]);

useEffect(() => {
  setTimeout(() => setLoading(false), 3000)
}, [])


const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};

  


  const chalja = useNavigate();

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
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>

          <Placeorder style={{ paddingTop: 40, float: "right" }}>
            <Button
              onClick={() => chalja("/payment")}
              style={{
                height: 60,
                width: 250,
                backgroundColor: "#fb641b",
                fontSize: 18,
                fontWeight: 700,
              }}
              variant="contained"
            >
              DELIVER HERE
            </Button>
          </Placeorder>
        </Item>
      </Grid>
      <Grid item xs={4}>
       <Pricedetail price={myData.price} />
      </Grid>
    </Grid>
  );
};

export default AddressForm;
