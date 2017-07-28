app.controller('mapCtrl', ['$scope', function ($scope) {
	var map , infoWindow;
	setTimeout(function() {
		document.getElementById('mapListener').addEventListener('click', function(){
			map = new window.google.maps.Map(document.getElementById('map'), {
				center: {
					lat: 35,
					lng: -35
				},
				zoom: 3
			})
			infoWindow = new google.maps.InfoWindow;
		});
		if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };

	            infoWindow.setPosition(pos);
	            infoWindow.setContent('Location found.');
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
	      }, 100)


	var markers = [];
	var infoWindows = [];


	var mapLocations = function() {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(null);
		}
		markers = [];
		infoWindows = [];
		console.log($scope.locations);
		$scope.locations.forEach(function(location) {
			if (location) {
				var marker = new window.google.maps.Marker({
					title: location,
					position: {
						lat: parseFloat(location.latitude),
						lng: parseFloat(location.longitude)
					},
					map: map,
					animation: google.maps.Animation.DROP,
					icon: 'src/img/marker.png'
				})
				markers.push(marker);
				// console.log(markers);
				var infoWindow = new window.google.maps.InfoWindow({

					content: "<div style='text-align:center; margin-left:25px; font-family: Sans-serif; font-size:15px'><br>" +
						location + '<br>' 
				});

				infoWindows.push(infoWindow)

				marker.addListener('click', function() {
					for (var i = 0; i < markers.length; i++) {
						infoWindows[i].close(map, markers[i])
					}
					infoWindow.open(map, marker);
				});
				map.addListener('click', function() {
					infoWindow.close(map, marker);
				})
			}
		})
	}

}])