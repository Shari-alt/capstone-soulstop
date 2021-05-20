import "./PhotoCarousel.css";
import { BiChevronsRight } from "react-icons/bi";

import { useState } from "react";
import { Image } from "cloudinary-react";

export default function PhotoCarousel({ imagesArray }) {
  const [picture, setPicture] = useState(0);

  const length = imagesArray?.length;

  const nextSlide = () => {
    setPicture(picture === length - 1 ? 0 : picture + 1);
  };

  if (!Array.isArray(imagesArray) || length <= 0) {
    return null;
  }

  return (
    <div className="Carousel">
      {imagesArray?.length > 1 ? (
        <BiChevronsRight className="right-arrow" onClick={nextSlide} />
      ) : null}
      {imagesArray.map((image, index) => {
        return (
          <div
            className={index === picture ? "slideActive" : "slide"}
            key={index}
          >
            {index === picture && (
              <Image
                className="prevImage"
                src={image}
                alt={image}
                cloudName="dlm4sfyjm"
                publicId={image}
                secure="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
