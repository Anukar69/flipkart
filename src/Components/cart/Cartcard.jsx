import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeReviewCard } from "../productdetail/Productrindividual";
import Button from "@mui/material/Button";

import { Counter } from "./Counter";
import { amountParse, amountPrice } from "../../common/function";

const Item = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(1),
}));
const Placeorder = styled(Box)`
 
`;

export default function MediaControlCard(props) {
  const theme = useTheme();
  const data = amountParse(amountPrice(props.price));

  const adressurl = useNavigate()
  return (
    
    <Card sx={{ display: "flex" }}>
      <CardContent>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={props.thumbnail}
          alt="Live from space album cover"
        />
      </CardContent>
      <Box
        sx={{ display: "flex", flexDirection: "column", fontFamily: "Roboto" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>
                <Typography component="div" variant="h5">
                  {props.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ fontSize: 30 }}
                >
                  <s style={{ fontSize: 25 }}>{props.price} </s>&nbsp;
                  {data}{" "}
                  <span
                    style={{ color: "#388e3c", fontSize: 20, fontWeight: 800 }}
                  >
                    35% Off 3 offers applied
                  </span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>Delivery by Thu Oct 27 | Free₹40</Item>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <Counter/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography style={{ fontSize: 25 }}>
            Save for later &nbsp;&nbsp;&nbsp;
          </Typography>
          
         

          <Typography style={{ fontSize: 25 }}>Remove</Typography>
        </Box>

      </Box>
      <Placeorder style={{ paddingTop: 40, float: "right"}}>
          <Button
           onClick={()=> adressurl(`/adress:${props.id}`)}
           style={{height:60, width:250,backgroundColor: "#fb641b", fontSize:18, fontWeight:700}} variant="contained">PLACE ORDER</Button>
          </Placeorder>
    </Card>
  );
}
