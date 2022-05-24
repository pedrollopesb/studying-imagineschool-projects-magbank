import React from "react";
// Primeiro precisamos importar o React, pois todo componente precisa ter o React importado.
import Navbar from "./components/Navbar";
// Estamos importando o Header para cá, depois de fazer a exportação do mesmo lá na página dele.
import "./App.scss";

const App = () => (
  <div className="App">
    <Navbar />
    {/* Tudo o que a gente passa como parâmetros para o nosso componente, será agregando dentro de um componente chamado "prop". É como se fosse um objeto que terá um valor de texto e de cor, como:
      prop = {
        text: "Magbank",
        color: "#F00"
      }*/}
  </div>
);

export default App;
