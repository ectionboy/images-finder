import { Header, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled'


import React, { useState } from 'react'

const Searchbar = ({onSubmit}) => {
const [value, setValue] = useState('')

const inputChange = ({ target: { value } }) => {
setValue(value)};
const formSubmit = e => {
  e.preventDefault();
  onSubmit(value);
  reset();
};
const reset = () => {setValue('')}

  return (
<Header className="searchbar">
        <SearchForm onSubmit={formSubmit} className="form">
          <SearchFormButton type="submit" className="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
</svg>
          </SearchFormButton>

          <SearchFormInput
            name="value"
            onChange={inputChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </SearchForm>
      </Header>  )
}

export default Searchbar
// export default class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   inputChange = ({ target: { value } }) => {
//     this.setState({ value });
//   };
//   formSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.value);
//     this.reset();
//   };
//   reset = () =>
//   this.setState({
//     value: '',
//   });
//   render() {
//     return (
//       <Header className="searchbar">
//         <SearchForm onSubmit={this.formSubmit} className="form">
//           <SearchFormButton type="submit" className="button">
//           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
// <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
// </svg>
//           </SearchFormButton>

//           <SearchFormInput
//             name="value"
//             onChange={this.inputChange}
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }
