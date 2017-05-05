
$(document).ready(function(){

    
});

 $(".header-menu a").on('click', function(){
        
       $('#navigation').animate({left: '0'}, "0");
     
        $(".header-menu a").hide();
});

 $(".close_menu").on('click', function(){
        
         $('#navigation').animate({left: '-400px'}, "0");
         $(".header-menu a").show();
});

    
$('#main-slider').owlCarousel({
      items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    autoplayTimeout: 10000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});


  function initMap() {
    var uluru = {lat: 52.9225, lng: -1.47663};
      

      
      var styledMapType = new google.maps.StyledMapType(
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "color": "#1c2327"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "color": "#707070"
                  },
                  {
                    "weight": 1
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "color": "#1c2327"
                  }
                ]
              },
              {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#1c2327"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#1c2327"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#5ec7da"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ],
            {name: 'Daniel Map'});
      

      
      var image = {
        url: 'img/icons/map-maker.png',
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru,  
      mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: image
        });
  }

