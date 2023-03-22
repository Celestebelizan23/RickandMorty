// import { Link } from "react-router-dom";
// import "../styles/favorites.css";
// import { useSelector } from "react-redux";
// import {getFavorites} from "../actions/index";
// import React from "react";
// import "../styles/favorites.css";


// function Favorites(){
//   const character = useSelector((state)=> state.favorites)
//   console.log(character)
//   return (

//     <div>
//       <h2 className="title-favorites">favoritos</h2>
//       <div className='card-deck'>
//       <div >
//         <Link to={"/home"}>
//           <button className="button-back">Go back</button>
//         </Link>
//       </div>
//         {character && character.map((favorite) => (
//           <div key={favorite.id} className="card-styles">
//             <img src={favorite.image} className="image-styles" alt={favorite.name} style={{ maxWidth: "300px", maxHeight: "250px" }} />

//             <div className='card-body'>
//               <h5 className='card-title'>{favorite.name}</h5>
//               <p className='card-text'>
//                 <strong>Status:</strong> {favorite.status}
//               </p>
//               <p className='card-text'>
//                 <strong>Species:</strong> {favorite.species}
//               </p>
//               <p className='card-text'>
//               </p>
//               <p className='card-text'>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//    );
        
//  };

//  export default Favorites;
 
import { Link } from "react-router-dom";
import "../styles/favorites.css";
import { useSelector } from "react-redux";
import {getFavorites} from "../actions/index";
import React from "react";
import "../styles/favorites.css";


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
          <div key={favorite.id} className="card-styles">

    <div className='card-body'>
    < div className="image-container">
    <h5 className='card-title my-character-name'>{favorite.name}</h5>

    <img src={favorite.image} className="image-styles" alt={favorite.name} style={{ maxWidth: "300px", maxHeight: "250px" }} />
    
  </div>
              <p className='card-text'>
                <strong>Status:</strong> {favorite.status}
              </p>
              <p className='card-text'>
                <strong>Species:</strong> {favorite.species}
              </p>
              <p className='card-text'>
                <strong>Location:</strong> {favorite.species}
              </p>
              <p className='card-text'>
                <strong>Origin:</strong> {favorite.species}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
   );
        
 };

 export default Favorites;
 
