import React from "react";
import "./GameServerHeader.css"

export default class GameServerHeader extends React.Component {
	render() {
		return (
			<div class="game-server-header-main">
				<div class="header-game">Game</div>
				<div class="header-name">Name</div>
				<div class="header-location">Location</div>
				<div class="header-players">Max. Players</div>
				<div class="header-ip">Server Address</div>
			</div>
		);
	}
}