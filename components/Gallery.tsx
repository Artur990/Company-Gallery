import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "/nag3.JPG",
    thumbnail: "/nag3.JPG",
    description: "1",
  },
  {
    original: "/nag1.JPG",
    thumbnail: "/nag1.JPG",
    description: "2",
  },
  {
    original: "/nag5.JPG",
    thumbnail: "/nag5.JPG",
    description: "3",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "4",
  },
  {
    original: "/parapet1.jpg",
    thumbnail: "/parapet1.jpg",
    description: "5",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "6",
  },
  {
    original: "/parapet2.jpg",
    thumbnail: "/parapet2.jpg",
    description: "7",
  },
  {
    original: "/nag6.JPG",
    thumbnail: "/nag6.JPG",
    description: "8",
  },
  {
    original: "/nag5.JPG",
    thumbnail: "/nag5.JPG",
    description: "9",
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className="relative">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
