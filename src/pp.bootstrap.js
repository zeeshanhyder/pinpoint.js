/*
 * Pinpoint Bootstrapper File
 * 
 * This file initializes pp Object of geolocation class.
 * This part will be merged in base.js file once complete.
 * 
 */




errorHandler = function(e){
	switch(e.code){
		case 1: console.log("PERMISSION_DENIED:Please allow this app to use geolocation service"); break;
		case 2: console.log("NETWORK_ERROR:There seems to be some problem with the network. Try again. "); break;
		case 3: console.log("TIMEOUT:The app was unable to obtain coordinates. Try again."); break;
		default:console.log("ERROR: An unknown error crept up. Please try again."); 
	}
};

//afterInit handles access to pp objects and its parameters
afterInit = function(p){
	pp.x = p.coords.latitude;
	pp.y = p.coords.longitude;
	pp.setLatlng(pp.x,pp.y);
	pp.places.getPlaceName(pp.latlng,1);   //returns address based on location coordinates. func(coordinates,accuracy) accuracy default: 1
};

	
//ppInit bootstraps "pp" object, instance of geolocation Object
function ppInit() {
	if ( typeof (window.navigator.geolocation) === "object") {
		window.navigator.geolocation.getCurrentPosition(function(p) {
			pp = new geolocation();
			afterInit(p);
		},function(err){
			errorHandler(err);
		});
	} else {
		console.log('Geolocation not supported!');
	}
}
