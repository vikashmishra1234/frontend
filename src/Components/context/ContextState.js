import React, { useState } from 'react'
import Context from './Context'

const ContextState = (props) => {
    const [formOpened,setformOpened]=useState(false);
  return (
   <Context.Provider value={
    {formOpened,
    setformOpened}
   }>
        {props.children}
   </Context.Provider>
  )
}

export default ContextState