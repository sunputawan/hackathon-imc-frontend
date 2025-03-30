import * as React from "react";

interface SkillGroupProps {
  images: string[];
  className?: string;
  imageClassName?: string;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({
  images,
  className = "",
  imageClassName = "",
}) => {
  return (
    <div className={`flex gap-5 ${className}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Skill icon ${index + 1}`}
          className={`object-contain shrink-0 aspect-square ${imageClassName}`}
        />
      ))}
    </div>
  );
};
