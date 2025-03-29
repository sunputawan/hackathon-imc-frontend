import React from "react";

type ImageRepeaterType = {
    repeat: number;
    size: number;
}

const ImageRepeater = ({ repeat, size }: ImageRepeaterType) => {
    // Create an array of the same length as the score value
    const images = new Array(repeat).fill("/images/star.png");

    return (
        <div className="flex">
            {/* Map over the array to display images */}
            {images.map((src, idx) => (
                <img 
                    key={idx}
                    src={src} 
                    alt={`Image ${idx+1}`} 
                    width={size}
                    height={size}
                    className="" // Add some margin between images
                />
            ))}
        </div>
    );
}

export default ImageRepeater;
