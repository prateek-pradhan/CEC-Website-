import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
              <Container>
            <LeftMenu>
            <a href="App.js">
                <img src="../public/images/logo.png" alt="logo"/>
            </a>
            </LeftMenu>
            <RightMenu>
                <a href="#">Home</a>
                <a href="#">Event </a>
                <a href="#">Gallery</a>
                <a href="#">Login</a>
            </RightMenu>
        </Container>
        </div>
    )
}

export default Header


const Container = styled.div`
display: flex;
min-height: 80px;
align-items: center;
justify-content: space-between;
padding: 0 40px;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10;
background-color: white;
`
const LeftMenu = styled.div`
img{
    height: 70px;
    width: 70px;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    font-size: large;
    padding-right: 15px;
    color: black;
}
`