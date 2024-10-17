import React from "react";
import "./stylehome.css"

const Home = () => {
    return (
        <div className="containerhome">
            <div className="text1">
            <h1>Bem-vindo à Página Inicial!</h1>
            <p>Este é um exemplo de página inicial usando React.</p>
            <button onClick={() => alert('Não temos nada aqui...')}>Clique aqui!</button>
            </div>
        </div>
    )
  };
  
  export default Home;