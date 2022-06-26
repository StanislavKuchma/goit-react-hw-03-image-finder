import React from "react";
import s from './Modal.module.css'


export default class Modal extends React.Component{
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }
  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }
  handleBackdropClick = e => {
    if (e.current.target === e.target) {
      this.props.onClose();
    }
  }


  render() {
    console.log(this.props.imageUrl)
    return <div className={s.Overlay} onClick={this.handleBackdropClick}>
      <div className={s.Modal}>
    <img src={this.props.imageUrl} alt="" />
  </div>
</div>}
}