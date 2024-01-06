import React, { useState } from 'react'
import Context from './Context'

const ContextState = (props) => {
    const [formOpened,setformOpened]=useState(false);
    const[students,setStudents]=useState('')
  return (
   <Context.Provider value={
    {formOpened,
    setformOpened,
  students,
setStudents}
   }>
    
        {props.children}
   </Context.Provider>
  )
}

export default ContextState