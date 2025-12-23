import ImageCard from "../ImageCard/ImageCard";
import clsx from "clsx";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={clsx(css.list)}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};
export default ImageGallery;
