// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/some-other-route'); 
  };

  return (
    <section className="container-fluid">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="custom-form text-white">
            <div className="login-container card-body p-2 text-center">
              <div className="mb-md-3 mt-md-2 pb-0">
                <a href="/">
                  <img className="ImgI" src="imagenes/login.jpg" alt="Logo de la página" />
                </a>
              </div>
              <p className="text mb-5">Introduzca su número de documento y contraseña!</p>
              <form onSubmit={handleSubmit}>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Usuario</label>
                  <input type="text" className="form-control form-control-lg" name="user" />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control form-control-lg" name="pass" />
                </div>
                <button className="btn btn-lg" type="submit">INICIAR SESIÓN</button>
                <div>
                  <a href="/" className="btn btn-lg">REGISTRARME</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
