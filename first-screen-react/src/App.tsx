// import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { Muibutton } from './components/Muibutton';
import { MuiTextField } from './components/MuiTextfield';

function App() {
  return (
    <div className="App">      
      <MuiTypography />

      <Muibutton />
      
      <MuiTextField text="email"/> 
      <MuiTextField text="password"/> 
      
      {/* Uncomment the following line to add a logo */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
