import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "./Button"
const fstyle = {
    fo:{
        margin:"0 auto",
        textAlign:"center",
        
    }

}
export default function BasicTextFields({title,setPassword,setEmail,handleAction}) {
  return (
    <div className="fo"style={fstyle.fo}>
      <div className="header">
        <h2>{title} Form</h2>
      </div>
      
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="email" label="Enter Your Email" variant="outlined"
      onChange={(e)=> setEmail(e.target.value)} />

      
      <TextField id="outlined-basic" label="password" variant="outlined"
      onChange={(e)=> setPassword(e.target.value)} />

    
    </Box>
    <Button title={title} handleAction={handleAction}/>
    </div>
    
  );
}