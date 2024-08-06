import React, { useState, useEffect } from 'react';
import './Styles/TerrarioInfo.css';
import Terrario5 from '../images/Terrario5.jpg';
import { useNavigate } from 'react-router-dom';

function TerrarioInfo() {
  const [terrarios, setTerrarios] = useState([]);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);
  const [selectedTerrario, setSelectedTerrario] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTerrario, setNewTerrario] = useState({ name: '', imgUrl: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const storedTerrarios = localStorage.getItem('terrarios');
    if (storedTerrarios) {
      setTerrarios(JSON.parse(storedTerrarios));
    }
  }, []);

  const handleAddTerrario = () => {
    setModalVisible(true);
  };

  const handleGuardarTerrario = (e) => {
    e.preventDefault();
    const fechaRegistro = new Date().toLocaleDateString();
    const newTerrarioList = [...terrarios, { ...newTerrario, fechaRegistro }];
    setTerrarios(newTerrarioList);
    localStorage.setItem('terrarios', JSON.stringify(newTerrarioList));
    setModalVisible(false);
    setNewTerrario({ name: '', imgUrl: '' });
  };

  const handleVerDatos = () => {
    navigate('/SoilSensorServer');
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
  };

  const handleSeleccionarTerrario = (terrario) => {
    setSelectedTerrario(terrario);
    setInfoPanelVisible(true);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={Terrario5} alt="Terrario" className="main-image" />
      </div>
      <div className="terrario-list">
        <h2 className="header">Terrarios Guardados</h2>
        <div id="terrario-items">
          {terrarios.map((terrario, index) => (
            <div key={index} className="terrario-item">
              <p>{terrario.name}</p>
              <button onClick={() => handleSeleccionarTerrario(terrario)}>Ver info</button>
            </div>
          ))}
        </div>
        <button className="floating-add-button" onClick={handleAddTerrario}>
          +
        </button>
      </div>
      {infoPanelVisible && selectedTerrario && (
        <div id="info-panel" className="info-panel">
          <h2 className="header">INFORMACIÓN</h2>
          <img id="info-img" src={selectedTerrario.imgUrl} alt="Terrario" />
          <p id="info-date">Fecha de Registro: {selectedTerrario.fechaRegistro}</p>
          <p id="info-data">Últimos Datos Guardados: --</p>
          <button id="view-data-btn" onClick={handleVerDatos}>
            VER DATOS
          </button>
        </div>
      )}
      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCerrarModal}>
              &times;
            </span>
            <h2 className="header">Agregar Nuevo Terrario</h2>
            <form id="terrario-form" onSubmit={handleGuardarTerrario}>
              <label htmlFor="terrario-name">Nombre del Terrario:</label>
              <input
                type="text"
                id="terrario-name"
                value={newTerrario.name}
                onChange={(e) => setNewTerrario({ ...newTerrario, name: e.target.value })}
                required
              />
              <label htmlFor="terrario-img-url">URL de la Foto del Terrario:</label>
              <input
                type="url"
                id="terrario-img-url"
                value={newTerrario.imgUrl}
                onChange={(e) => setNewTerrario({ ...newTerrario, imgUrl: e.target.value })}
                required
              />
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TerrarioInfo;
