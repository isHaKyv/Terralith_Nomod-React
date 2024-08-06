// src/components/Register.js
import React, { useState } from 'react';
import './Styles/Register.css';
import { useNavigate } from 'react-router-dom';
import terralithImage from '../images/Terralith.png';
import terrarioImage from '../images/Terrario2.png';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogoClick = () => {
        navigate('/Terralith');
    };

    const handleRegister = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del botón

        // Crear el cuerpo de la solicitud
        const body = {
            name: username, // Usamos 'username' como el 'name' del usuario
            surname: '',    // Suponiendo que no se requiere apellido en el formulario
            email: email,   // Correo electrónico ingresado por el usuario
            password: password // Contraseña ingresada por el usuario
        };

        try {
            const response = await fetch('http://localhost:3000/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                // Redireccionar si el registro fue exitoso
                navigate('/TerrarioInfo/TerrarioInfo.html');
            } else {
                // Manejo de errores si la solicitud no fue exitosa
                const errorMessage = await response.text();
                alert(`Error al registrarse: ${errorMessage}`);
            }
        } catch (error) {
            // Manejo de errores en la solicitud
            alert('Error al conectarse con el servidor. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <div className="register-container">
            <div className="image-container">
                <img src={terrarioImage} alt="Terrario" className="side-image" />
            </div>
            <div className="register-form">
                <div className="logo" onClick={handleLogoClick}>
                    <img src={terralithImage} alt="Terralith" className="logo-image" />
                </div>
                <form onSubmit={handleRegister}>
                    <label htmlFor="email">CORREO ELECTRÓNICO</label>
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="username">USERNAME</label>
                    <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button id="register-button" type="submit">Registrarse</button>
                </form>
                <p className="login-link">¿Ya tienes cuenta? <a href="/Login">Inicia sesión</a></p>
            </div>
        </div>
    );
}

export default Register;
