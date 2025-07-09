import { Stack, TextField} from '@mui/material';

// Define props as an object
interface MuiTextFieldProps {
  text: string;
}
export const MuiTextField = ({text}:MuiTextFieldProps) => {
  return (
    <Stack spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '5vh' }}>
      <TextField label={text} variant="outlined" />
    </Stack>
  );
}