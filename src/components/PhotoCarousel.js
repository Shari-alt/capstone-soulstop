import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";

export default function PhotoCarousel({ imagesArray }) {
  const [picture, setPicture] = useState(0);

  const length = imageyArray?.length;

  const nextSlide = () => {
    setPicture(picture === length - 1 ? 0 : picture + 1);
  };

  if (!Array.isArray(imagesArray) || length <= 0) {
    return null;
  }

  return (
    <div className="Carousel">
      {imagesArray?.length > 1 ? (
        <BiChevronRight className="right-arrow" onClick={nextSlide} />
      ) : null}
      {imagesArray.map((image, index) => {
        return (
          <div
            className={index === picture ? "slideActive" : "slide"}
            key={index}
          >
            {index === picture && (
              <img className="prevImage" srx={image} alt={image} />
            )}
          </div>
        );
      })}
    </div>
  );
}
