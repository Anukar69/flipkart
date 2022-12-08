import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HoverMenuButton from "./HoverMenuButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useToken from "../login/usetoken";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 780,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  paddingLeft: 50,
  p: 4,
};
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
  display: flex;
  margin-left: 36px;
`;
const Loginbuttom = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 15px 40px;
  border-radius: 2px;
  box-shadow: none;

  font-weight: 600;

  height: 40px;
`;

const Custombuttons = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  console.log(username)
  const initialText = "Login";
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText(username);
  }


  return (
    <Wrapper>
    <Box style={{paddingTop :10}}>
      <Loginbuttom onClick={handleOpen} variant="contained">
        {buttonText}
      </Loginbuttom>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ padding: "0px" }}>
          <Grid container spacing={2}>
            <Grid
              style={{
                paddingTop: 0,
                paddingLeft: 0,
              }}
              item
              xs={5}
            >
              <img
                style={{
                  paddingTop: 16,
                  paddingLeft: 15,
                  width: 300,
                  height: 600,
                }}
                src="https://i.ibb.co/WN9FCM5/Screenshot-from-2022-11-28-13-03-13.png"
              ></img>
            </Grid>
            <Grid item xs={7} style={{ paddingTop: 40 }}>
              <div class="box">
                <div class="row">
                  <div class="col-sm-5 col-xs-1 box1"></div>
                  <div class="col-sm-6 col-xs-1 box2">
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "45ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                    
                      <TextField
                      
                        name="firstName"
                        id="firstName"
                        label="Enter Username"
                        variant="standard"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <br></br>
                      <br></br>
                      <br></br>
                      <TextField
                        id="standard-basic"
                        label="Enter Password"
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Box>

                    <br></br>

                    <br></br>
                    <span>
                      By continuing, you agree to Flipkart's Terms of Use and
                      Privacy Policy.
                    </span>
                    <div class="user-id button">
                      <br></br>
                      <br></br>
                      <Button
                        onClick={() => {
                          handleClose();
                          handleClick();
                   
                        }}
                        style={{
                          width: "50ch",
                          height: 60,
                          fontSize: 15,
                          fontWeight: "bold",
                          backgroundColor: "#fb641b",
                        }}
                        variant="contained"
                      >
                        Login
                      </Button>
                    </div>
                    <br></br>

                    <Box style={{ textAlign: "center" }}>
                      <div style={{ color: "#878787" }} class="user-id">
                        <p>OR</p>
                      </div>
                      <div class="user-id button">
                        <Button
                          style={{
                            width: "50ch",
                            height: 60,
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                          variant="text"
                        >
                          Request OTP
                        </Button>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Link to="singnup">
                        <div class="user-id" onClick={handleClose}>
                          <p class="footer">
                            <a href="#">New to Flipkart? Create an account</a>
                          </p>
                        </div>
                      </Link>
                    </Box>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Typography
        style={{
        paddingLeft:25,
          paddingTop: 15,
          width: 180,
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Become a Seller
      </Typography>
      <Typography style={{ paddingLeft:15, paddingTop: 15, fontWeight: 600, fontSize: 20 }}>
        {" "}
        More
      </Typography>
      <Link
        to="cartmain:id"
        style={{ color: "#FFFFFF", paddingTop: 15, textDecoration: "none" }}
      >
        <Container style={{ paddingLeft:10}}>
          <ShoppingCartIcon />
          <Typography style={{  fontWeight: 600, fontSize: 20 }}>
            Cart
          </Typography>
        </Container>
      </Link>
    </Wrapper>
  );
};
export default Custombuttons;
