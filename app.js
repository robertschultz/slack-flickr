'use strict';

const express = require('express');
const debug = require('debug');
const Flickr = require('node-flickr');

if (!process.env.API_KEY) {
  throw new Error('Flickr API key not provided');
}

const flickr = new Flickr({
  api_key: process.env.API_KEY
});

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const results = process.env.MAX_RESULTS || 50;
const terms = process.env.TERMS || 'cute baby goats';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
  flickr.get('photos.search', {'per_page': results, 'text': terms}, function(err, result){
    if (err) throw new Error(err);
    var photo = result.photos.photo[Math.floor(Math.random() * result.photos.photo.length) ];

    flickr.get('photos.getSizes', {'photo_id': photo.id}, function(err, result){
      if (err) throw new Error(err);
      res.json({
        response_type: 'in_channel',
        text: result.sizes.size[5].source
      });
    });
  });
});

app.listen(port, () => {
  debug('Slack flickr service listening on port ' + port);
});
