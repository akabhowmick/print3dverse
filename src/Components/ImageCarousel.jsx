/* eslint-disable react/prop-types */
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const ImageCarousel = ({ images }) => {
  const imageArray = [];
  images.map((image) => {
    imageArray.push({
      original: image,
      thumbnail: image,
    });
  });
  return (
    <div className="hero-images">
      <ImageGallery items={imageArray} showBullets lazyLoad/>
    </div>
  );
};
