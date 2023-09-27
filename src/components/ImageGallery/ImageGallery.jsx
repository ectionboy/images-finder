import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled'

export const ImageGallery = ({ photos, onClickImageItem }) => (

      <>
        <ImageList className="gallery">
          {photos.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClickImageItem={onClickImageItem}

            />
          ))}
        </ImageList>
      </>
    );
    export default ImageGallery;