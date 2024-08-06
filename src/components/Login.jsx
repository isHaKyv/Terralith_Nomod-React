import React from 'react';
import './Styles/Login.css';
import { useNavigate } from 'react-router-dom';

// Importa las imágenes
import terralithImage from '../images/Terralith.png';
import terrarioImage from '../images/Login.png';

function Login() {
    const navigate = useNavigate();  // Usa useNavigate en lugar de useHistory

    const handleLogoClick = () => {
        navigate('/Terralith');  
    };

    const handleRegisterClick = () => {
        navigate('/Register');  
    };

    const handleLoginClick = () => {
        navigate('/InfoTerra');  
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="logo-container" onClick={handleLogoClick}>
                    <img src={terralithImage} alt="Terralith" className="logo-image" />
                </div>
                <label htmlFor="email">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" id="password" name="password" required />
                <button id="login-button" onClick={handleLoginClick}>Iniciar Sesión</button>
                <p className="register-link">¿No tienes cuenta? <a href="/Register">Regístrate</a></p>
            </div>
            <div className="image-container">
                <img src={terrarioImage} alt="Terrario" className="side-image" />
            </div>
        </div>
    );
}

export default Login;
