import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bin';

class BinsList extends Component {
    renderList() {
        return this.props.bins.map(bin => {
            return (
                <li className="list-group-item" key={bin._id}>
                
                    Bin111
                </li>
            )
        });
    }
    render() {
        console.log(this.props.bins);
        return (
            <div>

                <ul className="list-group">
                   <li>jjjj</li>
                </ul>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('Bins');
    return { bins: Bins.find({}).fetch() }
}, BinsList);