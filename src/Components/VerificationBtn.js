import React from "react";
import "./VerificationBtn.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function VerificationBtn() {
  return (
    <div className="centered">
      <Button variant="contained" className="button">
        <Link to={"/PhoneVerification"}>Verify Phone</Link>
      </Button>
    </div>
  );
}
export default VerificationBtn;
