import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "../styles/details.css";



export default function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterDetail(Number(params.id)));
  }, [dispatch, params.id]);

  const myCharacter = useSelector((state) => state.detail);

  return (

    <div className="container">
      <div>
        <Link to={"/home"}>
          <button className="button">Go back</button>
        </Link>
         <Link to={"https://github.com/Celestebelizan23"}>
    <button className="button-github">GitHub repository</button>
  </Link> 
      </div>

      <div>
        <div key={myCharacter?.id}>
          <div>
            <div className="details details-name">
              <h1 className="name"> 

                {myCharacter?.name} - {myCharacter?.id}
              </h1>
              <img 
                id="character-image"
                src={myCharacter?.image}
                alt={myCharacter?.name}
                style={{ border: "1px solid black", width: myCharacter?.image ? "100%" : "auto" }}
              ></img>
              <h3><span className="details-status">Status:</span> {myCharacter?.status}</h3>
              <h3><span className="details-species">Species:</span> {myCharacter?.species}</h3> 
              <h3><span className="details-location">Location:</span> {myCharacter?.location?.name}</h3>
              <h3><span className="details-origin">Origin:</span> {myCharacter?.origin?.name}</h3>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  
  );
}






