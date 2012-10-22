<?php require_once('Base.class.php');
/*

	This class is responsible for processing all question data and being the intermediary with the vovici api

*/
	
class Question extends Base {
	//Vars
	protected $question_data;
	protected $answer_opts;
	protected $response_pct;
	protected $question_text;
	protected $answered;
	protected $skipped;

	public function __construct(){

	}
	public function processData(array $data){
		echo 'processing data';
	}

} //ends question class