<?php 
class Base {
	
	public function __construct(){}

	public function debug_a($array){
		echo 'The output is: <br><pre>';
			print_r($array);
		echo '</pre>';
	}
} //close Base class