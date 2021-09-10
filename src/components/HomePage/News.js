import React from 'react'
import './css/Home.css'

export const News = () => {
    return (
        <div className="newsbox scroll">
            <h3 className="news-header">News</h3>
            <div className="line"></div>
            <div className="News-content"></div>
            <ul>
                <li>[VALORANT]TSM V/S Liquid BO3 Match 1 (3-0) <span style={{color: "red"}}>LIVE </span></li>
                <li>[VALORANT]Sentinels V/S Bad B Cheese BO3 Match 1 (0-9) <span style={{color: "red"}}>LIVE </span></li>
                <li>[VALORANT]Chitkara Esports won against Thapur Esports 13-0</li>
                <li>[CSGO]Last chance to make the Playoffs: Don't miss these games!</li>
                <li>Jasjeet Singh is the new Creative Head at Chitkara Esports Club </li>
            </ul>
        </div>
    )
}
