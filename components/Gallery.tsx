import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/nag3.JPG",
    thumbnail: "/nag3.JPG",
    description: " 1",
  },
  {
    original: "/nag5.JPG",
    thumbnail: "/nag5.JPG",
    description: "Opis obrazu 2",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "Opis obrazu 3",
  },
  {
    original: "/parapet1.jpg",
    thumbnail: "/parapet1.jpg",
    description: "Opis obrazu 3",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "Opis obrazu 3",
  },
  {
    original: "/parapet2.jpg",
    thumbnail: "/parapet2.jpg",
    description: "Opis obrazu 3",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "Opis obrazu 3",
  },
  {
    original: "/nag5.JPG",
    thumbnail: "/nag5.JPG",
    description: "Opis obrazu 3",
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className="mx-auto max-w-screen-xl">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
