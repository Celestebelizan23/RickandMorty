import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacter,
  filterLocation,
  addFavorite,
} from "../actions/index";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Paginate from "./Paginate";
import "../styles/card.css";
import "../styles/paginate.css";
import "../styles/home.css";
import "../styles/favorites.css";
import axios from "axios";


export default function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(3);
  const allCharacte = useSelector((state) => state.allCharacters);
  console.log(allCharacte);
  const allCharacter = allCharacte.data ? allCharacte.data : allCharacte;
  const [newFavorites, setNewFavorites] = useState("");
  const [favorites] = useState([]);
  const [location, setLocation] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [character, setCharacter] = useState([]);
  const [locationName, setLocationName] = useState("");
  const indexOfLastCharacter = currentPage * characterPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage;




  const currentCharacter =
    allCharacter && allCharacter.length > 0
      ? allCharacter.slice(indexOfFirstCharacter, indexOfLastCharacter)
      : [];

  const totalCharacters = allCharacter ? allCharacter.length : 0;
  const totalPages = Math.ceil(totalCharacters / characterPerPage);

  if (totalPages > 0 && currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  function handleNewFavorites(event) {
    event.preventDefault();
    const personajeEncontrado = allCharacter.filter(c=>c.name.toLowerCase () === newFavorites.toLocaleLowerCase ()) [0]
    dispatch(addFavorite(personajeEncontrado));
    setNewFavorites("");
  }

  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacter());
  }, [dispatch]);

  useEffect(() => {
    setCharacterPerPage(3);
  }, [currentPage, allCharacter]);

  function handleClickCharacter(e) {
    e.preventDefault();
    dispatch(getCharacter());

  }

  function handleClickCharacter(location) {
    dispatch(getCharacter(location));
    selectedCharacter(null);
  }

 
  function handlePrev(e) {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  }
  function handleNext(e) {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  }

  function handleFilterLocation(e, filterLocation) {
    dispatch(filterLocation(e.target.value));
  }

  async function getLocation() {
    const response = await fetch(
      "https://rickandmortyapi.com/api/location?page=1"
    );
    const data = await response.json();
    setLocation(data.results);
  }

  const handleClick = async (locationName) => {
    console.log(locationName);
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?location=${locationName}`
    );
    setLocationName(locationName);
    setSelectedCharacter(res.data.results);
  };

  {
    selectedCharacter && (
      <div>
        <h2>Personajes en {locationName}:</h2>
        <Card character={selectedCharacter} />
      </div>
    );
  }

  useEffect(() => {
    async function fetchLocation() {
      await getLocation();
    }
    fetchLocation();
  }, []);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      const data = await response.json();
      setCharacter(data.results);
    }
    fetchCharacter();
  }, []);

  return (
    <div id="HomeDiv">
  

       <Link to={"/favorites"}>
          <button id="BotonFavorito" className="boton-favorito">Favorites</button>
        </Link> 


      <h1 id="titulo">Rick and Morty</h1>
    

       <div>
        <select
         className="location-select my-select"
          id="location"
          onChange={(e) => handleFilterLocation(e, filterLocation)}
        >
          <option value={location.name}>Locations</option>

          {location &&
            location.map((location) => {
              return (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              );
            })}
        </select>
      </div> 

      <form onSubmit={handleNewFavorites} className="form-agregar-favoritos">
        <input
          type="text"
          value={newFavorites}
          onChange={(e) => setNewFavorites(e.target.value)}
          placeholder="Add favorite"
        />
        <button type="submit">Add</button>
      </form>

      <div id="cardHome">
        {currentCharacter && currentCharacter.length > 0
          ? currentCharacter.map((character) => (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                origin={character.origin}
                location={character.location}
                image={character.image}
              />
            ))
          : null}
      </div>

      {allCharacter && allCharacter.length > 0 ? (
        <Paginate
          characterPerPage={characterPerPage}
          allCharacter={allCharacter.length}
          paginate={paginate}
        />
      ) : null}
      
      <button
        id="prev-button"
        onClick={(e) => handlePrev(e)}
        disabled={currentPage <= 1}
      >
        {" "}
        Prev{" "}
      </button>
      <button
        id="next-button"
        onClick={(e) => handleNext(e)}
        disabled={currentCharacter.length > 3}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

