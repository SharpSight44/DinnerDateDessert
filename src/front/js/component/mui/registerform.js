import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { LoginWindow, TokenIssued } from '../../layout';
import { useHistory } from "react-router-dom";

export default function RegisterCom() {
  const {token, setToken} = React.useContext(TokenIssued);
  const { logStatus, setLogStatus } = React.useContext(LoginWindow);
  const history = useHistory();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const[emailValue, setEmailValue] = React.useState({
        email: ''
      });
      const[nameValue, setNameValue] = React.useState({
        name: ''
      });

    const handleName = (prop) => (event) => {
    setEmailValue({ ...emailValue, [prop]: event.target.value });
  };

      const handleEmail = (prop) => (event) => {
        setEmailValue({ ...emailValue, [prop]: event.target.value });
      };

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const exit = () => {
        return setLogStatus(false)
      };

      const submitRegister = (email,password) =>{

        const data = {email:email,password:password};
       

     

       return postRegister(data),  setLogStatus(false);
    
      
    };


    async function postRegister(data) {
  
    
      const response = await fetch(
          process.env.BACKEND_URL + "/api/register", {
              method:"POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(data)
          } 
          );
          const payload = await response.json();
          
          return  console.log(payload);
      }


  return (
    <>
    <Box
      sx={{margin:"20px"

       
      }}
    >
        <FormControl sx={{ m: 1, width: '25ch', marginBottom:"15px"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            
            id="outlined-Name"
            value={nameValue.name}
            onChange={handleName('name')}
    
            label="Name"
          />
          <FormHelperText id="filled-weight-helper-text">First Name</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch', marginBottom:"15px"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            
            id="outlined-Email"
            value={emailValue.email}
            onChange={handleEmail('email')}
    
            label="Email"
          />
          <FormHelperText id="filled-weight-helper-text">Personal or Work Email</FormHelperText>
        </FormControl>
    
      

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText id="filled-weight-helper-text">Use 8 or more Characters</FormHelperText>
        </FormControl>
    
    <button style={{marginLeft:"20%", background:"green"}} onClick={()=> submitRegister(emailValue?.email,values?.password)}>Create Account</button>
    <button onClick={() => exit()}>Exit Login</button>
    </Box>
    </>
  );
}