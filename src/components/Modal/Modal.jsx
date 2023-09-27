import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modaldiv, Overlay, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDawn);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDawn);
  }
  handleKeyDawn = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      selectedPhoto: { src, alt },
    } = this.props;
// console.log(this.props)
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modaldiv>
          <Img src={src} alt={alt} />
        </Modaldiv>
      </Overlay>,
      modalRoot
    );
  }
}
