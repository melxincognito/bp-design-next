import React, { useState } from "react";
import galleryStyles from "./ImageGallery.module.css";

export default function ImageGallery() {
  const [previewImage, setPreviewImage] = useState(images[0].img);
  const [previewImageAlt, setPreviewImageAlt] = useState(images[0].alt);
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles.viewImageContainer}>
        <img src={previewImage} alt={previewImageAlt} />
      </div>

      <div className={galleryStyles.slidesContainer}>
        <div className={galleryStyles.slides}>
          {images.map((image, index) => (
            <>
              <img
                key={index}
                className={galleryStyles.image}
                src={image.img}
                alt={image.alt}
                onClick={() => {
                  setPreviewImage(image.img);
                  setPreviewImageAlt(image.alt);
                }}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [
  {
    img: "https://images.unsplash.com/photo-1648737967037-96967e9151b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1655439191535-93f1d284f74d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZHJpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1655369149858-b715efd0adde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1655494199774-4ca28b900686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    alt: "image1",
  },
];
