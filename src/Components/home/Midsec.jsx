import { Grid, styled } from "@mui/material";
import { ImageURL } from "../../sitedata/data";

const Wrapper = styled(Grid)`
  display: flex;
  margin-top: 2px;
  justify-content: space-between;
`;

const Image = styled("img")(({ theme }) => ({
  display: "flex",
  marginTop: 10,
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 100,
  },
}));

const MidSection = () => {
  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {ImageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} style={{ width: "100%", height: "320px" }} />
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default MidSection;
