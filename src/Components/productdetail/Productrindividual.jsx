import Banner from "../home/Banner";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


//ICONS
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import DiscountIcon from '@mui/icons-material/Discount';
import CallToActionIcon from '@mui/icons-material/CallToAction';

//COMPONENT
import Pronav from "../deatail/Pronav";
import { width } from "@mui/system";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Rating = styled(Box)`
  display: flex;
  paddingBottom: 10;
`;


const Offer = styled("img")({
  width: 91,
  height: 25,
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),

  height: 100,
}));

const Productindividual = () => {
  return (
    <>
      <Pronav />

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Item style={{ paddingLeft: 100 }}>
              <img
                style={{ height: 700 }}
                src="https://rukminim1.flixcart.com/image/832/832/kynb6vk0/lunch-box/d/p/r/650-infinite-lunch-box-3-stainless-steel-containers-microwave-original-imagaufqxqgmrhk6.jpeg?q=70"
                alt="product"
              />
              <Box style={{paddingLeft:100,paddingTop:30}}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item>
                    <Button
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
                      ADD TO CART
                    </Button>
                  </Item>
                </Grid>
              </Grid>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={7}>
            <Item style={{ paddingRight: 100 }}>
              <Typography style={{ fontSize: 30 }}>
                Oliveware Infinite Lunch Box | 3 Stainless Steel Containers |
                Microwave Safe | Leak Proof 3 Containers Lunch Box (1340 ml)
              </Typography>
              <Rating>
                <Typography
                  style={{ fontSize: 20, color: "#808080", fontWeight: 900 }}
                >
                  1,189 Ratings & 95 Reviews
                </Typography>
                <Box>
                  <Offer
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="fassured"
                  />
                </Box>
              </Rating>
              <Typography
                style={{ fontSize: 20, color: "#388e3c", fontWeight: 900 }}
              >
                Special price
              </Typography>

              <Typography style={{ fontSize: 20 }}>
                <span style={{ fontSize: 42 }}>₹399</span>
                <s> ₹1,130 </s> &nbsp; 64% off
              </Typography>
              <Typography
                style={{ fontSize: 23,fontWeight: 500,paddingBottom:10 }}>
                Coupons for you
              </Typography>
              <Rating>
              <CallToActionIcon/>
              <Typography
              
                style={{ fontSize: 18}}>
                <span style={{ fontSize: 18, fontWeight:900 }}> &nbsp; Special Price</span> ₹100 off with cashback coupon on First OrderT&C
              </Typography>
              </Rating>
              <Typography
                style={{ fontSize: 23,fontWeight: 500,paddingBottom:10  }}>
                Available offers
              </Typography>
              <Rating>
              <LocalOfferIcon/>
              <Typography
              
                style={{ fontSize: 18}}>
                <span style={{ fontSize: 18, fontWeight:900 }}> &nbsp; Special Price</span> Get extra 27% off (price inclusive of cashback/coupon)T&C
              </Typography>
              </Rating>
              <Rating>
              <LocalOfferIcon/>
              <Typography
              
                style={{ fontSize: 18}}>
                <span style={{ fontSize: 18, fontWeight:900 }}> &nbsp; Partner Offer</span> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹1000* <Link>Know More</Link>
              </Typography>
              </Rating>
              <Rating>
              <LocalOfferIcon/>
              <Typography
              
                style={{ fontSize: 18}}>
                <span style={{ fontSize: 18, fontWeight:900 }}> &nbsp; Partner Offer</span> Buy this product and get upto ₹250 off on Flipkart Furniture <Link>Know More</Link>
              </Typography>
              </Rating>
              <Rating >
                <img src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/aab7fcfa792c13febd6716fea4ea44fc81489084a10bdde02f160da45fff868f.jpg?q=90" alt="adad"/>
                <Typography>
                Warranty against any manufacturing defects in material and workmanship. <Link>Know More</Link>
                </Typography>
              </Rating>
             
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Productindividual;
