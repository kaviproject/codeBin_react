import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Accounts from './Accounts';
import Bins from '../../imports/collections/bin'

//Header component
class Header extends Component {
    onBinClick(event)
    {
        event.preventDefault();
        Meteor.call('bins.insert',(error,bin)=>{
            console.log("kavi"+bin);
        });
    }
    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
                </div>
                <ul className="nav navbar-nav ">
                    <li>Home</li>
                    <li><a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
                </ul>
            </nav>
        )
    }
};

//exporting header component
export default Header;