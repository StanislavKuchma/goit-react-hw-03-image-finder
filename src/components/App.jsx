import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer} from 'react-toastify';
import './styles.css'


export class App extends React.Component {
  state = {
  query: '',
  showModal: false
  }

  handleFormSubmit = searchQuery => {
    this.setState({query: searchQuery})
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal:!showModal
    }))
  }
  //   getImageUrl = data => {
  //   this.props.imageUrl(data)
  // }

  openModal = (largeImageURL) => {
      this.toggleModal();

this.props.imageUrl(largeImageURL)
      

console.log(this.props.imageUrl)

  }  



  render() {
    const { showModal } = this.state;
    return (
<>
        <ToastContainer/> 
        <Searchbar onSubmit={this.handleFormSubmit}/>

  
        {this.state.query && <ImageGallery
          query={this.state.query}
           />}
        {showModal && <Modal
          onClose={this.toggleModal}
          imageUrl={"https://pixabay.com/get/g0f1fdc15f29cfc07ac8bf072da13d044d248afb5228a086e1088022e0de66da36ad334146aa1bb7c2d4a6fd0a252118a_1280.jpg"}
        />}
        
        {this.state.query && <Button onClick={ this.openModal} />}
           
  </>
     
  );
};
}