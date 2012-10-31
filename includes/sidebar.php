<h1 id="logo">CARE</h1>

<div class="priveleged">
	<p id="welcome">Welcome, <span>Kwame</span></p>
	<p id="select_survey">Please Select a survey:</p>
	<form id="survey_selection" class="jqtransform clearfix" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<select>
			<option value="#survey1">Consortium Self-Assessment Survey</option>
			<option value="#survey2">HQ Self-Assessment Survey</option>
			<option value="#survey3">Agency HQ Self-Assessment</option>
		</select>
	</form>
	<p>Stats &amp; Settings</p>
	<ul id="admin_controls">
		<li class="user"><a href="all_users">All Users</a></li>
	</ul><!-- #admin-controls -->
	<ul id="stats" class="stripes">
		<li class="excel"><a href="raw_question_data">Raw Question Data</a></li>
		<li>Invited / Completed: <span>1500 / 1248</span></li>
		<li>Survey Status: <span>Active</span></li>
		<li>Start Date / End Date <span>10-3 / 10-25</span></li>
	</ul><!-- #stats -->
</div><!-- .priveleged -->