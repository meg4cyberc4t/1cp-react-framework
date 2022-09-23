import React from "react";
import {RgbText} from "./RgbText";
import {HexText} from "./HexText";

export class ColorCard extends React.Component {
    render() {
        let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b;

        let divStyle = {
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            height: 200,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            textAlign: 'center',
        }

        return <>
            <div style={divStyle}>
                <RgbText r={r} g={g} b={b}/>
                <HexText r={r} g={g} b={b}/>
            </div>
        </>
    }
}
