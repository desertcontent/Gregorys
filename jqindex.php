<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DataFog Applications - Sheboygan, WI</title>
	<!--<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />-->
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.0-rc.1/jquery.mobile-1.3.0-rc.1.min.css" />
	<link rel="stylesheet" href="css/screen-view.css" />
	<link rel="stylesheet" href="css/themes/brisco.css" />
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<!--<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>-->
	<script src="http://code.jquery.com/mobile/1.3.0-rc.1/jquery.mobile-1.3.0-rc.1.min.js"></script>
	 <script src="http://maps.google.com/maps/api/js?sensor=true" type="text/javascript"></script> 
	 
	 <script src="js/jquery.ui.map.js" type="text/javascript"></script>
	 <script src="js/jquery.ui.map.full.min.js" type="text/javascript"></script>
	 <script src="js/jquery.ui.map.services.min.js" type="text/javascript"></script>
	 <link rel="stylesheet" href="css/swipe_style.css" />
	



</head>
<body>
<div data-role="page"  class="type-home" id="main">
	     <div data-role="panel" id="mypanel">
         <img id="qrcode" src="/images/qrcode.png"  />
         <img id="depot_qrcode" src="/images/depot_qrcode.png"  />
        </div><!-- /panel -->
	 
		<div data-role="content">
		<!--<p class="jqm-version"></p> -->

		<div class="content-secondary">
			
			<div id="jqm-homeheader">
				<h1 id="jqm-logo"></h1>				
			</div>
			
			<div id="test" style="text-align:center;"></div>

              <script type='text/javascript'>
                $('#jqm-logo').load('test.html #logo');
                 $('#test').load('test.html #qrcode');
                                 </script>

			<!--<p class="intro">&nbsp;</p>-->
			
		 	
		
			<ul data-role="listview" data-inset="true" data-theme="b" data-dividertheme="b">
				<li data-role="list-divider">Overview</li>
 
				<li><a href="googlemap.html" data-ajax="false" >Find Us</a></li>
				<li><a href="gallery.html" data-ajax="false" data-prefetch>Image Gallery</a></li>
				<li><a href="#gallerypage" data-ajax="true">Image Gallery Local</a></li>
				<li><a href="docs/about/getting-started.html">Restaurant Hours</a></li>
				<li><a href="tel:9208036915">Call Reservations</a></li>
				<li><a href="http://www.facebook.com/pages/Brisco-County-Wood-Grill/275345432761">Facebook</a></li>
				<li><a href="http://twitter.com/briscosheboygan">Twitter</a></li>
				<li><a href="docs/about/platforms.html">Contact Us</a></li>
			</ul>
            





</div><!--/content-secondary-->
 		
 

		<a data-icon="bars" data-inline="true" data-role="button" href="#mypanel" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-c"><span class="ui-btn-inner"><span class="ui-btn-text">QR Code</span><span class="ui-icon ui-icon-bars ui-icon-shadow">&nbsp;</span></span></a>

	
		
		
		

		<div class="content-primary">
			<nav>
				<ul data-role="listview" data-inset="true" data-theme="b" data-dividertheme="b">
					<li data-role="list-divider">Our Menu</li>
					<li><a href="docs/pages/index.html">Beverages</a></li>
					<li><a href="docs/toolbars/index.html">Appetizers</a></li>
					<li><a href="docs/buttons/index.html">Entrees</a></li>
					<li><a href="docs/content/index.html">Sides</a></li>
					<li><a href="docs/forms/index.html">Desserts</a></li>
					<li><a href="docs/lists/index.html">Specials</a></li>

					<li data-role="list-divider">API</li>
					<li><a href="docs/api/globalconfig.html">Configuring defaults</a></li>
					<li><a href="docs/api/events.html">Events</a></li>
					<li><a href="docs/api/methods.html">Methods &amp; Utilities</a></li>
					<li><a href="docs/api/data-attributes.html">Data attribute reference</a></li>
					<li><a href="docs/api/themes.html">Theme framework</a></li>


				</ul>
			</nav>
			
			 
         </div>
		</div>






 


	   
	   <div data-role="footer" class="footer-docs" data-theme="b">
            <p class="jqm-version"></p>
			<p>&copy; Datafog Applications</p>
	   </div>
	   
	    </div>

	 <!-- /page -->    
    
  <div data-role="page" id="map1">

	<div data-role="header" data-theme="b">
		<h1>Map1</h1>
	</div><!-- /header -->

	<div data-role="content" >	
	<div id="map" style="min-width:300px;min-height:300px;"></div>

  <script type="text/javascript">
    var locations = [
      ['Home', 43.7548509, -87.7077939 , 4],
      ['Depot Towing', 43.7494889, -87.719129 , 3],
      ['Water Street Pub', 43.75499, -87.7192649 , 2],
      ['Brisco County Wood Grill', 43.748461, -87.710133, 1] 
       
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
    
    google.maps.event.trigger(map,'resize');
  </script>

		<p><a href="#main">Back to Home</a></p>	
	</div><!-- /content -->
  
  <div data-role="footer" class="footer-docs" data-theme="c">
            <p class="jqm-version"></p>
			<p>&copy; Datafog Applications</p>
	</div>
 
  </div> 

   
 <div id="directions_map" data-role="page">
			<div data-role="header">
				<h1><a data-ajax="false" href="/">jQuery mobile with Google maps v3</a> examples</h1>
				<a data-rel="back">Back</a>
			</div>
			<div data-role="content">	
				<div class="ui-bar-c ui-corner-all ui-shadow" style="padding:1em;">
					<div id="map_canvas_1" style="height:300px;"></div>
					<p>
						<label for="from">From</label>
						<input id="from" class="ui-bar-c" type="text" value="Sheboygan Falls, WI" />
					</p>
					 <p>
						<!--<label for="to">To</label>-->
						<input type="hidden" id="to" class="ui-bar-c" type="text" value="539 Riverfront Dr, Sheboygan, WI" />
					</p>  
					<a id="submit" href="#" data-role="button" data-icon="search">Get directions</a>
				</div>
				<div id="results" class="ui-listview ui-listview-inset ui-corner-all ui-shadow" style="display:none;">
					<div class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">Results</div>
					<div id="directions"></div>
					<div class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-bottom ui-btn-up-undefined"></div>
				</div>
			</div>
		</div>  
 
 
 <div id="gallerypage" data-role="page" data-theme="b">
			<div data-role="header" data-theme="b">
				<h1>Image Gallery</h1>
				<a data-rel="back">Back</a>
			</div>
	<div data-role="content" data-theme="b">	
		<div id="slider" class="swipe">
				<div class="swipe-wrap"> 
						<div style="display:block"><div><img src="images/full/burger.png" alt="Burgers!" /></div></div> 
						<div style="display:none"><div><img src="images/full/cake.png" alt="Image 02" /></div></div> 
						<div style="display:none"><div><img src="images/full/ribs.png" alt="Image 03" /></div></div> 
						<div style="display:none"><div><img src="images/full/treat.png" alt="Image 04" /></div></div> 
				</div><!-- /slider-wrap -->   
		</div><!-- /slider -->

		<div class="swipe-nav">
				<a href="#" onclick="slider.prev();return false;">prev</a> 
				<a href="#" onclick="slider.next();return false;">next</a>
		</div><!-- /swipe-nav -->
</div> <!-- /content -->


<script src="js/swipe.js"  type="text/javascript"></script>
<script  type="text/javascript">
$(document).ready(function () {

   
      window.slider = new Swipe(document.getElementById('slider'), {
	      startSlide: 0,
	      speed: 400,
	      auto: 3000, 
	       callback: function(event, index, elem) {
	       alert(elem.child("div").innerHTML);
	       }
	   });
   
 });  
 


</script>
</div> <!-- /page -->
     

</body>
</html>