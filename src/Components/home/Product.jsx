import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import { productData } from "../../sitedata/data";
import { styled } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};
const Image = styled("img")(({ theme }) => ({
  width: 200,
  height: 200,
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 180,
  },
}));
const Carouselstyle = styled(Box)``;
const Coro = styled(Carousel)`
  padding-top: 100;
`;

const Offerbanner = styled(Box)`
  height: 150;
  width: "";
`;
const Offer = styled("img")({
  width: 1200,
  height: 170,
  marginTop: 5,
  paddingLeft: 300,
});

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Detail = styled("Box")`
  padding-top: 100;
`;

const Banner = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Detail>
              <Typography
                style={{
                  paddingTop: 100,
                  paddingLeft: 100,
                  paddingRight: 100,
                  fontSize: 38,
                  width: 230,
                }}
              >
                Top Offers
              </Typography>
              <Box
                style={{
                  paddingLeft: 100,
                  paddingRight: 130,
                  fontSize: 38,
                  width: 230,
                }}
              >
                <Button variant="contained">VIEW ALL</Button>
              </Box>
              <img
                src="https://i.ibb.co/LJ02KkT/Screenshot-from-2022-10-12-10-59-56.png"
                alt="design"
                style={{ width: 400, height: 180 }}
              />
            </Detail>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item style={{ paddingTop: 100 }}>
            <Coro
              responsive={responsive}
              swipeable={false}
              draggable={false}
              dotListClass="custom-dot-list-style"
              transitionDuration={4000}
              containerClass="carousel-container"
            >
              {productData.map((data) => (
                <Link to="/productdetail">
                  <Box>
                    <Image src={data.url} alt="banner" id={data.id} />
                    <Box>
                      <Text>{data.text}</Text>
                      <Text>{data.text2}</Text>
                      <Text>{data.text3}</Text>
                    </Box>
                  </Box>
                </Link>
              ))}
              <Typography>Top Offers</Typography>
            </Coro>
          </Item>
        </Grid>
      </Grid>

      <Carouselstyle></Carouselstyle>
    </>
  );
};
export default Banner;
