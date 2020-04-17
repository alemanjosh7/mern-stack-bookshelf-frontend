import React, { Component } from 'react';
import Sidebar from './Sidebar';
import PopUp from './PopUp';
import Foto1 from '../images/foto1.jpg';
import axios from 'axios';

export default class BooksList extends Component {

  state = {
    titulo: "Libros",
    books: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://mern-stack-bookshelf.herokuapp.com/api/books';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const books = response.data;
        this.setState({ books });
      })
      .catch(err => console.log(err));
  }

  renderizarBooks() {
    const { books } = this.state;
    if (books.length === 0) {
      return <span>Cargando Libros...</span>
    } else if (books.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de artículos?
      return (
        <React.Fragment>
          <span>Se encontraron {books.length} artículos</span>
          { books.map(book => {
            return (
              <BookList
                titulo={book.title}
               />
            )
          })}
        </React.Fragment>
      )
    }
  }

    render() {
        return (
            <React.Fragment>

                 <div class="container">
                 <br/>
        <h1>{this.state.titulo}</h1> 
        { this.renderizarBooks() }
                 <br/>
        <div class="row" >
        <div class="col">
            <Sidebar />
            </div>
             <div class="col">
               <div class="card" style={{width: "18rem;"}}>
  <img src={Foto1} class="card-img-top" alt="Foto Libro" />
  <div class="card-body">
    <h5 class="card-title">{this.state.books.array.title}</h5>
    <p class="card-text">Libro Acerca de historia.</p>
     <PopUp />
  </div>
</div>    
    </div>
    <div class="col">
    
    <div class="card" style={{width: "18rem;"}}>
  <img src={Foto1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Libro Acerca de historia.</p>
    <PopUp />
  </div>
</div> 

    </div>
    <div class="col">
      
    <div class="card" style={{width: "18rem;"}}>
  <img src={Foto1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Libro Acerca de historia.</p>
    <PopUp />
  </div>
</div> 

    </div>
               </div>




    </div>
    <br/>
               </React.Fragment>
        )
    }
}
