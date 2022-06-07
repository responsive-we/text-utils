import "./App.css";
import { useState } from "react";
import React from 'react'
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [blackMode, setBlackMode] = useState(true);


  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const setStyle = {
    modeBlack: () => {
      if (blackMode === true) {
        setBlackMode(false)
        setBtnText("Disble Dark Mode");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }
      else {
        setBtnText("Enable Dark Mode");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    }
  }
  return (
    <>
        <Navbar
          blackMode={blackMode}
          btnText={btnText}
          setBlackMode={setBlackMode}
          setStyle={setStyle}
        />
        <Alert alert={alert} />
          <div className="container">
            <TextForm
              heading="Try TextUtils- Word counter, Charecter counter and Remove extra spaces"
              showAlert={showAlert}
              setStlye={setStyle}
              blackMode={blackMode}
              btnText={btnText}
            />
          </div>
    </>
  );
}

export default App;
