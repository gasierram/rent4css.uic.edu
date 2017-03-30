/**
Author: Gustavo Alejandro Sierra Mancera
This is the core js logic for adding markes and radarchart for Purdue 2017 Ironhacks
**/

//variables for map and marks
var elevator;
var map;

//init the google map in the webpage
    function initMap(){
        var mapDiv = document.getElementById('map'); //Line 1: Save reference to div element where map would be shown
        var map = new google.maps.Map(mapDiv, {//Line 2: Create Map object passing element reference, center and zoom as parameters
            center: {lat: 41.8708, lng: -87.6505}, //This is Department of Computer Science – University of Illinois, Chicago Location
            zoom: 8});
    }
