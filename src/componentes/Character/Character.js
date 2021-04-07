import React from "react";
import "./Character.css";

export const Character = (props) => {
  const { name, status, origin, specie, gender, location, image } = props;
  console.log(props);

  const renderOrigin = (origin) => {
    return origin.name;
  };

  const renderLocation = (location) => {
    return location.name;
  };

const styleAlive = {
    backgroundColor: "green"
}
const styleDead = {
    backgroundColor: "red"
}

const styleUnknown = {
  backgroundColor: "black",
};
  
  return status === "Alive" ? (
    <li className="container">
      <div className="character-container">
        <div className="image-container">
          <img src={image} className="character-image" alt="char-img"></img>
        </div>
        <div className="name-container">
          <h1 className="character-name">{name}</h1>
        </div>
        <div className="status-specie-container">
          <div className="circle" style={styleAlive}></div>
          <h2 className="character-status">
            {status} - {specie}
          </h2>
        </div>
        <div className="gender-container">
          <p className="character-gender">Gender: {gender}</p>
        </div>
        <div className="origin-container">
          <p className="character-origin">Origin: {origin.name}</p>
        </div>
        <div className="location-container">
          <p className="character-location">Last seen: {location.name}</p>
        </div>
      </div>
    </li>
  ) : status === "Dead" ? (
    <div>
      <div className="character-container">
        <div className="image-container">
          <img src={image} className="character-image" alt="char-img"></img>
        </div>
        <div className="name-container">
          <h1 className="character-name">{name}</h1>
        </div>
        <div className="status-specie-container">
          <div className="circle" style={styleDead}></div>
          <h2 className="character-status">
            {status} - {specie}
          </h2>
        </div>
        <div className="gender-container">
          <p className="character-gender">{gender}</p>
        </div>
        <div className="origin-container">
          <p className="character-origin">{origin.name}</p>
        </div>
        <div className="location-container">
          <p className="character-location">{location.name}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="character-container">
        <div className="image-container">
          <img src={image} className="character-image" alt="char-img"></img>
        </div>
        <div className="name-container">
          <h1 className="character-name">{name}</h1>
        </div>
        <div className="status-specie-container">
          <div className="circle" style={styleUnknown}></div>
          <h2 className="character-status">
            Dsconocido - {specie}
          </h2>
        </div>
        <div className="gender-container">
          <p className="character-gender">{gender}</p>
        </div>
        <div className="origin-container">
          <p className="character-origin">{origin.name}</p>
        </div>
        <div className="location-container">
          <p className="character-location">{location.name}</p>
        </div>
      </div>
    </div>
  );
};
