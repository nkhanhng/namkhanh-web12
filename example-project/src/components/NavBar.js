import React, { Component } from 'react';
import SearchField from './SearchField';
import logo from '../img/logo.jpg';
import ProfilePanel from './ProfilePanel'


class NavBar extends Component {
  render() {
    return (
        <div className='navbar'>
          <div className='container'>
            <SearchField />
            <div className='col-6 text-center'>
              <img src={logo} width='70px' height='40px' />
            </div>
            <ProfilePanel />
          </div>
        </div>
    );
  }
}

export default NavBar;  