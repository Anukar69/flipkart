import Box from "@mui/material/Box";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Seachbar = styled(Box)`
  background: #fff;
  width: 40%;
  margin-left: 60px;
  border-radius: 2px;
  height: 45px;
  display: flex;
  align: center;
`;

const Inputsearchbar = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const Searchicon = styled(Box)`
  padding: 5px;
  color: #2874f0;
`;

const search = () => {
  return (
    <Seachbar>
      <Inputsearchbar placeholder="Search for products, brands and more" />
      <Searchicon>
        <SearchIcon />
      </Searchicon>
    </Seachbar>
  );
};
export default search;
