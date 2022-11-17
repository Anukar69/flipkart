import * as React from "react";
import Banner from "../home/Banner";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

//ICONS
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DiscountIcon from "@mui/icons-material/Discount";
import CallToActionIcon from "@mui/icons-material/CallToAction";

//COMPONENT
import Pronav from "../deatail/Pronav";
import { width } from "@mui/system";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Left from "./Left";
import { Description } from "@material-ui/icons";

const Rating = styled(Box)`
  display: flex;
  paddingbottom: 10;
`;

const Offer = styled("img")({
  width: 91,
  height: 25,
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 100,
}));

const Propductindi = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [myData, setMyData] = useState([]);
  const { category, productID } = useParams();
  const location = useLocation();

  const productId = location.pathname.split(":")[1];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isError, setIsError] = useState("");

  const RecipeReviewCard = () => {
    const [isError, setIsError] = useState("");
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([""]);
    const [loading, setLoading] = useState;

    console.log(category, "check my data");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    if (productId) {
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
    }
  }, [productId]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <>
      <Pronav />

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            
            <Left
                  thumbnail={myData.thumbnail}
                  price={myData.price}
                  id={myData.id}
                />
          </Grid>

          <Grid item xs={7}>
          
              <Typography style={{ fontSize: 30 }}>
                {myData.description}
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
                <span style={{ fontSize: 42 }}>{myData.price}</span>
                <s> ₹3,130 </s> &nbsp; 64% off
              </Typography>
              <Typography
                style={{ fontSize: 23, fontWeight: 500, paddingBottom: 10 }}
              >
                Coupons for you
              </Typography>
              <Rating>
                <CallToActionIcon />
                <Typography style={{ fontSize: 18 }}>
                  <span style={{ fontSize: 18, fontWeight: 900 }}>
                    {" "}
                    &nbsp; Special Price
                  </span>{" "}
                  ₹100 off with cashback coupon on First OrderT&C
                </Typography>
              </Rating>
              <Typography
                style={{ fontSize: 23, fontWeight: 500, paddingBottom: 10 }}
              >
                Available offers
              </Typography>
              <Rating>
                <LocalOfferIcon />
                <Typography style={{ fontSize: 18 }}>
                  <span style={{ fontSize: 18, fontWeight: 900 }}>
                    {" "}
                    &nbsp; Special Price
                  </span>{" "}
                  Get extra 27% off (price inclusive of cashback/coupon)T&C
                </Typography>
              </Rating>
              <Rating>
                <LocalOfferIcon />
                <Typography style={{ fontSize: 18 }}>
                  <span style={{ fontSize: 18, fontWeight: 900 }}>
                    {" "}
                    &nbsp; Partner Offer
                  </span>{" "}
                  Sign up for Flipkart Pay Later and get Flipkart Gift Card
                  worth upto ₹1000* <Link>Know More</Link>
                </Typography>
              </Rating>
              <Rating>
                <LocalOfferIcon />
                <Typography style={{ fontSize: 18 }}>
                  <span style={{ fontSize: 18, fontWeight: 900 }}>
                    {" "}
                    &nbsp; Partner Offer
                  </span>{" "}
                  Buy this product and get upto ₹250 off on Flipkart Furniture{" "}
                  <Link>Know More</Link>
                </Typography>
              </Rating>
              <Rating>
                <img
                  src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/aab7fcfa792c13febd6716fea4ea44fc81489084a10bdde02f160da45fff868f.jpg?q=90"
                  alt="adad"
                />
                <Typography>
                  Warranty against any manufacturing defects in material and
                  workmanship. <Link>Know More</Link>
                </Typography>
              </Rating>
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Propductindi;
