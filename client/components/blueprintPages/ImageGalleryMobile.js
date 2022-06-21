import React, { useState } from "react";
import mobileGalleryStyles from "./ImageGalleryMobile.module.css";

export default function ImageGallery() {
  const [previewImage, setPreviewImage] = useState(images[0].img);
  const [previewImageAlt, setPreviewImageAlt] = useState(images[0].alt);
  return (
    <div className={mobileGalleryStyles.mainContainer}>
      <div className={mobileGalleryStyles.viewImageContainer}>
        <img src={previewImage} alt={previewImageAlt} />
      </div>

      <div className={mobileGalleryStyles.slidesContainer}>
        <div className={mobileGalleryStyles.slides}>
          {images.map((image, index) => (
            <>
              <img
                key={index}
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
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image2",
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },

  {
    img: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=800",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },
  {
    img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image2",
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "image1",
  },
];
