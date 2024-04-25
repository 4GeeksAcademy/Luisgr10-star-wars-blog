import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const PlanetView = (props) => {
    const { actions, store } = useContext(Context);
    const { id } = useParams();
    const [planetData, setPlanetData] = useState(null);

    useEffect(() => {
        actions.getSinglePlanet(id).then((data) => {
            setPlanetData(data); // Almacena los datos del personaje en el estado local
        });
    }, []);

    return (
        <div className="container ">
            <div className="row">
                {planetData && ( // Verifica si planetData tiene datos antes de renderizar
                    <div className="col d-flex justify-content-center flex-column align-items-center">
                        <div className="card mb-3 overflow-hidden" style={{ width: '70%', height: '80%' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` === `https://starwars-visualguide.com/assets/img/planets/1.jpg`
                                        ? 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
                                        : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 className="card-title mb-3 fs-1">{planetData.result.properties.name}</h5>
                                        <p className="card-text">{planetData.result.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Details d-flex justify-content-center mt-3">
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">diameter</h3>
                            <p className="text-light">{planetData.result.properties.diameter}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Climater</h3>
                            <p className="text-light">{planetData.result.properties.climate}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Terrain</h3>
                            <p className="text-light">{planetData.result.properties.terrain}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Created</h3>
                            <p className="text-light">{planetData.result.properties.created}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Population</h3>
                            <p className="text-light">{planetData.result.properties.population}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
