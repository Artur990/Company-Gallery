import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

function srcset(image: any, size: any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  return (
    <SRLWrapper>
      <ImageList
        id="imageList"
        variant="quilted"
        cols={4}
        rowHeight={200}
        style={{ margin: 15 }}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            cols={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].cols
            }
            rows={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].rows
            }
            sx={{
              opacity: ".7",
              transition: "opacity .3s linear",
              cursor: "pointer",
              "&:hover": { opacity: 1 },
            }}
          >
            <Image
              width={200}
              height={200}
              {...srcset(
                item.img,
                200,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].rows,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].cols
              )}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </SRLWrapper>
  );
}

const itemData = [
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
  {
    img: "/nag3.JPG",
    title: "nagrobki",
  },
];

const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];
