import React from 'react';
import IndividualBook from './IndividualBook';

function Bookshelf(props) {
  let dataBook = props.dataBook;
  let moveBook = props.moveBook;
  let shelf = props.shelf;
  let title = props.title;
  let whatShelf;

  whatShelf = dataBook.filter(book => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {whatShelf.map(book => <IndividualBook moveBook={moveBook} book={book} key={book.id} />)}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
