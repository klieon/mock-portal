<?php require_once('./classes/Table.class.php'); require_once('./includes/stub.php'); ?>

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
		<p>ECB Self-Assessment Consortia Level: Multi-Language July 2011</p>
		<div class="question">
			<div id="chart1"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart2"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart3"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart4"></div>
		</div><!-- .question -->
	</div><!-- #survey1 -->

	<div class="chart" id="survey2">
		<p>ECB Self-Assessment Agency Level: 2011</p>
		<div class="question">
			<div id="chart5"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart6"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart7"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart8"></div>
		</div><!-- .question -->
	</div><!-- #survey2 -->

	<div class="chart" id="survey3">
		<p>ECB Self-Assessment Country Level: Multi-Language July 2011</p>
		<div class="question">
			<div id="chart9"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart10"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart11"></div>
		</div><!-- .question -->
		<div class="question">
			<div id="chart12"></div>
		</div><!-- .question -->
	</div><!-- #survey3 -->
</div><!-- #questions -->

<div id="all_users" class="priveleged" style="display: none;">
	all users
</div><!-- #all_users -->

<div id="raw_question_data" class="priveleged" style="display: none;">
	raw question data 
</div><!-- raw_question_data -->