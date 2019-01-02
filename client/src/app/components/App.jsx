import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieList from './common/MovieList';
import Navbar from './common/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.autoLoad = this.autoLoad.bind(this);
  }

  componentDidMount() {
    const {
      getMovies,
      setFilter,
      filter,
      match,
    } = this.props;

    if (match && match.params.filter) {
      setFilter(match.params.filter.replace(/i/g, 'ı').toUpperCase());
    }

    getMovies(1, filter);

    window.onscroll = () => {
      const scy = Number.parseInt(window.scrollY, 10);
      if ((window.innerHeight + scy) >= document.body.offsetHeight) {
        this.autoLoad();
      }
    };
  }

  autoLoad() {
    const { getMovies, page, filter } = this.props;
    getMovies(page, filter);
  }

  render() {
    const { movies, user, isLoggedIn, setFilter } = this.props;
    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} setFilter={setFilter} />
        <MovieList movies={movies} id="list" />
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  user: {},
};

App.propTypes = {
  getMovies: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  match: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
  }),
  page: PropTypes.number.isRequired,
  movies: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.instanceOf(Object).isRequired,
};
