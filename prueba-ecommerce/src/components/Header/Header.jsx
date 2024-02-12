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
      
      </section>
    </body>
  );
};

export default App;
