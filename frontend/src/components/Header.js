import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/Header.css';
import Button from 'react-bootstrap/Button';

class Header extends Component {

  navTo(uri){
    window.location.href = window.location.origin + uri;
  }

  render() {
    return (
      <div className="App-header">
        <h1 style = {{cursor:'pointer'}} onClick={() => {this.navTo('')}}>Udacitrivia</h1>
        <h2 style = {{cursor:'pointer'}} onClick={() => {this.navTo('')}}>List</h2>
        <h2 style = {{cursor:'pointer'}} onClick={() => {this.navTo('/add')}}>Add</h2>
        <h2 style = {{cursor:'pointer'}} onClick={() => {this.navTo('/play')}}>Play</h2>
      </div>
    );
  }
}

export default Header;
