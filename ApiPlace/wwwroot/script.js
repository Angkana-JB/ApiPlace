var map;

function initialize() {
    //var filteredCities = ['San Farancisco', 'San Diego', 'New York', 'New Orleans'];
    //var listItems = filteredCities.map(function (city) {
    //    return '<li  class="list-group-item">' + city + ' <br/> dfdfd <br/> 789456</li>';
    //})
    //document.getElementById('without-join').innerHTML = listItems;
    //document.getElementById('with-join').innerHTML = listItems.join('');

    const listvalue = document.querySelector('.listdata')
    var myLatlng = new google.maps.LatLng(13.828253, 100.52845070000001);
    var option = {
        zoom: 16, center: myLatlng,
        mapTypeId: 'roadmap'
    };
    map = new google.maps.Map(document.getElementById("map"), option);

    var input = (document.getElementById("pac-input"));

    var searchBox = new google.maps.places.SearchBox((input));
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.lenght == 0) {
            return;

        }

        //this.setZoom(16);
        //this.initialZoom = false;

        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scalesSize: new google.maps.Size(25, 25)
            };
            var mark = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });
             

            markers.push(mark);

            bounds.extend(place.geometry.location);

        }
        map.fitBounds(bounds);
        map.setZoom(16);


        var request = {
            location: mark.position,
            radius: '500',
            type: ['restaurant'],
            zoom: 16
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

    }
        
    );

    //    var request = {
    //    location: input,
    //    radius: '500',
    //    type: ['restaurant']
    //};

    //service = new google.maps.places.PlacesService(input);
    //service.nearbySearch(request, callback);

    //testing = [];
    //function callback(results, status) {
    //    if (status == google.maps.places.PlacesServiceStatus.OK) {
    //        for (var i = 0; i < results.length; i++) {
    //            testing = results[i];

    //        }
    //    }

   
    

 //   var pyrmont = new google.maps.LatLng(13.828253, 100.52845070000001);

//    map = new google.maps.Map(document.getElementById('map'), {
 //       center: pyrmont,
 //       zoom: 15
 //   });
    var request = {
        location: myLatlng,
        radius: '500',
        type: ['restaurant'],
        zoom: 16
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    
}
    


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var listItems = '<li style="text-align: left;" class="list-group-item">' + results[i].name + '<br/> Rating : ' + results[i].rating + '<br/> Address : ' + results[i].vicinity + '<br/></li>';


            var listItems = results.map(function (results) {
                return '<li  style="text-align: left;" class="list-group-item">' + results.name + '<br/> Rating : ' + results.rating + '<br/> Address : ' + results.vicinity + '<br/></li>';
            })

            document.getElementById('with-join').innerHTML = listItems.join('');


            // console.log(results[i].name);
            createMarker(results[i]);

        }
        //   document.getElementById('without-join').innerHTML = listItems;
        //const displayResults = () => {
        //    results.filter(result => result.rating)
        //        .sort((a, b) => a.rating > b.rating ? -1 : 1)
        //        .forEach(result => {
        //            places.innerHTML += `<li>${result.name} - ${result.rating}</li>`;
        //        });
        //}


        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });


            //            google.maps.event.addListener(marker, 'click', function () {
            //                infowindow.setContent(place.name);
            //                infowindow.open(map, this);
            //                //const ul = listvalue.querySelector('ul');
            //                //const li = document.createElement('li');
            //                //addInput.value = (place.name);
            //                //ul.appendChild(li);
            //            });
            //        }

            //        google.maps.event.addDomListener(window, 'load', initialize);


        }



    }
}

