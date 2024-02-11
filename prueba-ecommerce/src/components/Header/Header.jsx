import React from 'react';
import './Header.css';
const App = () => {
  return (
    <body>
      <section>
        {/* HEADER */}
        <header>
          <section className="sec1">
            <div className="logo">
              {/* <img src="img.jpg" alt="LOGO" /> */}
              <h1>E-BIKE</h1>
            </div>
            <div className="navigate">
              <a href="#" className="margin">
                Bicicletas <i className="bi bi-caret-down"></i>
              </a>
              <a href="#" className="margin">
                Accesorios <i className="bi bi-caret-down"></i>
              </a>
              
              <div className="margenbtn">
                <form action="">
                  <input type="search" className="form1" name="" id="" />
                  <a href="#" className="lupa">
                    {' '}
                    <i className="bi bi-search"></i>{' '}
                  </a>
                </form>
              </div>
            </div>
            {/* Login */}
            <div className="divlog">
              <a href=""className='inises'>Iniciar Sesión </a>
            </div>
            <div className="icons1">
              <a href="" className='iconstyle'>
                <i className="bi bi-heart"></i>
              </a>
              <a href="" className='iconstyle'>
                <i className="bi bi-person"></i>
              </a>
              <a href="" className='iconstyle'>
                <i className="bi bi-cart3"></i>
              </a>
            </div>
          </section>

          <section className="sec2"></section>
        </header>

        {/* COMIENZO MAIN */}
        <main>
          <section className="secmain3">
            <div className="partes">
              <a href="" className="elementos">
                Parte
              </a>
              <select
                autoComplete="off"
                className="bt_adf_filterSelect"
                name="tipo_parte"
                id="tipo_parte"
              >
                <option value="" selected="">
                  Selecciona un tipo de parte
                </option>
                {/* ... Opciones del select para Parte */}
              </select>
            </div>

            <div className="partes">
              <a href="" className="elementos">
                Modelo
              </a>
              <select
                autoComplete="off"
                className="bt_adf_filterSelect"
                name="tipo_parte"
                id="tipo_parte"
              >
                <option value="" selected="">
                  Selecciona un tipo de Modelo
                </option>
                {/* ... Opciones del select para Modelo */}
              </select>
            </div>

            <div>
              <a href="" className="elementos">
                Año
              </a>
              <div className="bt_adf_selectContainer">
                <select autoComplete="off" className="bt_adf_filterSelect" name="anio" id="anio">
                  <option value="" selected="">
                    Selecciona un año
                  </option>
                  {/* ... Opciones del select para Año */}
                </select>
                <i className="bt_adf_carret"></i>
              </div>
            </div>
          </section>
          <section>
            <div className="borde">
              <p>CARUSSEL</p>
            </div>
          </section>
        </main>
      </section>
    </body>
  );
};

export default App;
