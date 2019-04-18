import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links';
import {Meteor} from 'meteor/meteor';

class LinksList extends Component {
    constructor(props) {
        super(props);
    }
    displayRows = () => {
        return this.props.links.map((item) => {
            console.log(item)
            const {url, token, clicks} = item;
            const createdLink = `http://localhost:3000/${token}`
            return (
            <tr key={token}>
                <td>{url}</td>
                <td><a href={createdLink}>{createdLink}</a></td>
                <td>{clicks}</td>
            </tr>
        )
    }
        )
    }
    render () {
        console.log(this.props);
        return(
          <table className="table">
              <thead>
                  <tr>
                      <th>URL</th>
                      <th>Address</th>
                      <th>Clicks</th>
                  </tr>
              </thead>
              <tbody>
                  {this.displayRows()}
              </tbody>
          </table>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');
    return {links: Links.find({}).fetch()};
}, LinksList)