import React from "react";

export class RgbText extends React.Component {
    render() {
        let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b;

        return <p>rgb({r}, {g}, {b})</p>
    }
}
