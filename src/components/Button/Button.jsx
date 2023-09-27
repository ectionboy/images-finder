import React from 'react'

import { ButtonEl } from './Button.styled'


const Button = ({onClickRender}) => {
  return (
    <ButtonEl type='button' onClick={onClickRender} >Load more</ButtonEl>
    )
}

export default Button
// export default class Button extends Component {
//   render() {
//     return (
//       <ButtonEl type='button' onClick={this.props.onClickRender} >Load more</ButtonEl>
//     )
//   }
// }
