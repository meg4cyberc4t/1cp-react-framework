import React from "react";
import {ColorCard} from "./ColorCard";
import Logo from "./assets/logo.svg";

function randInt(max) {
    return Math.floor(Math.random() * max);
}


export default () => {
    let r = randInt(255);
    let g = randInt(255);
    let b = randInt(255);

    let divStyle = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        weight: 300,
    }

    let rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return <>
        <div style={divStyle}>
            <p>Основной цвет</p>
            <ColorCard r={r} g={g} b={b}/>

            <p>Треугольные цвета</p>
            <div style={rowStyle}>
                <ColorCard r={r} g={g} b={b}/>
                <ColorCard r={b} g={r} b={g}/>
                <ColorCard r={g} g={b} b={r}/>
            </div>

            <p>Светлые тона</p>
            <div style={rowStyle}>
                <ColorCard r={r + 20} g={g + 20} b={b + 20}/>
                <ColorCard r={r + 40} g={g + 40} b={b + 40}/>
                <ColorCard r={r + 60} g={g + 60} b={b + 60}/>
            </div>

            <p>Тёмные тона</p>
            <div style={rowStyle}>
                <ColorCard r={r - 20} g={g - 20} b={b - 20}/>
                <ColorCard r={r - 40} g={g - 40} b={b - 40}/>
                <ColorCard r={r - 60} g={g - 60} b={b - 60}/>
            </div>
        </div>
    </>
}
