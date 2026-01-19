import React from "react";
import styled from "styled-components";

const AboutFlipCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">

          {/* FRONT */}
          <div className="card-front">
            <h3 className="shine-title">About HoryX</h3>
          </div>

          {/* BACK */}
          <div className="card-back">
            <p className="shine-text">
              <span className="strong">
                HoryX is a fast, text-only AI chat platform built for focus and efficiency.
              </span>
              <br /><br />
              It delivers clear, accurate answers without images, clutter, or unnecessary complexity.
              <br /><br />
              HoryX helps users think, write, and solve problems by understanding context, improving
              written content, and assisting with logical reasoning and code-related tasks.
            </p>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutFlipCard;

/* ======================
   STYLES — About Card v1
====================== */

const StyledWrapper = styled.div`
  .card {
    width: 580px;
    height: 360px;
    perspective: 1400px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* FRONT */
  .card-front {
    background: radial-gradient(circle at top, #ff6b6b, #ff3b3b 60%);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
  }

  .shine-title {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ffffff, #ffe0e0, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
  }

  /* BACK */
  .card-back {
    background: rgba(15, 15, 15, 0.92);
    transform: rotateY(180deg);
    padding: 34px;
    text-align: center;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
  }

  .shine-text {
    font-size: 17px;
    line-height: 1.65;
    background: linear-gradient(90deg, #ffffff, #dddddd, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 4s linear infinite;
  }

  .shine-text .strong {
    font-weight: 700;
    font-size: 18px;
  }

  @keyframes shine {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;
