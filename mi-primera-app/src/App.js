import logo from './logo.svg';
import './App.css';
import Evento from './components/evento.js'
import EventoB from './components/evento.js'
function App() {
  return (
    <div className="App">
        <Evento />
        <EventoB title="Py Pizza 03 - PyPuzzle"
        image="evento1"
        date="">
          </EventoB>     
      </div>
  );
}

export default App;
