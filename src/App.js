import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from './Components/Alert';
// import About from './Components/About';
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Selects the Mode
  const [alert, setAlert] = useState(null); //   State Variable for Alert Message
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log('Mode Changed to Dark Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('success', 'Mode Succesfully changed to dark mode');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      console.log('Mode Changed to Light Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Mode Succesfully changed to light mode');
      document.title = 'TextUtils - Light Mode';
    }
  }

  const showAlert = (alertStatus, alertMessage) => {
    setAlert({
      status: alertStatus,
      msg: alertMessage
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
      <Navbar heading="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path='/about' element={<About mode={mode} />} /> */}
        {/* <About mode={mode} /> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - the best" mode={mode} />} /> */}
        <TextForm showAlert={showAlert} heading="TextUtils - the best" mode={mode} />
        {/* <About /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App; 