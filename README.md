pinpoint.js
===========

A geolocation + googlemaps based javascript library

The MIT License (MIT)

Copyright (c) 2014. Zeeshan Hyder.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


This library provides combined features of Google Maps,Google Places and Google Geocoding together in a styled and easy way.
This is right now the beta version but will be updated continously.

There are two main files here.

1. pp.base.js
2. pp.bootstrap.js


1. pp.base.js: Contains all the definitions. Be sure to include this in script tag before including bootstrap.js. *IMPORTANT: pp.base.js requires GoogleMaps V3 API and GooglePlaces API to work. Please load these two API files before loading base.js. You can obtain these files from Google Developers website.

2. pp.bootstrap.js: Contains initializer Object "pp" that loads library into DOM. Creates a pp object. Type pp.about in console to learn more.



USAGE:


After loading pp.base.js and pp.bootstrap.js, fire up the console of browser and type in these commands to start:

pp.about: Object. Provides a general info about the library.

pp.x: Variable. Displays your current location latitude.

pp.y: Variable. Dispays your current location longitude.

pp.__getCoordinates(): Function. Returns current coordinates in an object. {latitude,longitude}.

pp.setLatLng([latitude],[longitude]): Function. Converts passed latitude and longitude into Google Readable Format and returns as an Object. If no argument is passed, it converts pp.x and pp.y into Google Readable format and stores object in pp.latlng.

pp.latlng: Object. Displays Google Readable latitude and longitude based on pp.x and pp.y coordinates.

pp.places.getPlaceName(coordinates,[accuracy],[Array]): Function. Returns approximate Location name based on coordinates provided. Please note the coordinates need to be converted to Google Readable Format first before passing them into function, using pp.setLatLng. Accuracy: numerical value on how precise the value should be. Default:1 Min:0. Array is the name of Array in which the returned object needs to be stored. Stores in Array[0]. Default is pp.places._Name[0].


I am continously working to integrate new features. And will do so overtime.
Thanks. Please feel free to use and contribute.









