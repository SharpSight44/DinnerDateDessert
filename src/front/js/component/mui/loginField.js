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
import { ColorLensOutlined } from '@mui/icons-material';
import { TokenIssued } from '../../layout';
import { useHistory } from "react-router-dom";

export default function HelperTextAligned() {
  const {token, setToken} = React.useContext(TokenIssued);
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

      const submitLogin = (email,password) =>{

        const data = {email:email,password:password};

     

       return postLoging(data);
    
      
    };
    async function postLoging(data) {
  
    
      const response = await fetch(
          process.env.BACKEND_URL + "/api/login", {
              method:"POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(data)
          } 
          );
          const payload = await response.json();
          console.log(payload);
          return setToken(payload.token), history.push('/version1');
      }


  return (
    <>
    <Box
      sx={{margin:"20px"

       
      }}
    >
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
    
    <button style={{marginLeft:"20%", background:"green"}} onClick={()=> submitLogin(emailValue?.email,values?.password)}>Sign In</button>
    </Box>
    </>
  );
}