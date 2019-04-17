import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links';
import {Meteor} from 'meteor/meteor';

class LinksList extends Component {
    constructor(props) {
        super(props);
    }
    render () {
console.log(this.props);
        return(
            <div>
                <h1>LinksList Component</h1>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');
    return {links: Links.find({}).fetch()};
}, LinksList)