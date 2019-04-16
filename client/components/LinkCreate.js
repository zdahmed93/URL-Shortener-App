import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class LinkCreate extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        Meteor.call('links.insert', this.refs.url.value);
        //console.log(this.refs.url.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Link to shorten</label>
                        <input type="text" ref='url' className="form-control"/>
                </div>
                <button type="submit" className="btn btn-info">Shorten !</button>
            </form>
        )
    }
}