import React from "react";

const HomePage = (props) => {
  return (
    <>
      <main className="holder">
        <div>
          <img src="./img/home/img01.jpg" alt="avion" />
        </div>
        <div className="columnas">
          <section className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              quasi. Nulla eum deserunt officiis repellendus eius dignissimos ex
              dolorum inventore enim, cum laudantium delectus dolor aperiam
              exercitationem corrupti reiciendis nisi.
            </p>
          </section>
          <section className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
              <span className="cita">Simplemente Excelente</span>
              <span className="autor">Juan Gomez - zapatos.com</span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
