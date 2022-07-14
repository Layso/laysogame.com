import React from "react";
import "./Header.css";
import HeaderButton from "../header-button/HeaderButton";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render () {
    return (
      <div class="header-main">
        <div class="header-logo-main">
            /* insert cool
          <div class="header-logo">
            LAYSOGAME
          </div>
            logo here */
        </div>
        

        <div class="header-buttons">
          <Link to="/">
            <HeaderButton name="Home"></HeaderButton>
          </Link>
          <Link to="/games">
            <HeaderButton name="Games"></HeaderButton>
          </Link>
          <Link to="/game-servers">
            <HeaderButton name="Game Servers"></HeaderButton>
          </Link>
        </div>
      </div>
    );
  }
}