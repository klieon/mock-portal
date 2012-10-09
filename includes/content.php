<?php require_once('Table.class.php'); require_once('stub.php'); ?>

<form id="login">
	<input type="text" placeholder="Username" name="username" id="username">
	<input type="password" placeholder="Password" name="password" id="password">
	<input type="submit" value="Login">
</form>

<p class="error">
	Your username / password is incorrect. Please try again.
</p>

<div id="questions" style="width: 100%;">
	<div class="chart" id="survey1">
		<p>Survey 1</p>
		<div class="question">
			<p>1. Name of agency?</p>
			<div id="chart1"></div>
			<?php 
				$table = new Table($question_data);  
				$table->tableHeader();
				$table->tableBody(array('<tr><td>Im the table body</td></tr>'));
				$table->tableFooter();
				echo $table->fetchTable();
			?>
		</div><!-- .question -->
		<div class="question">
			<p>2. Consortium country / region?</p>
			<div id="chart2"></div>
		</div><!-- .question -->
		<div class="question">
			<p>3. Name of organisational department or division completing the survey (e.g. Emergency Dep't, Risk Reduction Dep't, etc.)</p>
			<div id="chart3"></div>
		</div><!-- .question -->
		<div class="question">
			<p>4. Number of staff participating in the survey.</p>
			<div id="chart4"></div>
		</div><!-- .question -->
	</div><!-- #survey1 -->

	<div class="chart" id="survey2">
		<p>Survey 2</p>
		<div class="question">
			<p>1. Name of agency?</p>
			<div id="chart5"></div>
		</div><!-- .question -->
		<div class="question">
			<p>2. Consortium country / region?</p>
			<div id="chart6"></div>
		</div><!-- .question -->
		<div class="question">
			<p>3. Name of organisational department or division completing the survey (e.g. Emergency Dep't, Risk Reduction Dep't, etc.)</p>
			<div id="chart7"></div>
		</div><!-- .question -->
		<div class="question">
			<p>4. Number of staff participating in the survey.</p>
			<div id="chart8"></div>
		</div><!-- .question -->
	</div><!-- #survey2 -->

	<div class="chart" id="survey3">
		<p>Survey 3</p>
		<div class="question">
			<p>1. Name of agency?</p>
			<div id="chart9"></div>
		</div><!-- .question -->
		<div class="question">
			<p>2. Consortium country / region?</p>
			<div id="chart10"></div>
		</div><!-- .question -->
		<div class="question">
			<p>3. Name of organisational department or division completing the survey (e.g. Emergency Dep't, Risk Reduction Dep't, etc.)</p>
			<div id="chart11"></div>
		</div><!-- .question -->
		<div class="question">
			<p>4. Number of staff participating in the survey.</p>
			<div id="chart12"></div>
		</div><!-- .question -->
	</div><!-- #survey3 -->
</div>