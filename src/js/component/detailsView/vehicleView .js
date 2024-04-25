import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const VehicleView = (props) => {
    const { actions, store } = useContext(Context);
    const { id } = useParams();
    const [vehicleData, setVehicleData] = useState(null);

    useEffect(() => {
        actions.getSingleVehicle(id).then((data) => {
            setVehicleData(data); // Almacena los datos del personaje en el estado local
        });
    }, []);

    return (
        <div className="container ">
            <div className="row">
                {vehicleData && ( // Verifica si vehicleData tiene datos antes de renderizar
                    <div className="col d-flex justify-content-center flex-column align-items-center">
                        <div className="card mb-3 overflow-hidden" style={{ width: '70%', height: '80%' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="img-fluid " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 className="card-title mb-3 fs-1">{vehicleData.result.properties.name}</h5>
                                        <p className="card-text">{vehicleData.result.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Details d-flex justify-content-center mt-3">
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Model</h3>
                            <p className="text-light">{vehicleData.result.properties.model}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Vehicle class</h3>
                            <p className="text-light">{vehicleData.result.properties.vehicle_class}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Manufacturer</h3>
                            <p className="text-light">{vehicleData.result.properties.manufacturer}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Passengers</h3>
                            <p className="text-light">{vehicleData.result.properties.passengers}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Created</h3>
                            <p className="text-light">{vehicleData.result.properties.created}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
