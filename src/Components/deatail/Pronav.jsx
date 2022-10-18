import Box from "@mui/material/Box";
import { proData } from "../../sitedata/data";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const NavBar = styled(Box)`
  display: flex;
  margin: 2px 295px 0px 295px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 20px 30px;
  text-align: center;
  width : '100%';
`;
const Text = styled(Typography)`
  font-size: 21px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <NavBar>
      {proData.map((data) => (
        <Container>
          
          <Text>{data.text}</Text>
        </Container>
      ))}
    </NavBar>
  );
};

export default Navbar;
