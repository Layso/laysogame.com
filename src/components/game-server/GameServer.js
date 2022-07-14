import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import "./GameServer.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import CopyIcon from "../../img/copy-icon.png";
import CopyToClipboard from "react-copy-to-clipboard";


export default class GameServer extends React.Component {
  
  render() {
    const ip = this.props.ip;

    return (
      <div class="game-server-main">
        <Link class="link" to="/game-servers">
          <div class="game">{this.props.game}</div>
          <div class="name">{this.props.name}</div>
          <div class="location">{this.props.location}</div>
          <div class="players">{this.props.players}</div>
        </Link>
        <CopyToClipboard text={ip} onCopy={() => this.onCopied()}>
          <div class="ip">
            {this.props.ip}
            <img class="copy-img" src={CopyIcon}/>
          </div>
        </CopyToClipboard>
        <ToastContainer/>
      </div>
    );
  }

  onCopied() {
    toast.success("Server address copied to clipboard!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
      hideProgressBar: true
    });
  }
}