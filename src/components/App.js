import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState( "all" );

  useEffect(() => {
    fetch(`http://localhost:3001/pets`)
      .then(resp => resp.json())
      .then(petData => setPets(petData))
  }, [])

  const onChangeType = (targetType) => {
    setFilters(targetType)
  }

  const filterPets = filters === "all" ? pets : pets.filter(pet => pet.type === filters)
  

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={ onChangeType } />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={ filterPets }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
