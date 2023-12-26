import styled from '@emotion/styled'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Formdialog from '../dialog/Formdialog'
import ContextState from '../context/ContextState'
import Context from '../context/Context';


const Nav = styled(Tabs)`
    // margin-right:6rem;
    font-size:19px;

`
const NavContainer = styled(Box)`
    height:10vh
`

const Navbar = () => {

    const a = useContext(Context);

    
    const handleClick = ()=>{
        
      a.setformOpened(true);
    }
  return (
    <>
    <NavContainer>
     
       <AppBar sx = {{background:'#063970'}}>
        <Toolbar >
            <Typography variant='h5' sx={{flexGrow:1}}>BSA college</Typography>

            <Nav textColor='inherit'>
                <Tab label = 'ME'></Tab>
                <Tab label = 'CS'></Tab>
                <Tab label = 'EC'></Tab>
                <Tab label = 'EE'></Tab>
            </Nav>
            <Box>
                <Button variant='contained' onClick={handleClick}>Add student</Button>
            </Box>


        </Toolbar>

       </AppBar>
    </NavContainer>
    {
        a.formOpened?<Formdialog open={a.formOpened}/>:''
    }
    </>
  )
}

export default Navbar