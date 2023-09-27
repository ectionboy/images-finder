import React from 'react'

import { Audio } from 'react-loader-spinner';


const Loader = () => {
  return (
<Audio
      
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
    />  )
}

export default Loader

// export default class Loader extends Component {
//   render() {
//     return (
      
//         <Audio
      
//         height="80"
//         width="80"
//         radius="9"
//         color="green"
//         ariaLabel="loading"
//       />
    
      
//     );
//   }
// }
