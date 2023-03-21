import { Link } from "react-router-dom";
import "../styles/favorites.css";
import { useSelector } from "react-redux";
import {getFavorites} from "../actions/index";
import React from "react";

// const favorites = ({ favorites }) => {

// const detail = allCharacter.filter(c => c.id === cAPI.id)
function Favorites(){
  const character = useSelector((state)=> state.favorites)
  console.log(character)
  return (

    <div>
      <h2 className="title-favorites">favoritos</h2>
      <div className='card-deck'>
      <div >
        <Link to={"/home"}>
          <button className="button-back">Go back</button>
        </Link>
      </div>
        {character && character.map((favorite) => (
          <div key={favorite.id} className='card'>
            <img src={favorite.image} className='card-img-top' alt={favorite.name} />
            <div className='card-body'>
              <h5 className='card-title'>{favorite.name}</h5>
              <p className='card-text'>
                <strong>Status:</strong> {favorite.status}
              </p>
              <p className='card-text'>
                <strong>Species:</strong> {favorite.species}
              </p>
              <p className='card-text'>
              </p>
              <p className='card-text'>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
        
 };

 export default Favorites;
 
