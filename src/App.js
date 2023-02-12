import './App.css';
import emilianologo from './imagenes/emilianologo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };


  const calculadorResultado = () => {

    if(input){
      setInput(evaluate(input));
    }else{
      alert('ingrese algun valor por favor :)');
    }
  };


  return (
    <div className="App">
      <div className='emiliano-logo-contenedor'>
        <img
        src={emilianologo}
        className='emiliano-logo'
        alt='logo calculadora emiliano ' />
      </div>

       
      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>

      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        
        <Boton manejarClic={calculadorResultado}>= </Boton>
      </div>
      </div>


    </div>
  );
}

export default App;
