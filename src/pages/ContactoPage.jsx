import React from "react";

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Teléfono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div class="datos">
        <h2>Otras vías de comunicación</h2>
        <p>También puede contactar con nosotros usando los siguientes medios</p>
        <ul>
          <li>Teléfono: 34567890</li>
          <li>Email: contacto@transportesx.com.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
