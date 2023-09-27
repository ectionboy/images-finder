import React, { Component } from 'react'
import { ButtonEl } from './Button.styled'


export default class Button extends Component {
  render() {
    return (
      <ButtonEl type='button' onClick={this.props.onClickRender} >Load more</ButtonEl>
    )
  }
}
