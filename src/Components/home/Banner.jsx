import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../sitedata/data";
import { styled } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")(({ theme }) => ({
  width: "100% !important",
  height: 280,
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 180,
  },
}));
const Carouselstyle = styled(Box)``;

const Offerbanner = styled(Box)`
  height: 150;
  width: "100%";
`;
const Offer = styled("img")({
  width: 1200,
  height: 170,
  marginTop: 5,
  paddingLeft: 300,
});

const Banner = () => {
  return (
    <Carouselstyle>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        dotListClass="custom-dot-list-style"
        transitionDuration={4000}
        containerClass="carousel-container"
        infinite={true}
      >
        {bannerData.map((data) => (
          <Image src={data.url} alt="banner" id={data.id} />
        ))}
      </Carousel>

      <Offer
        src="https://i.ibb.co/QmwVXVF/Screenshot-from-2022-10-11-13-53-40.png"
        alt="offer"
      ></Offer>
    </Carouselstyle>
  );
};
export default Banner;
