import axios from "axios";

export function getCharacter() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3005/character`);
      console.log(data);
      dispatch({
        type: "GET_CHARACTER",
        payload: data,
      });
    } catch (error) {
      console.log("Error en action", error);
    }
  };
}

export function getCharacterDetail(id) {
  return async function (dispatch) {
    try {
      
      const { data } = await axios.get(`http://localhost:3005/character/${id}`);
      console.log(data, "estoy aca");
      dispatch({
        type: "GET_DETAIL",
        payload: data,
      });
    } catch (error) {
      console.log("Error en detail", error);
    }
  };
}

export function addFavorite(character) {
  return async function (dispatch) {
    console.log(character)
    try {
      await axios.post(`http://localhost:3005/favorites`,character);
      dispatch({
        type: "ADD_FAVORITE",
        payload: character,
      });
    } catch (error) {
      console.log("Error al agregar a favoritos", error);
    }
  };
}

export function getFavorites() {
  return async function (dispatch) {
    try {
      const  {data}  = await axios.get(`http://localhost:3005/favorites`);
      console.log(data)
      dispatch({
        type: "GET_FAVORITES",
        payload: data
      });
    } catch (error) {
      console.log("Error al obtener favoritos", error);
    }
  };
}

export function filterLocation(locationName) {
  return async function (dispatch) {
    try {
      console.log(locationName);
      var string = `http://localhost:3005/location/${locationName}`;
      console.log(string);
      const { data } = await axios.get(
        `http://localhost:3005/location/${locationName}`
      );
      console.log(data);
      dispatch({
        type: "FILTER_LOCATION",
        payload: data,
      });
    } catch (error) {
      console.log("Error al obtener locaciones ", error);
    }
  };
}
