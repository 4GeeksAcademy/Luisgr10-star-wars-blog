import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LikeBtn } from './likeBtn/likebtn';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export const Planets = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getPlanets()

        // Cargar favoritos desde el almacenamiento local al cargar la página
        const favoritesFromStorage = localStorage.getItem('favorites');
        if (favoritesFromStorage) {
            actions.setFavorites(JSON.parse(favoritesFromStorage));
        }
    }, []);

    const handleAddToFavorites = (planet) => {
        // Eliminar cualquier instancia existente del mismo personaje de la lista de favoritos
        const updatedFavorites = store.favorites.filter((fav) => fav.name !== planet.name);

        // Verificar si el personaje ya está en la lista de favoritos por nombre
        if (!updatedFavorites.find((fav) => fav.name === planet.name)) {
            // Añadir el nuevo personaje a la lista de favoritos actualizada
            updatedFavorites.push(planet);

            // Actualizar el estado de la aplicación con la lista de favoritos actualizada
            actions.setFavorites(updatedFavorites);

            // Actualizar el almacenamiento local con la lista de favoritos actualizada
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            // Si el personaje ya está en la lista de favoritos, mostrar un mensaje de notificación o tomar otra acción si es necesario
            console.log("El planeta ya está en la lista de favoritos");
        }
    };

    return (
        <div className="container">
            <div className="text-warning d-flex justify-content-start my-4">
                <h1>Planets</h1>
            </div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={5}
                    freeMode={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {store.planets.map((planet, index) => (
                        <SwiperSlide key={index}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg` === `https://starwars-visualguide.com/assets/img/planets/1.jpg`
                                        ? 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
                                        : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-evenly'>
                                    <a href={`/planet/${planet.uid}`} className="btn btn-warning">Learn more</a>
                                    <button className='btn btn-dark' onClick={() => handleAddToFavorites(planet)}>
                                        <LikeBtn />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </>
        </div>
    )
}