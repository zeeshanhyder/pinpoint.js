/*
 * The MIT License (MIT)

Copyright (c) 2014. Zeeshan Hyder

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
 */



/*  
 * pinpoint.js 
 * Author: Zeeshan Hyder, Version: 0.1b
 * NOTE: This definition file requires GoogleMaps V3 API and Google Places API to work. Please load that first before using this file.
 *
 * USAGE:
 * We start the library by creating skeleton of geolocation given below.
 * The section is divided into three sections.
 * 1. Declaration (Creating skeleton): geolocation() [defined in pp.base.js]
 * 2. Bootstrapping or initialising "pp" Object of geolocation() skeleton: ppInit() [defined in pp.bootstrap.js]
 * 3. Accessing "pp" function: afterInit() [defined in pp.bootstrap.js]
 * Bootstrapping and afterInit are found in pp.bootstrap.js that will be merged with this file once complete
 */
function geolocation() {
	this.about = {
		Name: "pinpoint.js",
		Description: "Geolocation+GoogleMaps Library",
		Author : "Zeeshan Hyder",
		Version : "0.1",
		Geolocation: "Supported"
	};
	
	if(typeof(google)!="object"){  console.log('ppError: GoogleMaps API not loaded.'); return false; }
	console.log("Geolocation object registered. Type <pp.about> to know more.");
	if (window === this)
		return new geolocation();
}
vb = new Object();
geolocation.prototype = {
	__getCoords : function() {
		return ( {
			latitude : this.x,
			longitude : this.y
		});
	},
	setLatlng: function(x,y){ 
		if(arguments.length==0){x=this.x;y=this.y;}
		this.latlng =  new google.maps.LatLng(x,y); return(this.latlng); 
	}, //Returns Latitudes and Longitudes for use with google maps api. Defaults to coordinates available in pp.x and pp.y if no coordinates are passed
	places: {
		geocoder: new google.maps.Geocoder(),
		_Name: new Array(null),
		getPlaceName: function(c,a,o){
			(arguments.length==1)?a=1:a=a;
			(o==null)?o=this._Name:o=o;
			this.geocoder.geocode({'latLng':c},function(r,s){
				if(s==google.maps.GeocoderStatus.OK){
					if(r[a]) o[0]=r[a]; else console.log('Unknown Location');
				}else{ console.log('ERROR:'+s+'. Please try again');}
			});
			
		}
	},
	
};
