import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Productindividual from "../productdetail/Productrindividual";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
 


  

  return (
    <>
      
      <Link to="productdetail/Productindividual">
          <Card sx={{ maxWidth: 345 }}>
            <CardActions disableSpacing>
            
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            
            </CardActions>
          
            <CardMedia
              style={{ width: 280, height: 280 }}
              component="img"
              height="194"
              image={props.thumbnail}
              alt="Paella dish"
            />
           
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              //title={title}
            />
            {/* <Typography>{price}</Typography> */}

            <Typography>Bank Offer</Typography>
            
            <Typography>Free Delivery</Typography>
             
          </Card>
           
          </Link>
    
    </>
  );
}
