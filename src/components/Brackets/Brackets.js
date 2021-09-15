import React from 'react'
import { Container } from 'react-bootstrap'
import { Bracket, RoundProps } from 'react-brackets';
import './css/Brackets.css'
import InfoBar from './InfoBar'
import { useLocation } from 'react-router-dom';

let rounds: RoundProps[] = [];

export default function Brackets(props) {

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
  for (let i = 0; i < Info.totalTeams; i++) {
    teamIds[i] = "team" + i + 1;
  }

  let totalRounds = Info.totalTeams.toString(2).length - 1;
  let teamsinRound = Info.totalTeams / 2;

  for (let i = 0; i < totalRounds; i++) {
    rounds[i] = {
      title: "Round " + (i + 1),
      seeds: [],
    }
    let teamIterate = 0;
    for (let j = 0; j < teamsinRound; j++) {
      if (i===0) {
        rounds[i].seeds.push({
          id: j + 1,
          date: new Date().toDateString(),
          teams: [{ name: Info.teamsArr[teamIterate] }, { name: Info.teamsArr[teamIterate + 1] }],
        })
      }
      else{
        rounds[i].seeds.push({
          id: j + 1,
          date: new Date().toDateString(),
          teams: [{ name: "TBD" }, { name: "TBD" }],
        })
      }
      teamIterate += 2;
    }
    teamsinRound /= 2;
  }
  
  console.log(rounds);
  //^input team names to brackets.

  return (
    <div className="Background" >
      <InfoBar tourInfo={Info} />
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        {/* {window.alert(rounds[1].seeds[0].teams[0].name)} */}
        <Bracket rounds={rounds} />
      </Container>
    </div>
  )
}

