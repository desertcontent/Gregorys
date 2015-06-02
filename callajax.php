<?php
 
    $special1 = $_POST['special1'];
    $special2 = $_POST['special2'];
    $special3 = $_POST['special3'];
    $special1s = $_POST['special1s'];
    $special2s = $_POST['special2s'];
    $special3s = $_POST['special3s'];
 
    
    $dbhost = 'localhost:3036';
    $dbuser = 'briscoco_brisco';
    $dbpass = 'Bc44556362';
    $conn = mysql_connect($dbhost, $dbuser, $dbpass);
    
    
    if(! $conn )
    {
	    die('Could not connect: ' . mysql_error());
	    }
   
    $spec1 = $_POST['special1'];
    $spec2 = $_POST['special2'];
    $spec3 = $_POST['special3'];
    $spec1s = $_POST['special1s'];
    $spec2s = $_POST['special2s'];
    $spec3s = $_POST['special3s'];
      
 
$sql = 'UPDATE specials SET special_1 = "'.$spec1.'" ,special_2 = "'.$spec2.'" ,special_3 = "'.$spec3.'" ,special_1s = "'.$spec1s.'" ,special_2s = "'.$spec2s.'" ,special_3s = "'.$spec3s.'" WHERE id = 1';

        
mysql_select_db('briscoco_mobi');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not update data: ' . mysql_error());
}else{
//echo "Updated data successfully\n";
mysql_close($conn);
}

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
  if(! $conn )
    {
	    die('Could not connect: ' . mysql_error());
	    }

$sql = 'SELECT * FROM specials';

mysql_select_db('briscoco_mobi');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}

$res = json_encode(mysql_fetch_assoc($retval));
echo $res;

/*while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
    echo "EMP ID :{$row['special_1']}  <br> ".
         "EMP NAME : {$row['special_1']} <br> ".
         "EMP SALARY : {$row['special_1']} <br> ".
         "--------------------------------<br>";
} 
echo "Fetched data successfully\n"; */
mysql_close($conn);    
    
    
    $update  = '<html><body>';
    $update .= '<p id="special1">'.$_POST[special1].'</p>';
    $update .= '<p id="special1-subheading">'.$_POST[special1s].'</p>';
    $update .= '<p id="special2">'.$_POST[special2].'</p>';
    $update .= '<p id="special2-subheading">'.$_POST[special2s].'</p>';
    $update .= '<p id="special3">'.$_POST[special3].'</p>';
    $update .= '<p id="special3-subheading">'.$_POST[special3s].'</p>';
 
    $update .= '</body></html>';
    $note_name = 'test.txt';
     file_put_contents('specials.html', $update);
    //$firstName = 'vvvvvvvvvvvvvvvv';
    // echo("First Name: " . $firstName . " Last Name: " . $lastName);
    
     $out = file_get_contents('specials.html');
     //  echo("First Name: " . $firstName . " Last Name: " . $lastName);
     //echo "File Output:".$update;
?>