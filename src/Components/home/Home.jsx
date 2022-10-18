import Box from "@mui/material/Box";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { products } from "../../sitedata/data";

//component
import Navbar from "./Navbar";
import Banner from "./Banner";
import Midsec from "./Midsec";
import Product from "./Product";

const Component = styled(Box)`
  padding: 15px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
        <Midsec />
        <Product />
        <Product/>
        <Midsec />
        <Midsec />
        <Midsec />
        <Product/>
        <Product/>
        <Product/>
      </Component>
    </Fragment>
  );
};

export default Home;
