import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './components/Bookshelf';
import { Link } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

class App extends Component {
  static PropTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
  };

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(filteredBooks =>
      this.setState({
        books: filteredBooks
      })
    );
  }

  moveBook = (book, shelf) => {
    if (!this.state.books) {
      BooksAPI.update(book, shelf)
        .then(() => (shelf !== 'none' ? this.context.router.history.push('/') : null))
        .catch(() => alert('Something went wrong! Please try again!'));
    } else {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(object => object.id !== book.id).concat([book])
        }));
      });
    }
  };

  render() {
    // console.log(this.state.books);
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <Search dataBook={this.state.books} moveBook={this.moveBook.bind(this)} />}
        />
        <Route
          exact
          path="/"
          render={() =>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  <Bookshelf
                    title="Currently to Reading"
                    moveBook={this.moveBook.bind(this)}
                    shelf={`currentlyReading`}
                    dataBook={this.state.books}
                  />
                  <Bookshelf
                    title="Want to read"
                    moveBook={this.moveBook.bind(this)}
                    shelf={`wantToRead`}
                    dataBook={this.state.books}
                  />
                  <Bookshelf
                    title="Read"
                    moveBook={this.moveBook.bind(this)}
                    shelf={`read`}
                    dataBook={this.state.books}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>}
        />
      </div>
    );
  }
}

export default App;
