import React, { Component } from "react";
import axios from "axios";

export default class CreateBook extends Component {
  state = {
    books: [],
    title: "",
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://mern-stack-bookshelf.herokuapp.com/api/books"
    );
    this.setState({
      books: res.data
    });
  }

  onChangeTitle = e => {
    this.setState({
        title: e.target.value,
        description: e.target.value,
        author: e.target.value,
        category: e.target.value,
        bookImage: e.target.value,
        urlBookDrive: e.target.value,
    })
}


  onSubmit = async (e) => {
      const res = await axios.post('https://mern-stack-bookshelf.herokuapp.com/api/books', {
          title: this.state.title,
          description: this.state.description,
          author: this.state.author,
          category: this.state.category,
          bookImage: this.state.bookImage,
          urlBookDrive: this.state.urlBookDrive
      })
      console.log(res);
    e.preventDefault();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New Book</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                  type="text"
                  className="form-control mt-2" placeholder="Type the title of the book"
                  onChange={this.onChangeTitle}
                />
                <input
                  type="text"
                  className="form-control mt-2" placeholder="Type the description of the book"
                  onChange={this.onChangeTitle.description}
                />
                <input
                  type="text"
                  className="form-control mt-2" placeholder="Type the author of the book"
                  onChange={this.onChangeTitle.author}
                />
                <input
                  type="text"
                  className="form-control mt-2" placeholder="Type the category of the book"
                  onChange={this.onChangeTitle.category}
                />
                <input
                  type="text"
                  className="form-control mt-2" placeholder="Upload an image of the book"
                  onChange={this.onChangeTitle.bookImage}
                />
                <input
                  type="text"
                  className="form-control mt-2" placeholder="Type the url of the drive of the book"
                  onChange={this.onChangeTitle.urlBookDrive}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.books.map((book) => (
              <li
                className="list-group-item list-group-item-action"
                key={book._id}
              >
                  
                {book.title} <br></br>
                {book.description}<br></br>
                {book.author} <br></br>
                {book.category}
                
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    );
  }
}
