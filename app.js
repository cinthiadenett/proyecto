import React,{Component} from 'react';
import './App.css';
const axios = require("axios");
class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerText = this.handlerText.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {consulteApi:false} ;
  }

  handlerClick(){
    console.log("handleado");

    
    var nombre = this.state.nombre;


    axios.get('$ curl https://www.anapioficeandfire.com/api/characters',{params:{name:nombre}})
      .then( response =>{
        console.log(response.data);
        this.setState({consulteApi:true, data: response.data});
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  handlerText(event){
  handlerChange(event){

    this.setState({nombre: event.target.value});
  }
  render ()
    var resultados;
      if(this.state.consulteApi && this.state.data != 0){
        const ocupaciones = this.state.data[0].occupation.map((o)=>
          <li key={o}>{o}</li>
        );
        const temporadas = this.state.data[0].appearance.map((u)=>
          <li key={u}>{u}</li>
        );
        resultados = (
          <div> 
            <img src={this.state.data[0].img} alt={this.state.data[0].name}></img>
            <h2>{this.state.data[0].name}</h2>
            <p><strong>Nickname: </strong>{this.state.data[0].nickname}</p>
            <p><strong>Ocupaciones:</strong></p>
            <ul>{ocupaciones}</ul>
            <p><strong>Cumpleaños: </strong>{this.state.data[0].birthday}</p>
            <p><strong>Actor: </strong>{this.state.data[0].portrayed}</p>
            <p><strong>Estado: </strong> {this.state.data[0].status}</p>
            <p><strong>Temporadas en las que aparece:</strong> </p>
            <ul>{temporadas}</ul>
          </div>
        );
      }else{
        resultados = <div></div>
      }
    return (
      <div className="App">
        <header className="App-header">
          <h1> Ice and Fire y Game of Thrones API</h1>
          <p>Personaje: </p>
          <input className="boton" type="text" onChange={this.handlerText} ></input>
          <input className="boton" type="text" onChange={this.handlerChange} ></input>
          <button className="boton" onClick={this.handlerClick}>Buscar</button>

          {resultados}


        </header>
      </div>
    );
    }
}
  
