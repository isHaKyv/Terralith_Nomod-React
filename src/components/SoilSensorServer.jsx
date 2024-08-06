import React, { useEffect, useState } from 'react';
import './Styles/SoilSensorServer.css';

function SoilSensorServer() {
    const [moisture, setMoisture] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [proximity, setProximity] = useState(0);
    const [status, setStatus] = useState("Status");
    const url = "ws://192.168.3.93:81/";

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = function (event) {
            const data = JSON.parse(event.data);

            setMoisture(data.humidity);
            setTemperature(data.temperature);
            setProximity(data.proximity);
            setStatus(data.status);
        };

        ws.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, []);

    useEffect(() => {
        const water = document.getElementById("water");
        if (water) {
            water.style.transform = `translate(0, ${100 - moisture}%)`;
        }
    }, [moisture]);

    return (
        <div className="container">
            <div className="box">
                <div className="percent" id="moisture">{moisture}%</div>
                <div className="water" id="water"></div>
            </div>
            <div className="box">
                <div className="percent" id="temperature">{temperature}°C</div>
            </div>
            <div className="box">
                <div className="percent" id="proximity">{proximity}</div>
            </div>
            <div className="box">
                <div className="percent" id="status">{status}</div>
            </div>
        </div>
    );
}

export default SoilSensorServer;
