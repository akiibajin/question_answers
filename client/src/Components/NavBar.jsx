import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Box, Typography, Toolbar, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { searchQuestionByName } from "../Redux/Actions/questionActions";

export default function NavBar() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    questionSearcher: "",
  });
  const handleChange = (event) => {
    setInputs({
      [event.target.name]: event.target.value,
    });
  };
  const handleOnClick = () => {
    dispatch(searchQuestionByName(inputs.questionSearcher));
  };
  return (
    <Box sx={{ paddingBottom: "10px", flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            src="https://bit2bitamericas.com/wp-content/uploads/2021/09/b2b_logo_new.png"
            alt="whitout logo"
            height="30px"
          />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "7px",
              paddingRight: "7px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </Link>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "7px",
              paddingRight: "7px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Log In
            </Typography>
          </Link>
          <Link
            to="/questions"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "7px",
              paddingRight: "7px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Questions
            </Typography>
          </Link>
          <TextField 
          name="questionSearcher"
            label="Search a Question"
            type="search"
            variant="standard"
            sx={{marginRight:"0px"}}
            onChange={handleChange}
            value={inputs.questionSearcher}
            />
            <IconButton onClick={handleOnClick}>
                <SearchIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
