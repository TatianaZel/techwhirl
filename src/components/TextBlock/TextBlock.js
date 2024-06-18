import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './TextBlock.css';

const TextBlock = ({ text, link, icon, title }) => {
    return (
        <div className="text-block">
            <h2 className="text-block-title">{title}</h2>
            <p>{text}</p>
            <hr />
            <footer className="text-block-footer">
                <FontAwesomeIcon icon={icon} className="text-block-icon" />
                <a href={link} target="_blank" rel="noopener noreferrer">
                     Get to know us better
                    <FontAwesomeIcon icon={faArrowRight} className="right-up-arrow-icon" />
                </a>
            </footer>
        </div>
    );
};

export default TextBlock;
