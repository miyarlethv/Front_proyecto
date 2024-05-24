import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.jpg';
import '../style/style.css';

const Login = () => {
  const [cedula, setCedula] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/Proyecto_final/login.php', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ cedula, contraseña }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else { 
      if (data.tipo === 'Administrador') {
        navigate('/insertar-producto');
      } else {
        navigate('/Menu'); 
      }
    }
  };

  return (
    <section className="container-fluid">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="custom-form text-white">
            <div className="login-container card-body p-2 text-center">
              <div className="mb-md-3 mt-md-2 pb-0">
                <a href="/">
                  <img className="ImgI" src={loginImage} alt="Logo de la página" />
                </a>
              </div> 
              <p className="text mb-5">Introduzca su número de documento y contraseña!</p>
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Usuario</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="user"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="pass"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                </div>
                <button className="btn btn-lg" type="submit">INICIAR SESIÓN</button>
                <div>
                  <Link to="/Registro" className="btn btn-lg"> Registrarme</Link>
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
