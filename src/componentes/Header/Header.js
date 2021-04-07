import React from "react";
import "./Header.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-header">
        <img className="logo" src="./logo.png" alt="logo"></img>
        <h1 className="title">
          Welcome to the incredible world of Rick and Morty!!
        </h1>
      </div>
      <div className="input-container">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                className="character-img"
                src="./morty-icon.png"
                alt="character"
              ></img>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="search" className="input-item" />
          <FormControl type="search" className="input-item" />
        </InputGroup>
      </div>
    </div>
  );
};
