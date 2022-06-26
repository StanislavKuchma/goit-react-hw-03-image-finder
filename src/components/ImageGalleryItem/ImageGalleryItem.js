import React from "react";
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';




const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onOpenModal
}) => {
  const openModal = e=> {

    const image = e.target.alt
   
    // this.props.imageUrl(largeImageURL)
    console.log(image)
  }
  console.log({onOpenModal})
  return <>
    
    <li key={id}  className={s.ImageGalleryItem} onClick={openModal,onOpenModal}>
  <img className={s.ImageGalleryItem_image} src={webformatURL} alt={largeImageURL} />
    </li> 
{/*     
            <li key={data.id} onClick ={this.openModal}>
  <img  src={data.webformatURL} alt={data.largeImageURL} />
</li>  */}

    </>
}
// const openModal = e=> {
//     console.log('OPEN')
//     console.log(e.target)
//   }

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
};
export default ImageGalleryItem;