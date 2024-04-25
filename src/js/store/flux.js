
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            singlecharacter: [],
			planets: [],
            singleplanet: [],
			vehicles: [],
            singlevehicle: [],
            favorites: [],
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a function
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                 * fetch().then().then(data => setStore({ "foo": data.bar }))
                 */
            },
            getCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    if (!response.ok) {
                        throw new Error('Failed to fetch Characters');
                    }
                    const data = await response.json();
                    setStore({ characters: data.results });
                    console.log(data);
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            getSingleCharacter: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch Character');
                    }
                    const data = await response.json();
                    setStore({ singlecharacter: data });
                    console.log(data);
                    console
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            getSinglePlanet: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch Planet');
                    }
                    const data = await response.json();
                    setStore({ singleplanet: data });
                    console.log(data);
                    console
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            getSingleVehicle: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch vehicle');
                    }
                    const data = await response.json();
                    setStore({ singlevehicle: data });
                    console.log(data);
                    console
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
		getPlanets: async () => {
			try {
				const response = await fetch('https://www.swapi.tech/api/planets');
				if (!response.ok) {
					throw new Error('Failed to fetch Planets');
				}
				const data = await response.json();
				setStore({ planets: data.results });
				console.log(data.results);
				return data;
			} catch (error) {
				console.error(error);
			}
        },
		getVehicles: async () => {
			try {
				const response = await fetch('https://www.swapi.tech/api/vehicles/');
				if (!response.ok) {
					throw new Error('Failed to fetch Characters');
				}
				const data = await response.json();
				setStore({ vehicles: data.results });
				console.log(data);
				return data;
			} catch (error) {
				console.error(error);
			}
        },
       
        addToFavorites: (item) => {
            const store = getStore();
            const newFavorites = [...store.favorites, item];
            setStore({ favorites: newFavorites });
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        },

        removeFromFavorites: (index) => {
            const store = getStore();
            const newFavorites = [...store.favorites];
            newFavorites.splice(index, 1);
            setStore({ favorites: newFavorites });
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        },
        setFavorites: (favorites) => {
            setStore({ favorites: favorites });
        },
    }
    }
};

export default getState;