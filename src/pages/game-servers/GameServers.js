import React from "react";
import GameServer from "../../components/game-server/GameServer";
import GameServerHeader from "../../components/game-server/GameServerHeader"

import "./GameServers.css"

export default function GameServers() {
  return (
    <div class="game-servers-main">
      <div class="info">
        I am hosting the game servers listed below. Feel free to join and play with me or others!
      </div>
      <div class="server-list">
        <GameServerHeader></GameServerHeader>
        <GameServer game="Dark Messiah Might and Magic" name="Laysogame #1" location="Istanbul" ip="laysogame.com:27015" players="24"></GameServer>
      </div>
    </div>
  );
}