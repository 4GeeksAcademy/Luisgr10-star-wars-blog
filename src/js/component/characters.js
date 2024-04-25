import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { LikeBtn } from './likeBtn/likebtn';

export const Characters = () => {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();

        // Cargar favoritos desde el almacenamiento local al cargar la página
        const favoritesFromStorage = localStorage.getItem('favorites');
        if (favoritesFromStorage) {
            actions.setFavorites(JSON.parse(favoritesFromStorage));
        }
    }, []);

    const handleAddToFavorites = (character) => {
      // Eliminar cualquier instancia existente del mismo personaje de la lista de favoritos
      const updatedFavorites = store.favorites.filter((fav) => fav.name !== character.name);
  
      // Verificar si el personaje ya está en la lista de favoritos por nombre
      if (!updatedFavorites.find((fav) => fav.name === character.name)) {
          // Añadir el nuevo personaje a la lista de favoritos actualizada
          updatedFavorites.push(character);
  
          // Actualizar el estado de la aplicación con la lista de favoritos actualizada
          actions.setFavorites(updatedFavorites);
  
          // Actualizar el almacenamiento local con la lista de favoritos actualizada
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      } else {
          // Si el personaje ya está en la lista de favoritos, mostrar un mensaje de notificación o tomar otra acción si es necesario
          console.log("El personaje ya está en la lista de favoritos");
      }
  };
  

    return (
        <div className="container">
            <div className="text-warning d-flex justify-content-start my-4">
                <h1>Characters</h1>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                freeMode={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[FreeMode]}
                className="mySwiper">
                {store.characters.map((character) => (
                    <SwiperSlide key={character.uid}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className='card-footer d-flex justify-content-between'>
                            <a href={`/character/${character.uid}`} className="btn btn-warning">Learn more</a>
                                <button className='btn btn-dark' onClick={() => handleAddToFavorites(character)}>
                                    <LikeBtn />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

