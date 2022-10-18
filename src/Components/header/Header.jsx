import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Height } from "@material-ui/icons";

//components
import Search from "./Search";
import Custombuttons from "./Custombuttons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 71px;
`;

const Component = styled(Box)`
  margin-left: 10%;
  line-height: 0;
`;
const Subheading = styled(Typography)`
  font-size: 20px;
  font-style: italic;
`;
const Plusimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});


const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader position="static">
        <Toolbar style={{ minHieght: 55}}>
    
          <Component>
          <Link to ="/">
            <img src={logoURL} alt="logo" style={{ width: 105, paddingTop : 10 }} />
            </Link>
            <Box style={{ display: "flex" }}>
              <Subheading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#fee500" }}>
                  Plus
                </Box>
              </Subheading>
              <Plusimage
                src={
                  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                }
                alt="pluslogo"
              />
            </Box>
          </Component>
     
          <Search />
          
          <Custombuttons />
         
        </Toolbar>
      </StyledHeader>
    </Box>
  );
};

export default Header;
