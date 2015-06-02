<!DOCTYPE html>
<html> 
<head> 
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
  <title>Google Maps Multiple Markers</title> 
  <script src="http://maps.google.com/maps/api/js?sensor=false" 
          type="text/javascript"></script>
</head> 
<body>
  <div id="map" style="width: 500px; height: 400px;"></div>

  <script type="text/javascript">
    var locations = [
      ['Home', 43.7548509, -87.7077939 , 4],
      ['Depot Towing', 43.7494889, -87.719129 , 5],
      ['Water Street Pub', 43.75499, -87.7192649 , 3],
      ['Brisco County Wood Grill', 43.748461, -87.710133, 2],
      ['SCIS', 43.7283205, -87.8110335 , 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(43.7508284, -87.71453),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  </script>
 <?php  
 
 $geocode=file_get_contents('http://maps.google.com/maps/api/geocode/json?address=600A+Broadway+St,+Sheboygan+Falls,+WI&sensor=false');

$output= json_decode($geocode);

$lat = $output->results[0]->geometry->location->lat;
$long = $output->results[0]->geometry->location->lng;
echo $lat.' '.$long;
 ?>
  
</body>
</html>