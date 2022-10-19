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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  
}));


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
    <CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://rukminim1.flixcart.com/image/224/224/ky3b0y80/lunch-box/o/f/u/infinite-lunch-box-3-stainless-steel-containers-microwave-safe-original-imagaejzd3ne2bgf.jpeg?q=90"
        alt="Live from space album cover"
      />
      </CardContent>
      <Box sx={{ display: "flex", flexDirection: "column",fontFamily: "Roboto"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>
              <Typography component="div" variant="h5">
            Oliveware Infinite Lunch Box | 3 Stainless Steel Containers |
            Microwave Safe | Leak Proof 3 Containers Lunch Box (1340 ml)
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{fontSize:30}}
          >
            <s style={{fontSize:25}}>₹1,130</s>₹499 <span style={{color: "#388e3c", fontSize:20,fontWeight:800}}>55% Off 3 offers applied</span>
          </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
              Delivery by Thu Oct 27 | Free₹40
              </Item>
            </Grid>
          </Grid>
          
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography style={{fontSize:25}}>Save for later &nbsp;&nbsp;&nbsp;</Typography>
          <Typography style={{fontSize:25}}>Remove</Typography>
        </Box>
      </Box>
    </Card>
  );
}
