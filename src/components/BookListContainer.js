import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookListContainer extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// whatever is returned will swow up as props
// inside BookListContainer
function mapStateToProps(state) {
  return { books: state.books };
}

// whatever is returned will swow up as props
// inside BookListContainer
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be
  // passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container
// it needs to know about this new dispatch method selectBook
// Make i available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
