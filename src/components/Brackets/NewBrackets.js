import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowDimensions from './WindowSize';
import InfoBar from './InfoBar';
import { useLocation } from 'react-router-dom';
import { SingleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';
import useWindowSize from './windowSize.ts';
import './css/Brackets.css';


let matches = [];
const Theme = {
  textColor: { main: 'white', highlighted: 'white', dark: 'grey' },
  matchBackground: { wonColor: "#222222", lostColor: '#222222' },
  score: {
    background: { wonColor: '#FF7324', lostColor: 'grey' },
    text: { highlightedWonColor: 'white', highlightedLostColor: 'white' },
  },
  border: {
    color: '#222222',
    highlightedColor: 'white',
  },
  roundHeader: { backgroundColor: '#F8F9FA', fontColor: 'black' },
  connectorColor: '#F8F9FA',
  connectorColorHighlight: 'black',
  svgBackground: '#1C1C1C',
};

export default function NewBrackets(props) {

  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 650, 460);
  const finalHeight = Math.max(height - 100, 1000);

  const location = useLocation();
  const Info = {
    name: location.state.tournyDetails.name,
    date: new Date(location.state.tournyDetails.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date(location.state.tournyDetails.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    game: location.state.tournyDetails.game,
    tourny_type: location.state.tournyDetails.tournyType,
    totalTeams: parseInt(location.state.tournyDetails.totalTeams),
    teamsArr: location.state.tournyDetails.teams,
  };
  let teamIds = []
  for (var k = 0; k < Info.totalTeams; k++) {
    teamIds[k] = "team" + k + 1;
  }

  let totalRounds = Info.totalTeams.toString(2).length - 1;
  let teamsinRound = Info.totalTeams / 2;

  let matchid = 0;
  var teamIterate = 0;
  for (let i = 0; i < totalRounds; i++) {
    var even = teamsinRound;
    var odd = teamsinRound - 1;
    for (var j = 0; j < teamsinRound; j++) {
      matches[matchid] = {
        id: matchid,
        name: (i === totalRounds - 2) ? "Semi-Final" : (i === totalRounds - 1) ? "Final" : "Round " + (i + 1),
        nextMatchId: (i === totalRounds - 1) ? null : (j % 2 === 0) ? matchid + (even--) : matchid + (odd--),
        startTime: null,
        state: null,
        tournamentRoundText: i + 1,
        participants: [
          {
            id: teamIds[teamIterate],
            resultText: "16",
            isWinner: null,
            status: null,
            name: i === 0 ? Info.teamsArr[teamIterate] : null
          },
          {
            id: teamIds[teamIterate + 1],
            resultText: "0",
            isWinner: null,
            status: null,
            name: i === 0 ? Info.teamsArr[teamIterate + 1] : null
          }
        ]
      }
      matchid++;
      teamIterate += 2;
    }
    teamsinRound /= 2;
  }
  console.log(matches);
  //^input team names to brackets.

  return (
    <div>
      <InfoBar tourInfo={Info} />
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <SingleEliminationBracket
          matches={matches}
          matchComponent={Match}
          theme={Theme}
          options={{
            style: {
              roundHeader: {
                backgroundColor: Theme.roundHeader.backgroundColor,
                fontColor: Theme.roundHeader.fontColor,
              },
              connectorColor: Theme.connectorColor,
              connectorColorHighlight: Theme.connectorColorHighlight,
            },
          }}
          svgWrapper={({ children, ...props }) => (
            <SVGViewer backgroundColor="black" {...props}
              background={Theme.svgBackground}
              SVGBackground={Theme.svgBackground}
              width={finalWidth}
              height={finalHeight}
            >
              {children}
            </SVGViewer>
          )}
        />
      </Container>
    </div>
  )
}

