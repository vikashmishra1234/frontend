import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import { Box,Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Bsa from "./utilities/bsa1.jpg";
import Dark from "./utilities/bsadark.jpg";
import Typewriter from "typewriter-effect";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Outlet } from "react-router-dom";


const Container = styled(Box)`
height: 90vh;

background-image: ./utilities/bsa.jpg;
background-image: url(${Dark});
background-repeat: no-repeat;
background-size: cover;
`;
const Text = styled(Box)`
position: relative;
top: 3%;
`;
const TextT = styled(Typography)`
font-weight: 600;
`;
const Wrapper = styled(Box)`
  display:flex;
  justify-content:space-between;

  align-items:center;
  margin-top:50px;
 

`
const Papper = styled(Paper)`
height:70vh;
display:flex;
justify-content:center;
align-items:center;
width:65vw;

`

const Home = () => {
 


  return (
    <>
      <Navbar />
      <Container>
        <Text sx={{ textAlign: "center" }}>
          <TextT variant="h4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Wecome to BSA cet Mathura")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Wecome to BSA cet Mathura")
                  .deleteAll()
                  .typeString("Wecome to BSA cet Mathura")
                  .start();
              }}
            />
          </TextT>
        </Text>
        <Wrapper>
       
          <h3>
          About BSACET
          </h3>
          

          <Box sx={{width:'50vw',fontSize:'22px',color:'white',letterSpacing:'1px',height:'59vh'}}>

          B.S.A. College of Engineering & Technology is a
          non-profitable Institution established for educational development of
          community in the field of technical and management education. It was
          found in 1997 by Shri Agrawal Shiksha Mandal (Regd.), a 100 years old
          philanthropic and democratic organization of Mathura. The Management
          is dedicated towards the development and empowerment of the youth,
          irrespective of their religion, gender, color or political
          affiliations. The College is recognized by the AICTE & PCI, and
          affiliated to AKTU, Lucknow & BTEUP, Lucknow, and certified by ISO
          9001:2000. The college is also an Institutional Member of the Indian
          Society for Technical Education (ISTE), New Delhi.
          </Box>
          
    

        </Wrapper>
        
      </Container>
    </>
  );
};

export default Home;
