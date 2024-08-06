import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Terralith.css';
import feefeeImage from '../images/Feefee.png';
import terrario3Image from '../images/Terrario3.jpg';
import terralithLogo from '../images/Terralith.png';
import terraInfo1Image from '../images/TerraInfo1.png';
import terraInfo2Image from '../images/terrainfo2.png';
import terraInfo3Image from '../images/terrainfo3.jpg';

const Terralith = () => {
    const navigate = useNavigate();  

    const handleCardClick = () => {
        navigate('/InfoTerra'); 
    };

    return (
        <div>
            <header>
                <nav>
                    <div className="logo" onClick={() => navigate('/Terralith')}>
                        <img src={feefeeImage} alt="Logo" />
                    </div>
                    <div className="nav-links">
                        <button className="login-button" onClick={() => navigate('/Login')}>Login</button>
                        <button className="register-button" onClick={() => navigate('/Register')}>Register</button>
                    </div>
                </nav>
                <div className="banner-container">
                    <img src={terrario3Image} alt="Terralith" className="banner" />
                    <img src={terralithLogo} alt="Terralith Logo" className="banner-logo" />
                    <p className="slogan">Humedad ideal, terrario perfecto.</p>
                </div>
            </header>
            <section className="info-cards">
                <div className="card" onClick={handleCardClick}>
                    <img src={terraInfo1Image} alt="Fácil de usar" />
                    <p>Fácil de usar</p>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={terraInfo2Image} alt="Múltiples terrarios" />
                    <p>Múltiples terrarios</p>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={terraInfo3Image} alt="Humedad en tiempo real" />
                    <p>Humedad en tiempo real</p>
                </div>
            </section>
            <section className="project-info">
                <div className="info-box">
                    <p>Terrarios registrados</p>
                    <p className="highlight">500</p>
                    <p>en los últimos 3 meses</p>
                </div>
                <div className="info-box">
                    <p>Donaciones al proyecto</p>
                    <p className="highlight">$2500</p>
                    <p>dólares</p>
                </div>
                <div className="info-box">
                    <p>Usuarios registrados</p>
                    <p className="highlight">140</p>
                    <p>en el último mes</p>
                </div>
            </section>
        </div>
    );
}

export default Terralith;
