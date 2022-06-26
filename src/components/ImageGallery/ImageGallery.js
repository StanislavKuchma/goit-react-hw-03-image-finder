import React,{PureComponent} from "react";
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
// import { BallTriangle } from  'react-loader-spinner'
import axios from "axios";

export default class ImageGallery extends PureComponent {
  
  state = {
    page: 1,
    images: [],
    // activeImageIdx: 0,
    loading: false,
    error: null,
  }



  componentDidUpdate(prevProps) {
       console.log(prevProps.query)
    console.log(this.props.query)

    if (prevProps.query !== this.props.query) { 
        this.setState({ loading: true , images: []});
  
      fetch(`https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${this.props.query}&image_type=foto&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`)
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally( this.setState({ loading: false }) )
    }
  }

  async componentDidMount() {

    this.setState({ loading: true });
 
    
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${this.props.query}&image_type=foto&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`);
      this.setState({ images: response.data.hits})
      } catch (error) {
      console.log('ERROR')
    } finally {this.setState({ loading: false })}
  }

  componentWillUnmount() {
  
  }
  // getImageUrl = data => {
  //   this.props.imageUrl(data)
  // }
//   shouldComponentUpdate(nextProps, nextState) {
//   return nextState.activeImageIdx !== this.state.activeImageIdx
// }

  // setActiveImage = indx => {
  //   this.setState({activeImageIdx: indx})
  // }

  render() {

    console.log(this.props.onOpenModal)
    // const { activeImageIdx } = this.state
    // const { items } = this.props
    // const activeImage = items[activeImageIdx]
  const images = this.state.images
    return <>
     
      {this.state.loading && <ImSpinner size="64"/>}
             
      <ul className={s.ImageGallery}  >
        {images.map(data =>

          <ImageGalleryItem
            key={data.id}
            webformatURL={data.webformatURL}
            largeImageURL={data.largeImageURL}
            onOpenModal={this.props.onOpenModal}
            imageUrl={this.props.imageUrl } />
     )} 
       </ul>  
      </>
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
}