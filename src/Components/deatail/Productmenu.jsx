import Productdetail from "./Productdetail";
import { Fragment } from "react";
import Pronav from "./Pronav";
import Productcard from "./Productcard";

const Productmenu = () => {
  return (
    <Fragment>
    <Pronav />
      <Productdetail />
      
      
    </Fragment>
  );
};

export default Productmenu;