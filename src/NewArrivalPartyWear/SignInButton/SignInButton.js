import React from "react";
import "./SignInButton.css";

export default function SignInButton() {
  return (
    <div>
      <div className="button-text-wrapper">
        <span>See personalized recommendations</span>
        <button className="SignInButton">Sign in</button>
      </div>
    </div>
  );
}
