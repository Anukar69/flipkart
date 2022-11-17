import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const image = styled(Box)`
    width: 359,
    height : 147
`;

const Boxes = () => {
  return (
   
    <Grid style={{paddingRight : 15}} container spacing={4}>
      <Grid item xs={3}>
      <image>
        <img src="https://i.ibb.co/0y1NdYj/Screenshot-from-2022-11-16-17-50-28.png"></img>
        </image>
      </Grid>
      <Grid item xs={3}>
      <Box>

        <img style={{paddingLeft : 0}} src="https://i.ibb.co/fQC4714/Screenshot-from-2022-11-16-17-50-07.png"></img>
        </Box>
      </Grid>
      <Grid item xs={3}>
      <Box>
        <img style={{paddingLeft : 4}} src="https://i.ibb.co/zf47vyd/Screenshot-from-2022-11-16-17-50-52.png"></img>
        </Box>
      </Grid>

      <Grid item xs={3}>
      <Box>
        <img style={{}} src="https://i.ibb.co/mcMT6ny/Screenshot-from-2022-11-16-17-51-07.png"></img>
      </Box>
        

        
      </Grid>
    </Grid>
  )   
}

export default Boxes;
