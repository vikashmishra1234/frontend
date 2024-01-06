import styled from "@emotion/styled";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import swl from "sweetalert2";
import { Outlet, useNavigate } from "react-router-dom";

const Conatainer = styled(Paper)`
  height: 60vh;
  width: 60vh;
  text-align: center;
`;
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Logo = styled(Avatar)`
  position: relative;
  left: 45%;
  top: 3%;
  background: green;
`;

const InputBox = styled(Box)`
  width: 70%;
  margin-left: 64px;
`;
const InputField = styled(TextField)`
  margin-bottom: 20px;
`;

const Facultylogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const sendData = async () => {
    let data = {
      name: name,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/facultylogin",
        data
      );
      if (response.data.error) {
        swl.fire({
          icon: "error",
          title: `${response.data.error}`,
        });
      }
      localStorage.setItem("authToken", response.data.token);
      swl.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
      Navigate("/home");
    } catch (error) {
      swl.fire({
        icon: "error",
        text: `${error.message}`,
      });
    }
  };
  return (
    <Box>
      <Wrapper>
        <Conatainer elevation={20}>
          <Logo>
            <LockIcon />
          </Logo>
          <h2>Facuty LogIn</h2>

          <InputBox>
            <InputField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="standard"
              label="Name"
              placeholder="enter your name"
              fullWidth
              required
            ></InputField>
            <InputField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="standard"
              label="password"
              placeholder="password"
              type="password"
              fullWidth
              required
            ></InputField>
            <Button
              onClick={sendData}
              style={{ marginTop: "15px" }}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </InputBox>
        </Conatainer>
      </Wrapper>
      <Outlet/>
    </Box>
  );
};

export default Facultylogin;
