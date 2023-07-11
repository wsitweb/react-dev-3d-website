import Spline from '@splinetool/react-spline'
import React, { useState } from 'react'
import { styled } from 'styled-components'

import IconLaptop from '../images/icon-laptop.svg'
import IconTwitter from '../images/icon-twitter.svg'
import IconYoutube from '../images/icon-youtube.svg'
import Menu from './Menu'

const sizeFactor = (window.innerHeight + window.innerWidth) / 3000
const logoGit = document.querySelector('.logo')
logoGit.href = 'https://github.com/wsitweb/react-dev-3d-website'
logoGit.style.backgroundImage = "url('https://static-00.iconduck.com/assets.00/github-icon-512x497-oppthre2.png')"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    font-family: 'Spline Sans', sans-serif;
    font-size: 16px;
    color: white;
    position: relative;
    overflow-y: hidden;
    @media (max-height: 574px) {
      overflow-y: auto;
    }
    @font-face {
      font-family: 'Spline Sans';
      src: url('./src/fonts/Spline_Sans/SplineSans-VariableFont_wght.ttf');
    }
    @font-face {
      font-family: 'Spline Sans Mono';
      src: url('./src/fonts/Spline_Sans_Mono/SplineSansMono-VariableFont_wght.ttf');
    }
    @media(max-width: 768px){
      justify-content: center;
      max-width: 100vw;
      max-height: 100vh;
      width: 100%;
    }
`

const Social = styled.div`
    padding: 150px 0 0 30px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 30px;
    align-items: center;
    max-height: 608px;
    min-height: 414px;
    z-index: 1;
    div{
      width: 1px;
      max-height: 500px;
      height: 100%;
      background: linear-gradient(180deg, #08d6f9 0%, #6c56ef 33%, #1306dd 65%, #aa0ed2 100%);
    }
    @media(max-height: 776px){
        padding-bottom: 10px;
    }
    @media(max-width: 768px){
      display: none;
    }
`

const Left = styled.div`
    z-index: 1;
    padding: 30px 0 0 0;
    height: 100%;
    margin: 0 30px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media(max-height: 410px){
      gap: 0;
      justify-content: space-between;
    }
    @media(max-width: 768px){
      width: 100%;
      padding: 0;
    }
    .wrap{
      backdrop-filter: blur(20px);
      border-radius: 10px 50px 50px 10px;
      padding: 40px 0 40px 100px;
      border: 2px solid rgba(255,255,255,0.3 );
      transition: 1s;
      
      @media(max-width: 768px){
        padding: 4vw;
      }
      &:hover{
        border: 2px solid rgba(255,255,255, 0.8 );
        transform: translateY(-8px) scale(1.01);
      }
    }
    h1{
      font-family: 'Spline Sans Mono', sans-serif;
      font-size: 70px;
      font-weight: bold;
      margin: 0;
      max-width: 500px;
      @media(max-width: 768px){
        padding: 1vw;
        font-size: 9.11vw;
      }
    }
    p{
      font-weight: normal;
      line-height: 150%;
      max-width: 380px;
      @media(max-width: 768px){
        font-size: 2vw;
      }
    }
    button{
      width: fit-content;
      height: fit-content;
      font-family: 'Spline Sans';
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255,255,255, 0.2);
      font-size: 16px;
      padding: 12px 30px;
      border-radius: 14px;
      backdrop-filter: blur(20px);
      color: white;
      transition: .5s;
      @media(max-width: 768px){
        font-size: 2.1vw;
      }
      &:hover{
        border: 1px solid rgba(255,255,255, 0.8);
        transform: translateY(-3px) scale(1.03);
      }
      img{
        vertical-align: middle;
        margin-right: 12px;
      }
    }
`

const Right = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media(max-width: 768px){
        width: 0;
        height: 0;
    }
    .spline{
      position: absolute;
      margin: 0;
      inset: 0;
      display: flex;
      align-items: center;
      canvas{
        position: absolute;
        right: 0;
        scale: ${sizeFactor};
        transform-origin: right;
      }
    }
`

function Preview() {
  return (
    <Container>
      <Social>
        <div/>
        <img src={IconTwitter} alt="Twitter"/>
        <img src={IconYoutube} alt="Twitter"/>
      </Social>
        <Left>
          <Menu/>
            <div className='wrap'>
            <h1>Collaborate with people</h1>
            <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
            <button>
              <img src={IconLaptop} alt='Download' />
              Download for Mac
            </button>
            </div>
        </Left>
        <Right>
          <Spline className='spline' scene="https://prod.spline.design/z4NBYRiLT91dosNL/scene.splinecode"/>
        </Right>
    </Container>
  )
}

export default Preview