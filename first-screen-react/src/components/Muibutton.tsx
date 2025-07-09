import {Stack, Button} from '@mui/material';



export const Muibutton = () => {
  return (
    <Stack spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '5vh' }}>   
        <Button variant="text" color="primary"> Forgot password </Button>
        <Button variant="contained" color="primary"> Sign in </Button>
        <Button variant="text" color="primary"> Create it! </Button>

        </Stack> 
  );
}
