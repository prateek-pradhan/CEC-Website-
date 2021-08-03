import React from 'react'
import styled from 'styled-components'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import './Subheader.css';

function Subheader() {
    return (
        <Container>
            
            <table>
                <tr>
                    <th colspan = "3" >ECC Valorant Tournament</th>
                    <td rowspan = "2"><CalendarTodayIcon /></td>
                    <td>April 4, 2020</td>
                </tr>
                <tr>
                    <td><PeopleIcon/> 64 teams</td>
                    <td><SportsEsportsIcon/> Valorant</td>
                    <td><PeopleIcon/> Single Elimination</td>
                    <td>4:20pm IST</td>
                </tr>

            </table>
            
        </Container>
    )
}

export default Subheader

const Container = styled.div`

min-height: 60px;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10;
background-color: #383838;
margin-top: 70px;
min-height: 80px;
color: white;
`

