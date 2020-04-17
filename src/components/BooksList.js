import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import PopUp from "./PopUp";


export default class BooksList extends Component {
    render() {
        return (
            <React.Fragment>

                 <div class="container">
                 <br/>
                 <h1>Libros</h1> 
                 <br/>
        <div class="row" >
        <div class="col">
            <Sidebar />
            </div>
             <div class="col">
               <div class="card" style={{width: "18rem;"}}>
  <img src="#" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <PopUp />
  </div>
</div>    
    </div>
    <div class="col">
    
    <div class="card" style={{width: "18rem;"}}>
  <img src="#" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <PopUp />
  </div>
</div> 

    </div>
    <div class="col">
      
    <div class="card" style={{width: "18rem;"}}>
  <img src="#" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <PopUp />
  </div>
</div> 

    </div>
               </div>




    </div>
               </React.Fragment>
        )
    }
}
