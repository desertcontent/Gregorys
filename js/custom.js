  
  $( document ).bind("pagebeforeload", function() {
  //$.mobile.changePage("#main-mobile");
  //if (screen.width > 200){$.mobile.changePage("#main");}
  
  });
 
   $( document ).bind("pagebeforecreate", function() {
	 //$.mobile.changePage("#main-mobile");
  //if (screen.width > 200){$.mobile.changePage("#main");}
 	
  });
	
   
 
  $( document ).delegate("#main", "pageinit", function() {
		 // alert(document.documentElement.clientWidth+':'+screen.width);
  			// Modernizr
				//if (Modernizr.geolocation) {var ua = navigator.userAgent; $('#diagnostics').text(ua);alert(screen.width+'x'+screen.height+' '+$(window).width()+'x'+$(window).height())}
				  // var ua = navigator.userAgent; $('#diagnostics').text(ua);alert(ua+' '+screen.width+'x'+screen.height+' '+$(window).width()+'x'+$(window).height());
				  
				  $('#splash-footer').find('.ui-link').live('click',function() {
			
			 alert('You are now leaving the Gregory\'s Insurance web site.  Any products and services accessed through this web site are not provided by Gregory\'s Insurance.  This website may have a privacy policy and security policy that are different than Gregory\'s Insurance.  Please review the destination website?s privacy and security policies.  These links are provided as a convenience to you and are controlled by third parties. Gregory\'s Insurance does not endorse, approve, certify or control third party sites.');
   
			
			});
				  
				$('#fullsite').live('click',function(event) {
               $.cookie('the_cookie', 'desktop',{ domain: 'gregorysinc.com' });
				  });	
		 
		  $('#biz').load('config.html #destination_address',function(){
				 $('#biz').trigger('create'); 	 
				  });
				   $('#biz2').load('config.html #destination_address2',function(){
				 $('#biz2').trigger('create'); 	 
				  });
				  
				  			getarticle(521,1);
				  			getarticle(62,2);
				  			getarticle(56,3);
				  			getarticle(1908,4);
				  			getarticle(1906,5);
				  			
				  		 	function getarticle(id,artnum) { 
				  					
				  				 
				  					$.ajax({
									type: "POST",
									url: "js/getarticle.php",
									cache: false,
									 data: {id: id},
									dataType:"html",
									success: onSuccessArticle,
									error: onErrorArticle
								});

								function onSuccessArticle(data, status)
							 {
								 $('#article-'+artnum+'-page #article-'+artnum+'-content').html(data);
								  $('#article-'+artnum+'-page #article-'+artnum+'-content').find('.article').css('max-width','600px');
								   $('#article-'+artnum+'-page #article-'+artnum+'-content').find('.article').css('color','#444');	
								 var imgsrc = $('#article-'+artnum+'-content img').attr('src');
								 $('#article-'+artnum+'-content img').attr('src','http://gregorysinc.com/' + imgsrc);	
								 $('#article-'+artnum+'-page').trigger('create');
								 //alert( $('#article-'+artnum+'-content').find('.title').text());
								  $('#article-'+artnum+'-nav').text($('#article-'+artnum+'-content').find('.title').text());
								  $('#article-'+artnum+'-nav').trigger('create');
								  $('#article-'+artnum+'-header').text($('#article-'+artnum+'-content').find('.title').text());
								  $('#article-'+artnum+'-header').trigger('create');
								  $('#article-'+artnum).find('img').attr('src','http://gregorysinc.com/' + imgsrc);
								  $('#article-'+artnum).trigger('create');			
								} 
				 				 
				 function onErrorArticle(data, status){alert('error'+status+'-'+data);
					 console.log("my object: %o", data)
				 }  
				 
				 }  
				 								
										 					  
				// Load Social Share Buttons
			 $('#socialbutton').jsShare({ 
			initialdisplay: 'expanded', 
			animate: true,
			 facebook: true,
				twitter: true,
				digg: true,
				reddit: false,
				stumbleupon: false,
				messenger: false,
				delicious: false,
				linkedin: true,
				googlebuzz: false,
				yoursitetitle: 'Gregorys Insurance',
				yoursiteurl: 'http://gregorysinc..com',
				yoursitename: 'Gregorys Insurance',
				desc: '',
			maxwidth: 150 
			});

				 $('#destination_address_display').load('config.html #destination_address');
				 $('#destination_address_display2').load('config.html #destination_address2');

				   
				 // Load Logo to both positions 
				
				// Default Logo Class (small mobile size)
				// $('.logo-main').load('config.html #logo-mobile'); 
				 
				 //$('#logo-page').load('config.html #logo-mobile'); 
				 //$('#logo-header').load('config.html #logo-mobile'); 
				  $('#logo-wrapper').load('config.html #logo-mobile'); 
				 $('#logo-leftnav').load('config.html #logo-mobile'); 
				
			
				// $('#header-block-right').load('config.html #header-promo-links'); 
				// $('#header-content-c').load('config.html #logo-mobile');					 
				// $('#header-content-r').load('config.html #logo');
									
				 	
 
				 $('#pane').trigger('expand');
				 
				 
				 // Fill left panel with content
				 /*	 $('#mypanel').load('#menu-page #menu-list',function(){
								  $('#mypanel').trigger('create');
  
			 				 }); 	
				 */
				  
				 
				 
										
						
			
						
					
				
				$('#tweets').click(function() {
				 			$('#splash_content').html('');
				 			$('#splash_content').jTweetsAnywhere({
							username: 'datafog',
							count: 4,
							 
							showTweetFeed: {
								showProfileImages: true,
								showUserScreenNames: true,
								showUserFullNames: true,
								showActionReply: true,
								showActionRetweet: true,
								showActionFavorite: true,
								paging: {
				mode: 'none'
			}
								},
								showTweetBox: {
									label: '<span style="color: #303030">Spread the word ...</span>'
									}
									});
				 			
				 							  			 
				 				return false;
						});
				
								
				 $('#staffbutton').click(function() {
							//$('#splash_content').load('#menu-page-mobile #menu-section-a',function(){
							$('#splash_content').load('#staff #staff-listview',function(){

								  $('#splash_content').trigger('create');
								  $('#splash_content').trigger('create');
								  $('#staff-listview').css('max-height','425px');
								  $('#staff-listview').css('overflow','auto');
								 });							 
								 return false;
						});		
				 
				$('#photos').click(function() {
							$('#splash_content').load('gallery.html #slider',function(){
								  $('#splash_content').trigger('create');
								   galleryload();
								  // $('#splash_content').slider('refresh');
									
								 });							 
								 return false;
						});
						
				$('#mapdir, #mapdirt, #mapbutton').click(function() {

								 
								 $('#splash_content').load('googlemap.html #testmap',function(){
								  $('#splash_content').trigger('create');
								   mapload();
								  								  // $('#map_canvas_1').gmap('refresh');
								  
								  });
							 return false;
						});
			
			$('#facebooklink').click(function() {
							 $('#splash_content').load('config.html #facebook-display',function(){
								// $('#splash_content').trigger('create');
  

								 });							 
								 return false;
						});

						$('#coveragebutton').click(function() {
					 
								 //$('#splash_content').load('config.html #splash-init-content5',function(){

							 $('#splash_content').load('#coverage #coverage-listview',function(){
								 	$('#splash_content').trigger('create');
								 	$('#coverage-listview').css('max-height','435px');
								  $('#coverage-listview').css('overflow-y','scroll');
								  $('#coverage-listview').css('padding-bottom','0px');
								  $('#coverage-listview').css('margin','auto');

								 });							 
								 return false;
						});



			$('#aboutusbutton').click(function() {
								 _gaq.push(['_trackEvent', 'splash', 'aboutus', 'about-us']);
							//$('#splash_content').html('');
							 $('#splash_content').load('#aboutus #history',function(){
								 $('#splash_content').trigger('create'); 							 
								 $('#history').css('max-height','435px');
								 $('#history').css('overflow-y','scroll');
								 $('#history').css('margin','auto');
								   
								 });							
								 return false;
						});
						
					
					$('.mobilecall').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'mobile-call', 'mobile-call']);					
						});
						
											
					$('.mobilecall-footer').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'mobile-call-footer', 'mobile-call-footer']);					
						});

					$('.phone-popup').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'phone-popup', 'phone-popup']);					
						});
					$('.phone-popup-footer').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'phone-popup-footer', 'phone-popup-footer']);					
						});
						
					$('.directions-app').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'directions-app', 'directions-app']);					
						});
						
					$('.directions-app-footer').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'directions-app-footer', 'directions-app-footer']);					
						});
						
					$('.directions-page').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'directions-page', 'directions-page']);					
						});
						
					$('.directions-page-footer').click(function() {
								 _gaq.push(['_trackEvent', 'contact', 'directions-page-footer', 'directions-page-footer']);					
						});

	
					
					
						
						
						$("#select-choice-min").on( "change", function() {
								var mypage = $(this).val();
								//alert(mypage);
								
								 $('#splash_content').load( '#coverage'+mypage+' #coverage-listview'+mypage,function(){
								 	$('#splash_content').trigger('create');
								 	$('#coverage-listview'+mypage).css('max-height','435px');
								  $('#coverage-listview'+mypage).css('overflow-y','scroll');
								  $('#coverage-listview'+mypage).css('padding-bottom','0px');
								  $('#coverage-listview'+mypage).css('margin','auto');
								   var mymenu = $('#select-choice-min');
								 mymenu.prop('selectedIndex',0);
								 mymenu.selectmenu("refresh");
								 });
								
								});
						

				// List Ads	 
		/* 	$('#list-ad1').load('config.html #splash-init-content',function(){
				//$('#list-ad1').trigger('create'); 	 
				 });
				
				$('#list-ad2').load('config.html #splash-init-content6',function(){
				//$('#list-ad2').trigger('create'); 	 
				 });
				
				 $('#list-ad3').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
				 
				 $('#list-ad4').load('config.html #splash-init-content2',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
		
		*/
				
				 $('#list-ada').load('config.html #splash-init-content5',function(){
				//$('#list-ad3').trigger('create'); 	 
				  });
				  $('#list-adb').load('config.html #splash-init-content7',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
			
				/* $('#list-adc').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
				 $('#list-add').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });  */

				   $('#list-ade').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create'); 	 
				  });
				  $('#list-adf').load('config.html #splash-init-content2',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
				/* $('#list-adg').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });
				 $('#list-adh').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create'); 	 
				 });  */
								
				
				//$('#splash_content').load('config.html #logo-tablet');
				
				$('#splash_content').load('config.html #splash-init-content',function(){	
				// getSoup();
				 //getSpecials();
				 });
				 
				 	
/* 				$('#splash_content').load('config.html #testcamera',function(){
								 $('#splash_content').trigger('create'); 							 
								 //$('#testcamera').camera({thumbnails: true, fx: 'simpleFade', loader: 'bar', time: 5000, pagination: true});
								 $('#testcamera').camera({loader:'none', pagination: false, thumbnails: false, navigation: false,time:3000, transPeriod:750,fx:'simpleFade',height: '60%',portrait:false});
								 getSoup();
								   
								 });	
*/						  

					 // $('#testcamera').camera({height: '50%', thumbnails : false}); //the basic method
			
						
						// Check business hours to see if open  -- Needs to be changed to a class
						var d = new Date();
						var dateski = (d.getDay()+' '+d.getHours()+' '+d.getFullYear()+' '+d.getHours()+' '+d.getMinutes()+' '+d.getSeconds());

						$('.store_open_message').html('We\'re Closed').css('color','#cccccc;');
						 if (d.getDay() >=1  && d.getDay() <=  5  && d.getHours() <= 16 && d.getHours() >=8) $('.store_open_message').html('We\'re Open!').css('color','#00ff00');
						 if (d.getDay() ==	6 && d.getHours() <= 12 && d.getHours() >=9) $('.store_open_message').html('We\'re Open!').css('color','#00ff00');;

						//alert(dateski); 
						
						
						
						
						function tooltips() {
	var targets = $( '[rel~=tooltip]' ),
		target	= false,
		tooltip = false,
		title	= false;
 
	targets.bind( 'mouseenter', function()
	{
		target	= $( this );
		tip		= target.attr( 'title' );
		tooltip = $( '<div id="tooltip"></div>' );
 
		if( !tip || tip == '' )
			return false;
 
		target.removeAttr( 'title' );
		tooltip.css( 'opacity', 0 )
				  .html( tip )
				  .appendTo( 'body' );
 
		var init_tooltip = function()
		{
			if( $( window ).width() < tooltip.outerWidth() * 1.5 )
				tooltip.css( 'max-width', $( window ).width() / 2 );
			else
				tooltip.css( 'max-width', 340 );
 
			var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
				pos_top	 = target.offset().top - tooltip.outerHeight() - 20;
 
			if( pos_left < 0 )
			{
				pos_left = target.offset().left + target.outerWidth() / 2 - 20;
				tooltip.addClass( 'left' );
			}
			else
				tooltip.removeClass( 'left' );
 
			if( pos_left + tooltip.outerWidth() > $( window ).width() )
			{
				pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
				tooltip.addClass( 'right' );
			}
			else
				tooltip.removeClass( 'right' );
 
			if( pos_top < 0 )
			{
				var pos_top	 = target.offset().top + target.outerHeight();
				tooltip.addClass( 'top' );
			}
			else
				tooltip.removeClass( 'top' );
 
			tooltip.css( { left: pos_left, top: pos_top } )
				   .animate( { top: '+=10', opacity: 1 }, 50 );
		};
 
		init_tooltip();
		$( window ).resize( init_tooltip );
 
		var remove_tooltip = function()
		{
			tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
			{
				$( this ).remove();
			});
 
			target.attr( 'title', tip );
		};
 
		target.bind( 'mouseleave', remove_tooltip );
		tooltip.bind( 'click', remove_tooltip );
	 });
} 
						
						tooltips();
						 						
						
						
						
						
						function getSpecials (){
						
						 function onSuccess(data, status)
							 {
								 
								 $(".daily-special-text").text(data.special_1);
							 
								 $(".daily-special-text2").text(data.special_1s);
								 $(".daily-special-text3").text(data.special_2);
								 $(".daily-special-text4").text(data.special_2s);
								 $(".daily-special-text5").text(data.special_3);
								 $(".daily-special-text6").text(data.special_3s);
								 
								 $(".list-special-1").text(data.special_1);
								 $(".list-special-2").text(data.special_2);
						
							 }
					  
							 function onError(data, status)
							 {
								 // handle an error
							 }	
						
						
						 var formData = $("#callAjaxForm").serialize();
  
								$.ajax({
									type: "POST",
									url: "getspecials.php",
									cache: false,
									data: formData,
									dataType:"json",
									success: onSuccess,
									error: onError
								});
										
						
						/*	$('.daily-special-text').load('specials.html #special1');
							$('.daily-special-text2').load('specials.html #special1-subheading');
							$('.daily-special-text3').load('specials.html #special2');
							$('.daily-special-text4').load('specials.html #special2-subheading');
							$('.daily-special-text5').load('specials.html #special3');
							$('.daily-special-text6').load('specials.html #special3-subheading'); */
						}
						
						 //getSpecials();
						
						$('#tweetFeed').jTweetsAnywhere({
							username: 'briscosheboygan',
							count: 5,
							showTweetFeed: {
								showProfileImages: true,
								showUserScreenNames: true,
								showUserFullNames: true,
								showActionReply: true,
								showActionRetweet: true,
								showActionFavorite: true
								},
								showTweetBox: {
									label: '<span style="color: #303030">Spread the word ...</span>'
									}
									});
						
						
							var latlngx;	
						    
						$('#mapdir').click(function() {
							 
							 $('#splash_content').load('googlemap.html #testmap',function(){
							 	  $('#splash_content').trigger('create');
								  

							 	  });
								 

								 
								 	function errorHandler(err) {
									if(err.code == 1) {
										 //alert("Error: Access is denied!");
										 
										  mapload();
										   $('#gps').hide();
										  $('#gps2').hide(); 
										  $('#gpslabel').hide();
										   
										
										}else if( err.code == 2) {
											 //alert("Error: Position is unavailable!");
											  
											 mapload();
											  $('#gps').hide();
											  $('#gps2').hide();
											  $('#gpslabel').hide(); 
											
											}
											else if( err.code == 3) {
											 //alert("Error: Position is unavailable!");
											 
											 mapload();
											  $('#gps').hide();
											 $('#gps2').hide();
											 $('#gpslabel').hide(); 
											 
											}

											}
											
									function showLocation(position) {
									
									$('#biz').load('config.html #destination_address',function(){
									$('#biz').trigger('create');
									});
									$('#biz2').load('config.html #destination_address2',function(){
									$('#biz2').trigger('create');
									});
									//$('#biz').load('config.html #destination_address');
									
									var latitude = position.coords.latitude;
									var longitude = position.coords.longitude;
									latlngx = new google.maps.LatLng(latitude, longitude);
									//alert("Latitude : " + latitude + " Longitude: " + longitude);
									$("#xlat").text (latitude);
						            $("#xlng").text (longitude);
									 mapload();
									}
								
								
								if(navigator.geolocation){
									// timeout at 5000 milliseconds (5 seconds)
									var options = {timeout:5000,enableHighAccuracy : true};
									navigator.geolocation.getCurrentPosition(showLocation, 
                                               errorHandler,
                                               options);
                                               }else{
                                              
	                                            // alert("Sorry, browser does not support geolocation!");
	                                               }


							 return false;
						});
						
						
							
										
						 function mapload() { 

var map;
var marker;
var infowindow;
//var latlngx;
var latlngy;
var mobileaddress;				
 
	
	// Start Geocoder
	var geocoder;
	geocoder = new google.maps.Geocoder();
	
	
	
	
	
	
	
	geocoder.geocode({'latLng': latlngx}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
            
          $("#from").val(results[0].formatted_address);
        }
      } else {
       // alert("Geocoder failed due to: " + status);
      }
    });

	
								
	var bizlatlng;
	var bizlatlng2;
	// Destination Location Marker (Business Location)		 
		 var addy =	 document.getElementById("destination_address").innerHTML;
		 var addy2 = document.getElementById("destination_address2").innerHTML;
	 	 		   		
		 geocoder.geocode({'address': addy}, function(results, status) {
		   document.getElementById("biz").innerHTML = '' + addy + '<br />' + (results[0].geometry.location);

		document.getElementById("blat").innerHTML = '' + (results[0].geometry.location.hb);
		document.getElementById("blng").innerHTML = '' + (results[0].geometry.location.ib);	   
		  bizlatlng = results[0].geometry.location;
		  

		   var mapOptions = {
			   zoom: 6,
			   center: bizlatlng,
			   mapTypeId: google.maps.MapTypeId.ROADMAP
			   };								  
		   //var mapOptions = { 'center': bizlatlng , 'zoom': 12 };
	    // mapnew = $('#map_canvas_1').gmap(mapOptions);	
	      
	 map = new google.maps.Map(document.getElementById('map_canvas_1'),
mapOptions);
		 
		 var bizinfocontent = '<div class="infowindow">'+bizlatlng+'<br />'+addy+'<br /></div>'
		 var bizwindow = new google.maps.InfoWindow({
			 content: bizinfocontent
			 });
		 
		 
		 
		 var bizmarker = new google.maps.Marker({
			 position: bizlatlng,
			 map: map,
			 title: 'Business Location'
			 });
       google.maps.event.addListener(bizmarker, 'click', function() {
	       bizwindow.open(map,bizmarker);
	       });
        

		  });			 				
		
		
		 geocoder.geocode({'address': addy2}, function(results, status) {
		   document.getElementById("biz2").innerHTML = '' + addy2 + '<br />' + (results[0].geometry.location);
		document.getElementById("blat2").innerHTML = '' + (results[0].geometry.location.hb);
		document.getElementById("blng2").innerHTML = '' + (results[0].geometry.location.ib);	   
		  bizlatlng2 = results[0].geometry.location;
		  

		  var bizinfocontent2 = '<div class="infowindow">'+bizlatlng2+'<br />'+addy2+'<br /></div>'
		 var bizwindow2 = new google.maps.InfoWindow({
			 content: bizinfocontent2
			 });
		 
		 var bizmarker2 = new google.maps.Marker({
			 position: bizlatlng2,
			 map: map,
			 title: 'Business Location2'
			 });
       google.maps.event.addListener(bizmarker2, 'click', function() {
	       bizwindow2.open(map,bizmarker2);
	       });

	        
		  });			 
			  				
	
	
				 							 
						
//  DIRECTIONS BUTTONS
var directionsDisplay;
 var directionsService = new google.maps.DirectionsService();
 directionsDisplay = new google.maps.DirectionsRenderer();
		  
// DIRECTIONS FROM LOCATION INPUT TEXT
// To Primary Business Location
$('#submit').click(function() {

// Show Directions

 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results'));
function calcRoute() {
 
	var start = $('#from').val();
	var end = $('#to').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results').hide();
$('#results').show();
$('#destination_address_display').load('config.html #destination_address');
 

	return false;
});


// To Secondary Business Location
$('#submit2').click(function() {

// Show Directions

 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results2'));
function calcRoute() {
 
	var start = $('#from').val();
	var end = $('#to2').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results').hide();
$('#results2').show();
 
$('#destination_address_display2').load('config.html #destination_address2');

	return false;
});




 
// DIRECTIONS FROM CURRENT DEVICE LOCATION
// To Primary Business Location
$('#gps').click(function() {


 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results'));
function calcRoute() {
 
	var start = latlngx;
	var end = $('#to').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results2').hide();
$('#results').show();
$('#destination_address_display').load('config.html #destination_address');
 

	return false;
});

// To Secondary Business Location
$('#gps2').click(function() {


 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results2'));
function calcRoute() {
 
	var start = latlngx;
	var end = $('#to2').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results').hide();
$('#results2').show();
$('#destination_address_display2').load('config.html #destination_address2');

	return false;
});
		  
		  
 		  
	 //  $('#map_canvas_1').gmap('refresh');			 
				



  // end loadit

 //end get mobile location 

} // end function mapload
						
						
						function galleryload() {
						
						 window.slider = new Swipe(document.getElementById('slider'), {
							 startSlide: 0,
							 speed: 400,
							 auto: 3000, 
							 callback: function(event, index, elem) {
								 //alert(elem.child("div").innerHTML);
								 }
							});

						
						}
						// end function galleryload

});






// $( document ).delegate("#gallerypage", "pageinit", function() {
 // var maxwidth=$(window).width();
 //var maxheight=($(window).height())-50;
 
 //alert(maxwidth+' '+maxheight+'<br >'+screen.width+' '+screen.height);
 // $('#gallery_content').css({'padding': '0px'});
  // $('div#gallerypage.ui-page div#gallery_content.ui-content div#slider.swipe div.swipe-wrap div div img').css({'height': maxheight});
 
 //});



