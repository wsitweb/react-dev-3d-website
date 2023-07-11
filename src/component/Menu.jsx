import React from 'react'
import { styled } from 'styled-components'

import logo from '../images/logo.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    & button{
        background:#111B54;
        width: max-content;
    }
`
const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    margin-right: 30px;
    align-items: center;
    flex: 1;
    padding: 0;
    @media (max-width: 768px) {
        justify-content: space-between;
        li{
            &:first-child{
                display: block;
            }
            display: none;
        }
    }
    li{
        a{
            text-decoration: none;
            color: white;
            padding: 8px 20px;
            border: 1px solid transparent;
            transition: 0.5s;
            border-radius: 14px;
            &:hover{
                border: 1px solid rgba(255,255,255,0.2);
            }
        }
    }
`

function Menu() {
  return (
    <Container>
        <List>
            <li><img src={logo} alt="logo" /></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Download</a></li>
            <li><a href="/">App</a></li>
            <li><a href="/">Login</a></li>
        </List>
        <button>Get Started</button>
    </Container>
  )
}

export default Menu