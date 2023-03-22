import React from "react";
export default function Paginado({ charactersPerPage, allCharacters, paginado }) {   

  const pageNumbers = []; 
  return (
    <nav>
      <ul className="paginado">
        {pageNumbers.map((number) => (           
          <button
            key={number}
            onClick={() => paginado(number)}    
            id="PaginadoPaginado"              
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>
  );

}









        






