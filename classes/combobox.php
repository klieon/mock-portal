<?php
$array = array();
if ($_GET['_name'] == 'country') 
{
//switch for Countries
switch($_GET['_value']){
 case '3':
		$array[] = array('1' => 'Mali');
		$array[] = array('2' => 'France');	
		$array[] = array('3' => 'Italy');
		$array[] = array('4' => 'China');
 break;
 case '2':
		$array[] = array('1' => 'Britain');
		$array[] = array('2' => 'USA');	
		$array[] = array('3' => 'Spain');	
 break;
 case '1':
		$array[] = array('1' => 'Japan');
		$array[] = array('2' => 'Portugal');	
		$array[] = array('3' => 'USA');	
 break;
 default:
		$array[] = array('0' => 'No state');
}
} elseif ($_GET['_name'] == 'state') 
{
switch($_GET['_value']){
 case '3':
		$array[] = array('1' => 'Downtown');
		$array[] = array('2' => 'Western Sector');	
		$array[] = array('3' => 'NorthWestern Sector');
		$array[] = array('4' => 'Southern Sector');
 break;
 case '2':
		$array[] = array('2' => 'Western Sector');	
		$array[] = array('2' => 'Southern Quadrant');	
		$array[] = array('2' => 'Place 5482');	
		$array[] = array('2' => 'Store Front 11');	
 break;
 case '1':
		$array[] = array('2' => 'Southern Sector');	
		$array[] = array('2' => 'East');	
		$array[] = array('2' => 'Uptown');	
		$array[] = array('2' => 'Store Front 43');	
 break;
 default:
		$array[] = array('0' => 'No state');
}
} elseif ($_GET['_name'] == 'city')
{
switch($_GET['_value']){
 case '3':
		$array[] = array('1' => 'Report');
		$array[] = array('2' => 'Western Sector');	
		$array[] = array('3' => 'NorthWestern Sector');
		$array[] = array('4' => 'Southern Sector');
 break;
 case '2':
		$array[] = array('2' => 'Report 17');	
		$array[] = array('2' => 'Southern Quadrant');	
		$array[] = array('2' => 'Place 5482');	
		$array[] = array('2' => 'Store Front 11');	
 break;
 case '1':
		$array[] = array('2' => 'Report 25');	
		$array[] = array('2' => 'East');	
		$array[] = array('2' => 'Uptown');	
		$array[] = array('2' => 'Store Front 43');	
 break;
 default:
		$array[] = array('0' => 'No state');
}
} else
{

	$array[] = array('1' => 'Data 1');
	$array[] = array('2' => 'Data 2');	
	$array[] = array('3' => 'Data 3');	
}
echo json_encode( $array );
?>


