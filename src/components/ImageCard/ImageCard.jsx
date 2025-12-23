import clsx from "clsx";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <li className={clsx(css.item)}>
        <img
          className={clsx(css.styleIMG)}
          src={image.urls.small}
          alt={image.alt_description || "Unsplash image"}
          onClick={() => onClick(image)}
          style={{ cursor: "pointer" }}
        />
      </li>
    </div>
  );
};
export default ImageCard;
