import { Stack, TextField} from '@mui/material';

// Define props as an object
interface MuiTextFieldProps {
  text: string;
}
export const MuiTextField = ({text}:MuiTextFieldProps) => {
  return (
    <Stack spacing={6} direction="row">
      <TextField label={text} variant="outlined" />
    </Stack>
  );
}