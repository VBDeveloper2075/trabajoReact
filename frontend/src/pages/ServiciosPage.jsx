import React from "react";

const ServiciosPage = (props) => {
  return (
    <main className="holder">
      <h2>Servicios</h2>
      <div className="servicio">
        <img src="img/servicios/ferroviario.jpg" alt="tren" />
        <div className="info">
          <h4>Transporte Ferroviario</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eos expedita nisi ipsa, exercitationem impedit ullam neque tempore?
            Similique nihil corporis omnis eius asperiores dolorum blanditiis
            error atque nam aliquam!
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="img/servicios/aereo.jpg" alt="avion" />
        <div className="info">
          <h4>Transporte Aéreo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eos expedita nisi ipsa, exercitationem impedit ullam neque tempore?
            Similique nihil corporis omnis eius asperiores dolorum blanditiis
            error atque nam aliquam!
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="img/servicios/maritimo.jpg" alt="barco" />
        <div className="info">
          <h4>Transporte Marítimo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eos expedita nisi ipsa, exercitationem impedit ullam neque tempore?
            Similique nihil corporis omnis eius asperiores dolorum blanditiis
            error atque nam aliquam!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServiciosPage;
