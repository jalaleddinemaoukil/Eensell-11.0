

import React from "react";

const ImageGallery: React.FC = () => {
  return (
    <div className="flex overflow-hidden space-x-16 group">
      <div className="flex space-x-16 animate-loop-scroll ">
        {Array.from({ length: 10 }, (_, i) => (
          <img
            key={i}
            loading="lazy"
            src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${
              i + 1
            }?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&`}
            className="max-w-none"
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>
      <div
        className="flex space-x-16 animate-loop-scroll "
        aria-hidden="true"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <img
            key={i}
            loading="lazy"
            src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${
              i + 1
            }?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&`}
            className="max-w-none"
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
