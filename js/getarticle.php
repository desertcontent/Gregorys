<?php
 $url =  'http://gregorysinc.com/index.php?option=com_content&view=article&id='.$_POST['id'].'&tmpl=raw';
//$url =  "http://gregorysinc.com/index.php?option=com_content&view=article&id=1978&template=yoo_neo";
$data = file_get_contents($url);
echo $data;
?>