import InfoBar from './InfoBar.js';
import Brackets from './Brackets.js';
import React from 'react'
import BrackForm from './BrackForm.js';
import '../../App.css'

export default function Brack() {
    let Info = {
        name: "CEC Valorant Tournament",
        date: new Date().toLocaleDateString('en-US',{  year: 'numeric', month: 'long', day: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        game: "Valorant",
        tourny_type: "Single Elimination",
        teams: 69
    };
    return (
        <div className="Background bgLogo">
            <InfoBar tourInfo={Info} />
            <Brackets />
            <BrackForm />
        </div>
    )
}
