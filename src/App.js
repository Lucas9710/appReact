import React from 'react';
import './App.css';


//function Helloword(props) {
 // return (
 // <div id="hello">
 // <h3>{props.subtitle}</h3>
  //{props.mytext}
 // </div>
 // );
//}
 
class Helloword extends React.Component{
  
  state = {
    show: true
  }
    mostrarTexto = () => {
      
        this.setState({show: false})
    }
      render() {
   if(this.state.show){
    return (
      <div id="hello">
     <h3>{this.props.subtitle}</h3>
     {this.props.mytext}
      <button onClick={this.mostrarTexto}>Cambiar estado</button>
      </div>
    )
  } else{
    return <h1>there are not elements</h1>
  }
 }
}

function App() {
  return (
    <div>this my component: <Helloword mytext="hola lucas" subtitle="tu mama"/> 
    <Helloword mytext="hola mundo"subtitle="tu mama"/>
    <Helloword mytext="hola "subtitle="tu mama"/>
    </div>
  );
}

export default App;
