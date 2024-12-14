import React from "react";
import PropTypes from "prop-types";
import "./SocialButton.css";

const SocialButton = ({ href, imgSrc, label }) => {
  return (
    <a href={href} className="social-button" aria-label={label}>
      <img src={imgSrc} alt={label} />
    </a>
  );
};

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialButton;
