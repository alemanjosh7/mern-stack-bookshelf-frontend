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
          <span>Se encontraron {books.length} libros</span>
          { books.map(book => {
            return (
            
                <div className="col">
               <div className="card" style={{width: "18rem;"}}>
  <img src={Foto1} className="card-img-top" alt="Foto Libro" />
  <div className="card-body">
    <h5 className="card-title">{book.title}</h5>
    <p className="card-text"><strong>Categoria:</strong> {book.category}</p>
     <PopUp />
  </div>
</div>    <br />  <br />
    </div>   
         
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
      
                 <br/>
        <div class="row" >
        <div class="col">
            <Sidebar />
            </div>
             
            { this.renderizarBooks() }
    
               </div>




    </div>
    <br/>
               </React.Fragment>
        )
    }
}
