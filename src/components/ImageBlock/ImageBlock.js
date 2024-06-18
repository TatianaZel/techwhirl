import React from 'react';
import './ImageBlock.css';

const ImageBlock = ({ src, alt, caption }) => {
    return (
        <div className="image-block">
            <div className="image-container" style={{backgroundImage: `url(' ${src}')`}}>
                <div className="image-container-inner"></div>
            </div>

            <p className="image-block-caption">{caption}</p>
        </div>
    );
};

export default ImageBlock;
