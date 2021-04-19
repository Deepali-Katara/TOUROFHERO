import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Heroes } from "./Heroes";
import { removeHero } from "./../Actions/heroes";
import { Card } from "react-bootstrap";
import "../custom-button.css";

const removeClick = (props) => {
  props.dispatch(removeHero(props.hero.id));
  console.log("click");
};

const HeroList = (props) => (
  <Card style={{ marginTop: "1.2rem" }}>
    <Card.Body>
      <Card.Title>{props.hero.name}</Card.Title>
    </Card.Body>
    <Card.Footer>
      <div className="style">
        <Link to={`/edit/${props.hero.id}`}>Edit</Link>
        <button
          onClick={() => {
            removeClick(props);
          }}
        >
          Remove
        </button>
      </div>
    </Card.Footer>
  </Card>
);

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export const ConnectedHeroList = connect(mapDispatchToProps)(HeroList);

export default HeroList;
