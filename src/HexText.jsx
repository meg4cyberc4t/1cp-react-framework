import React from "react";

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


export class HexText extends React.Component {
    render() {
        let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b;

        return <p>{rgbToHex(r, g, b)}</p>
    }
}
