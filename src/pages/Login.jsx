import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  signupWithEmail,
  loginWithGoogle,
} from "../lib/auth.service";

export default function Login() {
  const navigate = useNavigate();

  // LOGIN STATE
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // SIGNUP STATE
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // TOGGLE REF (FORCE SWITCH BACK AFTER SIGNUP)
  const toggleRef = useRef(null);

  /* ======================
     HANDLERS
  ====================== */

  const handleLogin = async () => {
    try {
      await loginWithEmail(loginEmail, loginPassword);
      navigate("/chat");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signupWithEmail(signupEmail, signupPassword);

      // FORCE BACK TO LOGIN
      if (toggleRef.current) {
        toggleRef.current.checked = false;
      }

      alert("Account created. Please log in.");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/chat");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="Login visual"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <CardWrapper>
          <div className="auth-box">
            {/* 🔑 REAL TOGGLE */}
            <input
              ref={toggleRef}
              type="checkbox"
              id="auth-toggle"
              className="toggle"
            />

            {/* TOGGLE UI */}
            <div className="toggle-row">
              <span className="label">Log in</span>
              <label htmlFor="auth-toggle" className="switch">
                <span className="slider" />
              </label>
              <span className="label">Sign up</span>
            </div>

            {/* CARD */}
            <div className="card-container">
              {/* LOGIN */}
              <div className="card front">
                <h2>Log in</h2>

                <button className="google-btn" onClick={handleGoogleLogin}>
                  <svg viewBox="0 0 48 48">
                    <path d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  </svg>
                  Continue with Google
                </button>

                <input
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

                <button className="primary-btn" onClick={handleLogin}>
                  Login
                </button>
              </div>

              {/* SIGN UP */}
              <div className="card back">
                <h2>Sign up</h2>

                <input
                  placeholder="Email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />

                <button className="primary-btn" onClick={handleSignup}>
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const CardWrapper = styled.div`
  --main: #323232;

  .auth-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .toggle {
    display: none;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
  }

  .switch {
    width: 60px;
    height: 22px;
    position: relative;
    cursor: pointer;
  }

  .slider {
    width: 100%;
    height: 100%;
    border: 2px solid var(--main);
    border-radius: 6px;
    position: relative;
  }

  .slider::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 18px;
    background: white;
    border: 2px solid var(--main);
    left: 0;
    top: 0;
    transition: 0.3s;
  }

  .toggle:checked + .toggle-row .slider::before {
    transform: translateX(32px);
  }

  .card-container {
    position: relative;
    width: 340px;
    height: 420px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }

  .toggle:checked ~ .card-container {
    transform: rotateY(180deg);
  }

  .card {
    position: absolute;
    inset: 0;
    background: white;
    border: 2px solid var(--main);
    box-shadow: 6px 6px var(--main);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
  }

  .card.back {
    transform: rotateY(180deg);
  }

  h2 {
    font-size: 26px;
    font-weight: 800;
  }

  input {
    width: 100%;
    height: 42px;
    border: 2px solid var(--main);
    box-shadow: 4px 4px var(--main);
    padding: 0 10px;
    font-weight: 600;
  }

  .primary-btn {
    width: 140px;
    height: 42px;
    border: 2px solid var(--main);
    box-shadow: 4px 4px var(--main);
    font-weight: 700;
    cursor: pointer;
  }

  .primary-btn:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }

  .google-btn {
    width: 100%;
    height: 42px;
    border: 2px solid var(--main);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }

  .google-btn svg {
    width: 20px;
  }
`;
