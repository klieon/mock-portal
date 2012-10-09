<?php require_once('Question.class.php');

class Table extends Question {
	private $table;
	private $table_body_data;
	private static $count = 0;

	public function __construct($question_data){
		echo '<h1>Im a new table object</h1>';
		$this->question_data = $question_data;
		self::$count++;
	}
	public function setTableBodyData(array $data){
		$this->table_body_data = $data;
	}
	public function tableHeader($width=100, $cellpadding=0, $border=0, $colspan=0, $id='table', $unit = '%'){
		$this->table = '<table width="'
										.$width.$unit.'" 
						  cellpadding="'.$cellpadding.'" 
						  border="'     .$border.'" 
						  colspan="'    .$colspan.'" 
						  id="'         .$id.self::$count.'" >';
	}
	public function tableBody($table_body_data = array()){
		$this->table .= (count($table_body_data) == 1) ? $table_body_data[0] : $this->processData($table_body_data);
	}
	public function tableFooter($tfooter = '<tr><td>Im the table footer</td></tr></table>'){
		$this->table .= $tfooter;	
	}
	public function fetchTable(){
		return $this->table;
	}
} //ends Table object