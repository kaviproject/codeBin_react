import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Bins } from '../../imports/collections/bin'

class Accounts extends Component {
    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.AccountContainer))
    }
    componentWillUnmount() {
      Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="AccountContainer" ></div>
        )
    }
}

export default Accounts;