import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import swl from 'sweetalert2';
import Context from '../context/Context';
import styled from '@emotion/styled';




const FormTitle = styled(DialogTitle)`
text-align:center;
font-size:1.8rem;
font-weight:500;
   

`
const FormContent = styled(DialogContent)`
   height:60vh;

`

const Formdialog = (props) => {
  const a = useContext(Context);



    const [close, setClose] = React.useState(false);
    const [strudentInfo,setStudentInfo]= React.useState({name:'',rollno:'',email:'',year:'',branch:'',section:''})

 
  
    const handleSubmit = async(e) => {
    
        try {
           console.log(strudentInfo)
           let response =  await axios.post('http://localhost:5000/api/addstudent',strudentInfo,{
            headers:{
                "Authorization":`bearer ${localStorage.getItem('authToken')}`
            }
           });
           if(response.data.error){
            a.setformOpened(false)
       


              swl.fire({
                  icon:'error',
                  text:`${response.data.error}`,
                  
              
              })
              
      
          
           }
           else{
            
             a.setformOpened(false)
             swl.fire({
              icon:'success',
              text:`${response.data.message}`
          })
          
           
           }

            
        } catch (error) {
            console.log("unable to call the api")
            
        }
      
  
    
    };
  return (
    
    <React.Fragment>
  
    <Dialog open={a.formOpened} >
      <FormTitle>Kindly Fill The Form</FormTitle>
      <FormContent>
     
        <TextField
          onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}  
          autoFocus
          margin="dense"
          id="name"
          name='name'
          label="Student Name"
          type="email"
          fullWidth
          variant="standard"
        />
     
        <TextField
         onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}
          autoFocus
          margin="dense"
          id="rollno"
          name='rollno'
          label=" Student Roll Number"
          type="text"
          fullWidth
          variant="standard"
        />
     
        <TextField
         onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}
          autoFocus
          margin="dense"
          id="email"
          name='email'
          label="Student email"
          type="email"
          fullWidth
          variant="standard"
        />
     
        <TextField
         onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}
          autoFocus
          margin="dense"
          id="year"
          name='year'
          label="Student Year"
          type="text"
          fullWidth
          variant="standard"
        />
     
        <TextField
         onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}
          autoFocus
          margin="dense"
          id="Brach"
          name='branch'
          label="Student Brach"
          type="text"
          fullWidth
          variant="standard"
        />
     
        <TextField
         onChange={(e)=>{setStudentInfo({...strudentInfo,[e.target.name]:e.target.value})}}
          autoFocus
          margin="dense"
          id="section"
          name='section'
          label=" Student section"
          type="text"
          fullWidth
          variant="standard"
        />
      </FormContent>
      <DialogActions>
        {/* <Button onClick={handleSubmit}>Cancel</Button> */}
        <Button variant='contained' onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  )
}

export default Formdialog