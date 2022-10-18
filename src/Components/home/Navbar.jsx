import Box from "@mui/material/Box";
import { navData } from "../../sitedata/data";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const NavBar = styled(Box)`
  display: flex;
  margin: 2px 295px 0px 295px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 8px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <NavBar>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav" style={{ width: 70 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </NavBar>
  );
};

export default Navbar;
