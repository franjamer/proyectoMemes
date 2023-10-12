// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {



  const [linea1, setlinea1] = useState('')
  const [linea2, setlinea2] = useState('')
  const [imagen, setimagen] = useState('')
  const onChangeLinea1 = function (evento) {
    setlinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento) {
    setlinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setimagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      // var canvas = document.getElementById("mycanvas");
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download ='meme.png';
      link.href = img;
      link.click();


    });
  }

  return (
    <>
      <div className="App">

        <select onChange={onChangeImagen}>
          <option value="fire" >Casa en Llamas</option>
          <option value="futurama">futurama</option>
          <option value="history">HistoryChanel</option>
          <option value="philosoraptor">philosoraptor</option>
          <option value="matrix">Matrix-Morpheus</option>
          <option value="smart">Smart Guy</option>
        </select><br />
        <input onChange={onChangeLinea1} type='text' placeholder='linea1' /> <br />
        <input onChange={onChangeLinea2} type='text' placeholder='linea2' /> <br />
        <button onClick={onClickExportar}>Exportar</button><br />

        <div className='meme' id="meme">
          <span className="linea1">{linea1}</span>
          <span className='linea2'>{linea2}</span>
          <img className='imagenfondo' src={"/img/" + imagen + ".jpg"} alt="fondo de imagen plantilla" />
        </div>


      </div>
    </>

  );
}

export default App;
