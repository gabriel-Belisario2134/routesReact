import React from "react";

const Blogs = () => {
    return (
      <div className="containerhome">
        <div className="text1">
          <h1>Tipos de Café</h1>
          <div className="cafe-item">
            <h2>Espresso</h2>
            <p>
              O espresso é um café concentrado e encorpado, preparado rapidamente
              sob alta pressão. É a base de várias outras bebidas de café.
            </p>
          </div>
          <div className="cafe-item">
            <h2>Cappuccino</h2>
            <p>
              O cappuccino é uma mistura de café espresso, leite vaporizado e uma
              camada de espuma de leite. Tradicionalmente, ele é servido em uma
              xícara pequena.
            </p>
          </div>
          <div className="cafe-item">
            <h2>Latte</h2>
            <p>
              O latte é uma bebida à base de café que contém mais leite vaporizado
              do que espuma, resultando em uma textura mais suave e cremosa.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;