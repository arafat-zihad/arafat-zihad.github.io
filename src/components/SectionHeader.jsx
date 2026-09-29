import React from 'react';

const SectionHeader = (props) => {
    const { title, description, linkText, link } = props;

    return (
        <div className="section-header-wrapper">
            <div className="section-header-top">
                <div className="section-header-title-container">
                    <h2 className="section-header-title">
                        <span className="section-header-hash">#</span>{title}
                    </h2>
                    <div className="section-header-line"></div>
                </div>
                {
                    linkText ? (
                        <a
                            href={link ? link : '#'}
                            className="section-header-link"
                        >
                            <span className="section-header-link-content">
                                <span className="section-header-link-text">{linkText}</span>
                                <svg className="section-header-link-icon" viewBox="0 0 37 37">
                                    <g clipPath="url(#clip0_35_137)">
                                        <path
                                            fill="currentColor"
                                            d="m9.234 29.627 15.9-15.9v11.54h3.084V8.462H11.414v3.083h11.54l-15.9 15.9z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_35_137">
                                            <path fill="#fff" d="M0 0h37v37H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                    ) : null
                }
            </div>

            {/* Description */}
            <div className="section-header-desc-container">
                <p className="section-header-desc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SectionHeader;
