import React from 'react';
import './App.css';
import Tablero from './components/Tablero';
import TableroB from './components/TableroB';
import TableroC from './components/TableroC';
import TableroD from './components/TableroD';
import TableroE from './components/TableroE';
import Juego from './components/Juego';
import JuegoA from './components/JuegoA';
import CuadroB from './components/CuadroB';

function App() {

  function TableroE({ cuadros, onclick }) {
    function renderizarCuadro(i){
      return (
        <CuadroB
        valor={i}
        funcion={()=> onclick(i)}
        />
      );
    }
  }


  return (
    <div className="App">

    {/*Tablero />
      </TableroB />
      <TableroE />
  <Juego />*/}
      <JuegoA />
    </div>
  );
}

export default App;