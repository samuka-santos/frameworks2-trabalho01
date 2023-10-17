import logo from './images/VisualizaNews.png';
import '../css/Header.css';
import { Component } from 'react';

class Header extends Component {
   
    render() {
     
      return (
        <div className="Header">
            <img src={logo} className="Header-logo" alt="logo do VisualizaNews" />
        </div>
      );
    }
  }
  
export default Header;