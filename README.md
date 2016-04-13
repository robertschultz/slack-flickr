Slack Flickr
=====
Simple Slack service that provides a random photo from Flickr.

### Installation

```
$ git clone https://github.com/robertschultz/slack-flickr.git
$ cd slack-flickr
$ npm install
```

### Usage

```
$ API_KEY=<apiKey> TERMS="cute baby goats" npm start
```

### Parameters

| Key  |  Required | Description  |
|---|---|---|
| API_KEY  | Yes  |  Your Flickr API key |
| TERMS  | No  | Search terms to run against the Flickr API   |
| MAX_RESULTS  | No  | How many results to pick a random image from  |
