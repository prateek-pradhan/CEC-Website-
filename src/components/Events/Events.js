import React from 'react'
import { Card } from 'react-rainbow-components';
import './events.css'

const Events = () => {

    const cardInfo = [{
        name: "CEC Valorant Tournament",
        date: new Date("September 9, 2021"),
        time: "12:30 pm IST",
        game: "Valorant",
        image: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg",
        tourny_type: "Single Elimination",
        teams: 69
    },
    {
        name: "CEC CSGO Tournament",
        date: new Date("May 20, 2022"),
        time: "12:30 pm IST",
        game: "CSGO",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1629301045",
        tournament_type: "Single Elimination",
        teams: 69
    },
    {
        name: "CEC Apex Tournament",
        date: new Date("September 1, 2021"),
        time: "12:30 pm IST",
        game: "Apex Legends",
        image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2021/04/NexstarThumbnail_041421_ApexLegends_1680x945.jpg?strip=1",
        tournament_type: "Single Elimination",
        teams: 69
    }];

    const renderCard = (card, index) => {
        return (
            <>
                <Card style={{ width: '18rem' }} key={index} className="box">
                    <img variant="top" src={card.image} fluid={true} className="img" alt={card.name} />
                </Card>
            </>
        )
    }

    const now = new Date();
    // console.log("now " + now);
    // console.log("date " + datecard);
    return (
        <div>
            <h1 >LIVE</h1>
            <div className="grid">
                {
                    cardInfo.map((elem) => {
                        return elem.date.toDateString() === now.toDateString() ? renderCard(elem) : "";
                    })
                }
            </div>
            <h1>Upcoming</h1>
            <div className="grid">
                {
                    cardInfo.map((elem) => {
                        return elem.date > now ? renderCard(elem) : "";
                    })
                }
            </div>
            <h1>Past</h1>
            <div className="grid">
                {
                    cardInfo.map((elem) => {
                        return elem.date < now ? renderCard(elem) : "";
                    })
                }
            </div>
        </div>
    );
};

export default Events;
