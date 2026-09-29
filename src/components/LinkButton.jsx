import React from 'react';

const LinkButton = ({ bgcolor, textcolor, text, link }) => {
    return (
        <div className="link-button-wrapper">
            <a 
                className={`link-button ${bgcolor === 'white' ? 'link-button-light' : 'link-button-dark'} text-${textcolor}`}
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <div className="link-button-content">
                    <span className="link-button-text-wrapper">
                        <span className="link-button-text-default">
                            {text}
                        </span>
                        <span className="link-button-text-hover">
                            Link
                        </span>
                    </span>
                    <svg
                        className="link-button-icon"
                        viewBox="0 0 37 37"
                    >
                        <g clipPath="url(#clip0_35_137)">
                            <path
                                fill={bgcolor === 'white' ? '#000' : '#fff'}
                                d="m9.234 29.627 15.9-15.9v11.54h3.084V8.462H11.414v3.083h11.54l-15.9 15.9z"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_35_137">
                                <path fill="#fff" d="M0 0h37v37H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default LinkButton;
