import React from "react";
import styled from "styled-components";
import profileImage from "../../assets/dev.jpeg";

const ContactCard = () => {
  return (
    <StyledWrapper>
      <div className="card-client">
        {/* PROFILE IMAGE */}
        <div className="user-picture">
          <img src={profileImage} alt="Omkar Chavan" />
        </div>

        {/* NAME */}
        <p className="name-client">
          Omkar Chavan
          <span>Developer</span>
        </p>

        {/* DIVIDER */}
        <div className="divider" />

        {/* SOCIAL BAR */}
        <div className="social-card">
          {/* INSTAGRAM */}
          <a
            className="social-link instagram"
            href="https://www.instagram.com/its.omkarr_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
          </a>

          {/* GITHUB */}
          <a
            className="social-link github"
            href="https://github.com/Omkar-XD"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 496 512">
              <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            className="social-link linkedin"
            href="https://www.linkedin.com/in/omkar-chavan-8b59a8334"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ContactCard;

/* ======================
   STYLES
====================== */

const StyledWrapper = styled.div`
  .card-client {
    background: #2b2b2b;
    width: 25rem;
    padding: 44px 38px;
    border-radius: 18px;
    color: #fff;
    text-align: center;
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.5);
  }

  .user-picture {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 999px;
    overflow: hidden;
    border: 4px solid #fff;
    margin: auto;
  }

  .user-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name-client {
    margin-top: 24px;
    font-size: 23px;
    font-weight: 700;
  }

  .name-client span {
    display: block;
    font-size: 17px;
    opacity: 0.8;
    margin-top: 6px;
  }

  .divider {
    width: 100%;
    height: 2px;
    background: #ffffff;
    margin: 28px 0;
    opacity: 0.3;
  }

  /* SOCIAL BAR */
  .social-card {
    display: flex;
    justify-content: center;
    gap: 14px;
  }

  .social-link {
    width: 48px;      /* 🔽 reduced size */
    height: 48px;     /* 🔽 reduced size */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    transition: transform 0.25s ease;
  }

  .social-link svg {
    width: 22px;      /* 🔽 reduced icon size */
    height: 22px;
    fill: white;
  }

  .social-link:hover {
    transform: scale(1.15);
  }

  .instagram:hover {
    background: linear-gradient(45deg, #f09433, #bc1888);
  }

  .github:hover {
    background: #242c34;
  }

  .linkedin:hover {
    background: #0a66c2;
  }
`;
