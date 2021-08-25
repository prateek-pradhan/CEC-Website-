import InfoBar from './InfoBar';
import Brackets from './Brackets';
import React from 'react'

export default function Brack() {
    const Info = {
        name: "CEC Valorant Tournament",
        date: "April 20, 2020",
        time: "12:30 pm IST",
        game: "Valorant",
        tourny_type: "Single Elimination",
        teams: 69
    };
    return (
        <div>
            <InfoBar tourInfo={Info} />
            <Brackets />
        </div>
    )
}
