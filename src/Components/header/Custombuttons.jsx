import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0;
  font-size: 80px;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    font-style: bold;
    align-items: center;
  }
`;
const Container = styled(Box)`
  display:flex;
  margin-left: 36px;
  


  
`;
const Loginbuttom = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
 
  font-weight: 600;
 
  height: 40px;
`;

const Custombuttons = () => {
  return (
    <Wrapper>
    <Link to ="login">
      <Loginbuttom variant="contained">Login</Loginbuttom>
      </Link>
     
      <Typography style={{marginLeft :40,  marginTop: 30, width: 180, fontWeight: 600, fontSize : 20 }}>
        Become a Seller
      </Typography>
      
      <Typography style={{ marginTop: 30, fontWeight: 600, fontSize : 20  }}> More</Typography>
      <Link to ="cartmain" style={{color:"#FFFFFF", paddingTop:30,textDecoration: "none"  }}>
      <Container  >
        <ShoppingCartIcon />
              
        <Typography style={{ fontWeight: 600, fontSize : 20, }}>Cart</Typography>
      </Container>
      </Link>
     
    </Wrapper>
  );
};

export default Custombuttons;
