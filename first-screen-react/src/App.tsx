import { MuiTypography } from './components/MuiTypography';
import { Muibutton } from './components/Muibutton';
import { MuiTextField } from './components/MuiTextfield';
import { Stack, Container } from '@mui/material';



function App() {
  return (

    <Container
      maxWidth={false}
      sx={{
        width: '1920px',      // fixed 1080p width
        minHeight: '100vh',   // full height
        margin: '0 auto',     // center horizontally
        backgroundColor: '#f8f8f8', // optional background
        padding: 2,           // optional inner space
      }}
    >
      
    <Stack spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
    <div className="app">      
      <MuiTypography />

      <Muibutton />
      
      <MuiTextField text="email"/> 
      <MuiTextField text="password"/> 
      
      {/* Uncomment the following line to add a logo */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
    </Stack>

    </Container>

  );
}

export default App;
