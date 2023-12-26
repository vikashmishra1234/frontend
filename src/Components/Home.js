import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import Bsa from './utilities/bsa.jpg'
import Typewriter from "typewriter-effect";


const Container = styled(Box)`
        height:89vh;
        background-image:./utilities/bsa.jpg;
      
      
     

`
const Image = styled('img')({
    height:'100%',
    width:'100%'
})

const Home = () => {
   
  return (
    <>
    <Navbar/>
    <Container>
       
        <Box>
            <h1>
            <Typewriter
                const Write={(typewriter) => {
                 
                        
                        typewriter.start().typeString("hii").deleteAll()
                    
                            
                }}
            />

                </h1>
      
        </Box>
    </Container>
    
    </>
  )
}

export default Home