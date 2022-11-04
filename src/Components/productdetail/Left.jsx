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

const Left = (props) => {


  const navigate = useNavigate()
  const navigateToUrl = useNavigate()
  
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <>
      <img
        style={{ height: 500, width: 600 }}
        src={props.thumbnail}
        
        alt="product image alt"
      />
      <Box style={{ paddingLeft: 100, paddingTop: 30 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Button
               onClick={() => navigateToUrl(`/cartmain:${props.id}`)}
               // onClick={() => navigateToUrl("/Cartmain")}
              
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
                    paddingRight:20,
                  }}
                  variant="contained"
                  onClickFunc={incrementCounter}
                >
                  Add to CART
                </Button>
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Left;
