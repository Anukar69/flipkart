import Box from "@mui/material/Box";
import { navData } from "../../sitedata/data";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Link to="bannerdetail">
          <button
            style={{
             
              background: "none",
              color: "inherit",
              border: "none",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
          >
            <img src={data.url} alt="nav" style={{ width: 70 }} />
            <Text style={{ color : '#000000'}}>{data.text}</Text>
          </button>
          </Link>
        </Container>
      ))}
    </NavBar>
  );
};

export default Navbar;
