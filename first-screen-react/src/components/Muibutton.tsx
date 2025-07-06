import {Stack, Button} from '@mui/material';



export const Muibutton = () => {
  return (
    <Stack spacing={6} direction = "row">   
        <Button variant="text" color="primary"> Forgot password </Button>
        <Button variant="contained" color="primary"> Sign in </Button>
        <Button variant="text" color="primary"> Create it! </Button>

        </Stack> 
  );
}
