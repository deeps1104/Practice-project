import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
const Form = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div style={{ backgroundColor: "#32425b"}}  >
      <Typography variant="h5" sx={{ color: "#ffffff", letterSpacing:"5px", fontWeight:"bold" }}>
        REGISTER
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: "#1ad7b9", fontSize: "16px", letterSpacing: "4px", marginTop: "10px" }}>
        ITS COMPLETELY FREE </Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Username" variant="standard" placeholder='Username' className='inputfield' /> <br />
        <TextField id="standard-basic" label="Email" type='email' variant="standard" ty placeholder='Enter your email' className='inputfield' /> <br />
        <TextField id="standard-basic" label="Password" type='password' variant="standard" placeholder='Enter your Password' className='inputfield'/><br />
        <TextField id="standard-basic" label="Confirm Password" type='password' variant="standard" placeholder='Enter your password' className='inputfield'/>
      </Box>
      <div>
        <p style={{ fontSize: "18px", color:"white" }}><Checkbox {...label} defaultChecked />I do the accept <a href="www.w3schools.com" target={'_blank'} >terms & condition</a> of your side
        </p>
        <Button variant="contained" sx={{ background: "#1ad7b9" }}>Create Account</Button>
        <Typography variant="h6" sx={{ fontSize: "18px", color:"white", padding:"10px", letterSpacing:"2px" }} >I'm already & register</Typography>
        <hr />
      </div>
    </div>
  )
}
export default Form