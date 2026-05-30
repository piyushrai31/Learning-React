import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/card2'


export default function App() {
  let myobj = {
    firstName: "piyush",
    lastName: "rai"
  }
  return (
    <>
  <Card2 username="piyush" btnText="click Me"/>
  <Card2/>
    </>
    
  );
}
