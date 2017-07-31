app.controller('mapCtrl', ['$scope', function ($scope) {
	var map , infoWindow;
	// $scope.showMap = false;
	setTimeout(function() {
		// document.getElementById('mapListener').addEventListener('click', function(){
		map = new window.google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 32.7,
				lng: -96.8
			},
			zoom: 15
		})
		infoWindow = new google.maps.InfoWindow;
		// });
		var pos;
		if (navigator.geolocation) {
				console.log('made it here');
	          navigator.geolocation.getCurrentPosition(function(position) {
	          	console.log(position.coords.latitude);
	            pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };
	            console.log(pos);
	            map.setCenter(pos);
	            // infowindow = new google.maps.InfoWindow();
		        var service = new google.maps.places.PlacesService(map);
		        service.nearbySearch({
		          location: pos,
		          radius: 500,
		          keyword: 'beer'
		        }, callback);

	            infoWindow.setPosition(pos);
	            infoWindow.setContent('Current location');
	            infoWindow.open(map);
	            map.setCenter(pos);
	          }, function() {
	            handleLocationError(true, infoWindow, map.getCenter());
	          });
	        } else {
	          // Browser doesn't support Geolocation
	          handleLocationError(false, infoWindow, map.getCenter());
	        }
		      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		        infoWindow.setPosition(pos);
		        infoWindow.setContent(browserHasGeolocation ?
		                              'Error: The Geolocation service failed.' :
		                              'Error: Your browser doesn\'t support geolocation.');
		        infoWindow.open(map);
		      }
	var markers = [];
	

	function callback(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
		  for (var i = 0; i < results.length; i++) {
		    createMarker(results[i]);
		  }
		}
	}

	function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
		  map: map,
		  title: place.name,
		  animation: google.maps.Animation.DROP,
		  position: placeLoc
		});
		console.log(place);
		var infowindow = new window.google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'click', function() {
			if (place.opening_hours.open_now !== undefined && place)
			{var openNow = place.opening_hours.open_now ? 'Currently Open' : "Currently Closed"}
		  infowindow.setContent(place.name + '<br>' + place.vicinity + '<br>' + (openNow || ''));
		  infowindow.open(map, this);
		});
	}

	// map.addListener('center_changed', function() {
	// 	$scope.showMap = true;
	// })

	}, 100)



}])