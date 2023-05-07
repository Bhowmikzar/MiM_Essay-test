import React, { useState, useRef } from "react";
import OtpInput from "otp-input-react";
import "./PhoneVerification.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function PhoneVerification() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [otp, setOtp] = useState("");
  const otpInputRef = useRef(null);

  const handleClose = () => {
    setShowPopup(false);
    setOtp("");
    navigate(-1);
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    console.log("OTP entered:", otpValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClose();
    }
  };

  return (
    <div className="PhoneVerification">
      {showPopup && (
        <div className="PhoneVerification__popup" onKeyDown={handleKeyDown}>
          <h3 className="PhoneVerification__title">Phone Verification</h3>
          <p className="PhoneVerification__description">
            Enter the 6-digit OTP sent to your phone:
          </p>

          <div className="PhoneVerification__otp">
            <OtpInput
              ref={otpInputRef}
              value={otp}
              onChange={handleOtpChange}
              OTPLength={6}
              otpType="number"
              secure={true}
              disabled={false}
            ></OtpInput>
          </div>

          <Button
            style={{ bottom: "20px", right: "60px" }}
            onClick={handleClose}
          >
            Change Number
          </Button>

          <Button
            style={{ bottom: "20px", left: "55px" }}
            onClick={handleClose}
          >
            Re-send OTP
          </Button>

          <Button
            style={{ borderRadius: "50px", backgroundColor: "#04AA6D" }}
            variant="contained"
            onClick={handleClose}
          >
            Verify Phone number
          </Button>
        </div>
      )}
    </div>
  );
}

export default PhoneVerification;
