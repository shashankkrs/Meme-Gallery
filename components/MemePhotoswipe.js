// components/MemePhotoswipe.js
import React from "react";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

const MemePhotoswipe = ({ memes, selectedImage, onClose }) => {
  const items = memes.map((meme) => ({
    src: meme.url,
    w: meme.width ?? 0,
    h: meme.height ?? 0,
    title: meme.title,
  }));


  return (
    <PhotoSwipe
      isOpen={true}
      items={items}
      options={{ index: selectedImage }}
      onClose={onClose}
    />
  );
};

export default MemePhotoswipe;
