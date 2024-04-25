import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const CharacterView = (props) => {
    const { actions, store } = useContext(Context);
    const { id } = useParams();
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        actions.getSingleCharacter(id).then((data) => {
            setCharacterData(data); // Almacena los datos del personaje en el estado local
        });
        actions.getSinglePlanet(id)
    }, []);

    return (
        <div className="container ">
            <div className="row">
                {characterData && ( // Verifica si characterData tiene datos antes de renderizar
                    <div className="col d-flex justify-content-center flex-column align-items-center">
                        <div className="card mb-3 overflow-hidden" style={{ width: '70%', height: '80%' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 className="card-title mb-3 fs-1">{characterData.result.properties.name}</h5>
                                        <p className="card-text">{characterData.result.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Details d-flex justify-content-center mt-3">
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Height</h3>
                            <p className="text-light">{characterData.result.properties.height}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Hair color</h3>
                            <p className="text-light">{characterData.result.properties.hair_color}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Eye color</h3>
                            <p className="text-light">{characterData.result.properties.eye_color}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Birth year</h3>
                            <p className="text-light">{characterData.result.properties.birth_year}</p>
                            </div>
                            <div className="flex-column p-3 border-end border-warning">
                            <h3 className="text-warning">Gender</h3>
                            <p className="text-light">{characterData.result.properties.gender}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
