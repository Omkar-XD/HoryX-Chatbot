import React from "react";
import styled from "styled-components";

/* ======================
   STYLED WRAPPER
====================== */

const StyledWrapper = styled.div`
  .container {
    position: relative;
width: 280px;
height: 360px;
    transition: 200ms;
  }

  #card {
  position: absolute;
  inset: 6px;   /* instead of 0 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(45deg, #1a1a1a, #262626);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

 #prompt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  .title {
    opacity: 0;
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: 3px;
    background: linear-gradient(90deg, #ffffff, #bbbbbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 300ms;
  }

  .subtitle {
  position: absolute;
  top: 52%;
  width: 100%;
  text-align: center;
  font-size: 15px;
  letter-spacing: 1px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
}


  .highlight {
    font-weight: 700;
    background: linear-gradient(90deg, #ff3b3b, #ff7b7b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tracker {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .canvas {
    position: absolute;
    inset: 0;
  }

  .card-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    opacity: 0;
    transition: 300ms;
  }

  .tracker:hover ~ #card .card-glare {
    opacity: 1;
  }
`;

/* ======================
   FEATURE CARD
====================== */

const FeatureCard = ({ title, subtitle, description }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="canvas">
          <div className="tracker" />

          <div id="card">
            <div className="card-content">
              <div className="card-glare" />

              <p id="prompt"></p>

              <div className="title">{title}</div>

              <div className="subtitle">{description}</div>

              <div className="subtitle" style={{ bottom: "18px" }}>
                <span className="highlight">{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default FeatureCard;
