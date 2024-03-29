import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Productcard from "./Productcard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { useGetProductDataQuery } from "../services/Api";
import ReactPaginate from "react-paginate";

const drawerWidth = 240;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function Productdetail(props) {
  
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const { data, error, isLoading } = useGetProductDataQuery("");
  const navigate = useNavigate()
  const navigateToUrl = (path, imageData) => {
    navigate(path, { state: imageData })
    console.log(path, imageData);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>Oops, an error occured</div>;
  }

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
 
  const Listitemcss = styled(Box)`
    fontsize: 10px;
  `;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box>
        <List>
          <ListItem>
            <ListItemText>Filters</ListItemText>

            <ListItemButton>
              <ListItemText></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemText>CATEGORIES</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <ArrowBackIosIcon />
                ProductNAME
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemText>Price</ListItemText>
          </ListItem>
          <ListItem>
            <Slider
              aria-label="Price"
              defaultValue={10000}
              valueLabelDisplay="auto"
              step={1000}
              marks
              min={1000}
              max={10000}
            />
          </ListItem>
        </List>
      </Box>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={Discount}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Color" placeholder="Favorites" />
              )}
            />
          </ListItemText>

          <ListItemButton>
            <ListItemText></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={Discount}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Material"
                  placeholder="Favorites"
                />
              )}
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={Discount}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                style={{ width: 200 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Availability"
                    placeholder="Favorites"
                  />
                )}
              />
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={Discount}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Discount"
                  placeholder="Favorites"
                />
              )}
            />
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const Cards = styled(Box)`
    display: flex;
  `;
  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Box
          component="nav"
          sx={{ zIndex: -1, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                paddingTop: 100,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            display: "flex",
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Box sx={{ flexGrow: 1 }}>
            <Grid container item spacing={3}>
              {data?.products?.map((post) => {
                const {
                  id,
                  description,
                  price,
                  brand,
                  title,
                  category,
                  thumbnail,
                  images,
                } = post;
                return (
                  <React.Fragment key={id}>
                    {" "}
                    <Grid item xs={4}>
                      <Item
                       >
                        <Productcard
                         
                          thumbnail={post.thumbnail}
                          price={post.price}
                          id={post.id}
                          description={post.description}
                         
                        />
                      </Item>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

Productdetail.propTypes = {
  
  window: PropTypes.func,
};

const Discount = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];

export default Productdetail;
