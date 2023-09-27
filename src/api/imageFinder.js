// import axios from "axios";
// axios.defaults.baseURL = 'https://pixabay.com/api/'

// export const getGallery = async (search, page) => {
//     const value = `?q=${search.replaceAll(' ', '+')}&page=${page}&key=39585428-0c09460477541b55dfc888952&image_type=photo&orientation=horizontal&per_page=12`;
//     console.log(value)
//     const {searchPhoto} = await axios(value)
//     return searchPhoto;
// } 

// const value = `?q=cat&page=${page}&key=39585428-0c09460477541b55dfc888952&image_type=photo&orientation=horizontal&per_page=12`;

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39585428-0c09460477541b55dfc888952';

export const searchPhoto = (searchValue, page) => {
  return fetch(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
  .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
};

export default searchPhoto;