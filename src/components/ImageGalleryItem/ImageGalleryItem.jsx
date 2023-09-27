import React from 'react';
import { GalleryItemLi, GalleryItemImg } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({
  id,
  webformatURL,
  onClickImageItem,
  largeImageURL,
}) => {
  const onImageClick = () => {
    onClickImageItem({ src: largeImageURL});
  };
  return (
    <GalleryItemLi key={id} data-id={id} onClick={onImageClick}>
      <GalleryItemImg src={webformatURL} alt='pictureBig' />
    </GalleryItemLi>
  );
};

export default ImageGalleryItem;


