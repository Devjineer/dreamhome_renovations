import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ containerStyle }) => {
  return (
    <Link to="/" className={containerStyle}>
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="20.25 31.386 160 135.979"
        viewBox="20.25 31.386 160 135.979"
        // height="200"
        // width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="img"
        aria-label="Homepage"
      >
        <g>
          <path
            fill="#B46A2A"
            d="M91.47 42.012L80.845 31.386 20.25 92.439v74.926h15.027V99.744l-.174-.085L91.47 42.012z"
            data-color="1"
          ></path>
          <path
            fill="#B46A2A"
            d="M130.098 42.04l.028-.028L119.5 31.386 52.313 99.721l.022.023h-.022v67.621h99.159v-15.027l-.495-52.594h-.023l.023-.023-32.186-30.839-10.248 10.248 27.407 26.713v46.495H67.339V105.87l52.149-53.039 45.822 44.506-.175.085.088 69.943h15.027V92.439L130.098 42.04z"
            data-color="1"
          ></path>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
