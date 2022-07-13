import React from 'react';
import './index.css';
import image1 from '../../images/project-image1.png';
import image2 from '../../images/project-image2.png';

const WebDesign =()=>{
    return (
        <>
        <div className="web-design ">
            <img src={image1} className="web-design-img1" alt="fff" />
            <img src={image2} className="web-design-img2" alt="fff" />
            
        </div>
        </>
    );
}

export default WebDesign;