



import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../actions";
import { Link } from "react-router-dom";

import "../styles/card.css";


const Card = (character, detail, selectedCharacter, className) => {
  
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(character));
  };
  console.log(character)

  const handleClick = () => {
    if (selectedCharacter) {
      selectedCharacter(character);
    }
  };


  
  return (
    <div className="card">
      <div className={className}/>
          <div className="card-image">
             <img src={character.image} alt={character.name}/>
      <div className="character-name">{character.name}</div>

       </div>

       <div>
              <Link to={`/detail/${character.id}`}>
                <button id="DetailInfo" className="detail-info-button">Details</button>
              </Link>
            </div>

            

    <div className="card-info">
      {!detail && (
        <div>
          <button onClick={handleAddFavorite}>Add favorite</button>
          <button onClick={handleClick}>Select</button>
        </div>
      )}
    </div>
  </div>
);
};
export default Card;







