# Neighborhood Map - React Project

## Summary
In this project, which are including the following:
1. Loading the map. This repository uses [react-google-maps](https://tomchentw.github.io/react-google-maps/) with [Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/). You need to replace `<your own API KEY HERE>` in Map.js file.
2. Fetching data. This repository uses the following three API from [FOURSQUARE](https://developer.foursquare.com/) to get interested items:
  - Search for Venues
  - Get Details of a Venue
  - Get a Venue's Photos
  Please replace `<your own client_id and client_secret>` in MapAPI.js file
3. Explore the provided code, and implement the required feature in following:
  - Showing places both in the list and map, the default query is "food near San Diego, CA" and only list 10 related places.
  - Allow users to type keywords to do local filter, and showing the corresponding list items and map markers.
  - Click each list item can match to the marker in the map.
  - Click marker in the map can view the details information.
  - Enable a serviceWorker for offline usage.
  - Using aria-label, role, and tabIndex for accessibility

### How to run the app
1. Clone the game in local or unzip file to your local machine.
2. Open the terminal
   - Go to "reactnd-project-neighborhood-map" folder.
   - run `npm install` to install the dependency
   - run `npm start` to start server
4. Visit the site in your browser at http://localhost:3000

### Resource/Referencce
1. [Udacity Neighborhood Map Project](https://www.google.com/url?q=http%3A%2F%2Ftiny.cc%2FNeighborhoodMapProject&sa=D&sntz=1&usg=AFQjCNEtiQETpKmU4YdDfYPMBCq7E44Avw)
2. Neighborhood Map - YouTube Video (https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
