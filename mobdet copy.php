<?php
    // include detection library
    include("js/mdetect.php");
    include("js/handa-utils.php");
      
    //Instantiate the object to do our testing with.
    $uagent_obj = new uagent_info();

    // redirect if mobile detected
//    if (($uagent_obj->DetectMobileLong() == $uagent_obj->true) { 
 //       header('Location: http://www.yoursite.com/mobile/'); })
 //echo '<h1>';
 //echo '<br />';
 
     //print(ConvertToText($uagent_obj->DetectTierIphone()));
     if(ConvertToText($uagent_obj->DetectTierIphone()) == 'true') {$switch = 'true';}
     if(ConvertToText($uagent_obj->DetectTierTablet()) == 'true') {$switch = 'true';}
     if(ConvertToText($uagent_obj->DetectTierRichCss()) == 'true') {$switch = 'true';}
     if(ConvertToText($uagent_obj->DetectTierOtherPhones()) == 'true') {$switch = 'true';}
     header('Location: http://demo.datafog.com');
     
      //echo $switch; 
       //print(ConvertToText($uagent_obj->DetectTierRichCss()));
       // echo '<br />';
     
        // echo '</h4>';
?>