import React, {Component} from 'react';

export default class LinkCreate extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.refs.url.value);
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