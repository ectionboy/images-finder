import React, { useCallback, useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchPhoto } from '../api/imageFinder';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Appdiv } from './App.styled';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const fetchPhotos = useCallback(async () => {
    setIsLoading(true);
    searchPhoto(search, page)
      .then(data => {
        if (data.totalHits === 0) {
          alert(
            'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
          );
          return;
        }
        const totalPage = Math.ceil(data.totalHits / 12);
        if (totalPage > page) {
          setBtnLoadMore(true);
        } else {
          alert('Вибачте, але ви досягли кінця результатів пошуку.');
          setBtnLoadMore(false);
        }
        const arrPhotos = data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );
        setPhotos([...arrPhotos]); //problem---------
      })
      .catch(error => {
        console.log(error);
        return alert('Щось пішло не так. Будь-ласка спробуйте пізніше.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search, page]);

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchPhotos();
  }, [fetchPhotos, search, page]);

  const onSubmit = value => {
    if (value === search) {
      alert('Будь ласка, введіть новий запит!');
      return;
    }
    if (value.trim() === '') {
      alert('Будь ласка, введіть новий запит!');
      return;
    }
    setSearch(value);
    setPage(1);
    setPhotos([]);
    setBtnLoadMore(false);
  };
  const onClickNext = () => {
    setPage(page + 1);
  };
  const onClickOpenModal = selectedPhoto => {
    setSelectedPhoto(selectedPhoto);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  return (
    <>
      <Appdiv>
        <Searchbar onSubmit={onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery photos={photos} onClickImageItem={onClickOpenModal} />
        {photos.length !== 0 && btnLoadMore && (
          <Button onClickRender={onClickNext} />
        )}
        {showModal && (
          <Modal selectedPhoto={selectedPhoto} onClose={closeModal} />
        )}
      </Appdiv>
    </>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     isloading: false,
//     photos: [],
//     photoName: '',
//     page: '',
//     btnLoadMore: false,
//     showModal: false,
//     selectedPhoto: null,
//     data:''
//   }

// componentDidUpdate(_, prevState) {
//   const { photoName, page } = this.state;
//   if (photoName !== prevState.photoName || page !== prevState.page) {
//     this.setState({ isloading: true });

//     searchPhoto(photoName, page)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.totalHits === 0) {
//           alert(
//             'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
//           );
//           return;
//         }
//         const totalPage = Math.ceil(data.totalHits / 12);

//         if (totalPage > page) {
//           this.setState({ btnLoadMore: true });
//         } else {
//           alert('Вибачте, але ви досягли кінця результатів пошуку.');
//           this.setState({ btnLoadMore: false });
//         }
//         const arrPhotos = data.hits.map(
//           ({ id, webformatURL, largeImageURL, tags }) => ({
//             id,
//             webformatURL,
//             largeImageURL,
//             tags,
//           })
//         );

//         this.setState(prevState => ({
//           photos: [...prevState.photos, ...arrPhotos],
//         }));
//       })
//       .catch(error => {
//         console.log(error);
//         return alert(
//           'Щось пішло не так. Будь-ласка спробуйте пізніше.'
//         );
//       })
//       .finally(() => {
//         this.setState({ isloading: false});
//       });
//   }

// }
//   onSubmit = value => {
//     if (value === this.state.photoName) {
//       alert('Будь ласка, введіть новий запит!');
//       return;
//     }
//     this.setState({
//       photoName: value,
//       page: 1,
//       photos: [],
//       btnLoadMore: false,
//     });
//   }
//   onClickRender = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };
//   onClickOpenModal = selectedPhoto => {
//     this.setState({ selectedPhoto, showModal: true });
//   };

//   closeModal = () => {
//     this.setState({ selectedPhoto: null, showModal: false });
//   };

//   render() {
//     const { isloading, showModal, selectedPhoto} = this.state;
//      //console.log(this.state)
//     return (
//       <><Appdiv>
//       <Searchbar onSubmit={this.onSubmit} />
//       {isloading && <Loader />}
//       <ImageGallery photos={this.state.photos} onClickImageItem={this.onClickOpenModal}/>
//       {this.state.photos.length !== 0 && this.state.btnLoadMore && (
//           <Button onClickRender={this.onClickRender} />
//         )}
//         {showModal && (
//           <Modal selectedPhoto={selectedPhoto} onClose={this.closeModal} />
//         )}
//         </Appdiv>
//       </>
//     )
//   }
// }

// export default App
