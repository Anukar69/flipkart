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

const Cartmain = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [myData, setMyData] = useState([]);

  const { category, productID } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {loading === false ? (
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
              <Cartcard
                thumbnail={myData.thumbnail}
                price={myData.price}
                id={myData.id}
                description={myData.description}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Pricedetail price={myData.price} />
          </Grid>
        </Grid>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Cartmain;
