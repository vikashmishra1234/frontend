import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios, { all } from "axios";
import Context from "../context/Context";
import twl from "sweetalert2";
import {
  Box,
  Checkbox,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Typography,
  Paper,
  Button
} from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import styled from "@emotion/styled";
const StudentData = [];
const absStudent=[];




const Params = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ME = () => {
  const a = useContext(Context);
  const [userData, setUser] = useState([]);
  const [email, setEmail] = useState();
  const[val,setVal]=useState();
  const[status,setStatus]=useState();


  useEffect(() => {
   
    const getstudent = async () => {
      try {
        let response = await axios.get("http://localhost:5000/api/getstudent", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("authToken")}`,
          },
        });

        if (response.data.error) {
          twl.fire({ icon: "error", text: `${response.data.error}` });
        } else {
          a.setStudents(response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.log("error", error.message);
        twl.fire({ icon: "error", text: `${error.message}` });
      }
    };
    getstudent();
  }, []);

  const markAttendence = async()=>{

    try {
      console.log(StudentData)
      if(StudentData.length>0){

        let response = await axios.post('http://localhost:5000/api/markattendence/me',StudentData,{
          headers:{
            "Authorization":`bearer ${localStorage.getItem('authToken')}`
          }
        });
        if(response.data.error){
          twl.fire({icon:'error',text:`${response.data.error}`})
        }
        else{
          twl.fire({icon:'success',text:`${response.data.message}`})
        }
        
      }
      else{
        twl.fire({icon:'error',text:"please select student"})
      }
    } catch (error) {
      console.log("error ",error.message);
      
    }


  }
  const handleChange = (e,name,rollno,branch,email,year,section)=>{

    if(e.target.checked){

      setEmail(e.target.value);
     
      setStatus(true)
      const Students = {
        Name:name,
        Rollno:rollno,
        Year:year,
        Branch:branch,
        Section:section,
        Email:email,
        Status:'present',
        
      }
   
      StudentData.push(Students);

    }
    else{
      setStatus(false)
   
     let Pop =  StudentData.pop(); 
     Pop.Status = 'absent'
     StudentData.push(Pop);
    
    }
 

   
  
   
  
    
    
   

  }

  return (
    <>
      <Navbar />
      <Box>
        <Params>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Roll Number
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Name
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "600",marginLeft:'40px' }}>
            Year
          </Typography>
        
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Section
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Status
          </Typography>
        </Params>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {userData.map((user) => (
                  user.branch=='me'?
                  <>
                   <Paper elevation={4}>
                  <Box sx={{display:'flex',justifyContent:'space-around'}}>
                  <TableCell>
                      <Typography sx={{width:'10vw'}} >{user.rollno}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{width:'10vw'}} >{user.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{width:'4vw'}} >{user.year}</Typography>
                    </TableCell>
                  
                    <TableCell>
                      <Typography sx={{width:'5vw'}} >{user.section}</Typography>
                    </TableCell>
                    <TableCell>
                      <Checkbox sx={{width:'5vw'}}  value={status} onChange={(e)=>handleChange(e,user.name,user.rollno,user.branch,user.email,user.year,user.section)}/>
                    </TableCell>

                  </Box>

                  </Paper>
                  </>
                  :''
             
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <Box sx={{position:'relative',left:'85%',top:'18%'}}>
          <Button onClick={markAttendence} variant='contained'>Done</Button>
        </Box >
      </Box>
    </>
  );
};

export default ME;
