import Productdetail from "./Productdetail";
import { Fragment } from "react";
import Pronav from "./Pronav";
import Productcard from "./Productcard";
import Footer from "../footer/Footer";

const Productmenu = (props) => {
  return (
    <Fragment>
    <Pronav />
    <Productdetail />
    <Footer/>
    </Fragment>
  );
};

export default Productmenu;