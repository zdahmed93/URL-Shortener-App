import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class LinkCreate extends Component {
    constructor() {
        super();
        this.state = {
            error: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        Meteor.call('links.insert', this.refs.url.value, (error) => {
            if (error) {
                this.setState({error: 'Please Enter a valid URL !'})
            } else {
                this.setState({error: ''});
                this.refs.url.value = '';
            }
        });
        //console.log(this.refs.url.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Link to shorten</label>
                        <input type="text" ref='url' className="form-control"/>
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button type="submit" className="btn btn-info">Shorten !</button>
            </form>
        )
    }
}