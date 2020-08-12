import React from 'react';
import logo from '../assets/avatar.jpg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo}></img>
      <p>HELLO,</p>
      <p>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</p>
      <hr></hr>
    </header>
  );
}

export default Header;
