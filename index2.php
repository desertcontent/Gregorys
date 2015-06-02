<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DataFog Applications - Sheboygan, WI</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	<link rel="stylesheet" href="css/screen-view.css" />
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true" type="text/javascript"></script>  

</head>
<body> 

<!-- Start of first page -->
<div data-role="page" id="foo">

	<div data-role="header">
		<h1>Foo</h1>
	</div><!-- /header -->

	<div data-role="content">	
		<p>I'm first in the source order so I'm shown as the page.</p>		
		<p>View internal page called <a href="#bar">bar</a></p>	
	</div><!-- /content -->

	<div data-role="footer">
		<h4>Page Footer</h4>
	</div><!-- /footer -->
</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="map1">

	<div data-role="header">
		<h1>Map1</h1>
	</div><!-- /header -->

	<div data-role="content" >	
	<div id="map" style="width:400px;height:400px;"></div>

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

		<p><a href="#foo">Back to foo</a></p>	
	</div><!-- /content -->

	<div data-role="footer">
		<h4>Page Footer</h4>
	</div><!-- /footer -->
</div><!-- /page -->
</body>
</html>