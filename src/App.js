import React from "react";
import PhoneVerification from "./pages/PhoneVerification";
import VerificationBtn from "./Components/VerificationBtn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerificationBtn />}></Route>
          <Route path="/PhoneVerification" element={<PhoneVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
