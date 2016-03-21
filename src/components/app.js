import React, { Component } from 'react';
import BookListContainer from './BookListContainer';
import BookDetailContainer from './BookDetailContainer';

class App extends Component {
  render() {
    return (
      <div>
        <BookListContainer />
        <BookDetailContainer />
      </div>
    );
  }
}

export default App;
