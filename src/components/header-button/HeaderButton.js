import React from "react";
import "./HeaderButton.css"

export default class HeaderButton extends React.Component {
    render() {
        return(
            <div class="button-main">
                {this.props.name}
            </div>
        );
    }
}