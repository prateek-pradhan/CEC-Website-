import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Bracket, RoundProps } from 'react-brackets';
import './css/Brackets.css'

const rounds: RoundProps[] = [
  {
    title: 'Round One',
    seeds: [
      {
        id: 1,

        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,

        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 8,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
  {
    title: 'Round Two',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team Shubhu' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },

    ],
  },
  {
    title: 'Semi Final',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
  {
    title: 'Final',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];



export default class Brackets extends Component {
  render() {
    return (
      <div className="Background d-flex" >

        <Container style={{ paddingTop: "30px", paddingBottom: "40px" }}>
          {/* {window.alert(rounds[1].seeds[0].teams[0].name)} */}
          <Bracket rounds={rounds} />

        </Container>
      </div>
    )
  }
}
