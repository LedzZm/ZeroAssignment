# Zero Assignment | Marios

A simple web page with a map embedded and pins showing the current locations of
5 delivery drivers on that map.
Clicking on one the pins should displays panel with the driver’s name, number of deliveries done,
number of deliveries left and the next destination.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install using the command
`npm install` and start the application by executing `npm start`.

## Instructions

Google Maps API was used for the creation of the map. The account used for the
creation of the Maps API key does not have billing information setup and as a
result the map will be watermarked but still functional. If you own and account
with billing info and wish to see the map without the watermark, simply change
the `REACT_APP_GOOGLE_API_KEY` variable located in .env.local