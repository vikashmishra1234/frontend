import styled from '@emotion/styled'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Formdialog from '../dialog/Formdialog'
import ContextState from '../context/ContextState'
import Context from '../context/Context';
import { Outlet, useNavigate } from 'react-router-dom'


const Nav = styled(Tabs)`
    // margin-right:6rem;
    font-size:19px;

`
const NavContainer = styled(Box)`
    height:10vh
`

const Navbar = () => {

    const a = useContext(Context);
    const [value,setValue]=useState();
    const Navigate = useNavigate();

    
    const handleClick = ()=>{
        
      a.setformOpened(true);
    }

    const handleNavigate = ()=>{
        Navigate('/home/me')
    }
    const handleERP = ()=>{
        Navigate('/home/erp')
    }
    const handleCS = ()=>{
        Navigate('/home/cs')
    }
    const handleEC = ()=>{
        Navigate('/home/ec')
    }
    const handleEE = ()=>{
        Navigate('/home/ee')
    }
  return (
    <>
    <NavContainer>
     
       <AppBar sx = {{background:'#063970'}}>
        <Toolbar >
            <Typography variant='h5' sx={{flexGrow:1}}>BSA college</Typography>

            <Nav value={value}onChange={(e,val)=>{setValue(val)}} >
                {/* <Button onClick={handleNavigate} >ME</Button>
                <Button onClick={handleCS}   >CS</Button>
                <Button onClick={handleEC}  >EC</Button>
                <Button onClick={handleEE}   >EE</Button> */}
                <Tab label = 'ERP' onClick={handleERP}/>
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
    <Outlet/>
    </>
  )
}

export default Navbar

