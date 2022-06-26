import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from "./Searchbar.module.css";
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';


export class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  }

  handleChange = e => {
     this.setState({ searchQuery: e.currentTarget.value });
    };

  handleSubmit = e => {
    e.preventDefault();

      if (this.state.searchQuery.trim() === '') {
         toast('Input query')
      return;
    }

  this.props.onSubmit(this.state.searchQuery)
      // this.reset();
    }
    // reset = () => {
    //     this.setState({ searchQuery: ''});    
    // }
  // async componentDidUpdate() {

  //   this.setState({ loading: true });
    
  //   try {
  //     const response = await axios.get(`https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${this.state.searchQuery}&image_type=foto&orientation=horizontal&safesearch=true&per_page=40&page=12`);
      //   this.page += 1;
    
      // if (response.data.total == 0) {
      //     Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
      //     } else
      // if (this.page * 40 >response.data.total) {
      //         Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
      // }
      // return response.data.hits
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log('ERROR')
  //   } finally {this.setState({ loading: false })}
  // }
  render() {
    return<>
    <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton} >
            <span className=""><BsSearch /></span>
          </button>
          <input onChange = {this.handleChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
 </>
  }
}
Searchbar.propTypes = {
    searchQuery: PropTypes.string,
};
export default Searchbar;
