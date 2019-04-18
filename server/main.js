import { Meteor } from 'meteor/meteor';
import '../imports/collections/links';
import {Links} from '../imports/collections/links'; 
//const express = require('express');
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';

// const app = express();
// app.get('/:token', (req, res) => console.log('token provided ', req.params.token))
// app.listen(3000, console.log('listening on port 3000'))

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
    return (Links.find({}));
  })

  async function onRoute(req, res, next) {
    const link = await Links.findOne({token: req.params.token});
    if (link) {
      Links.update({token: req.params.token}, {$inc: {clicks: 1}})
      res.writeHead(307, {'location': link.url});
      res.end();
    } else {
      next()
    }
  }

  const middleware = ConnectRoute(function(router) {
    router.get('/:token', onRoute)
  }

  )

  WebApp.connectHandlers.use(middleware)
 
});
