<h1 id="logo">CARE</h1>

<div class="priveleged">
	<p id="welcome">Welcome, <span>Kwame</span></p>
	<p id="select_survey">Please Select a Report:</p>
<!--	
	<form id="survey_selection" class="jqtransform clearfix" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<select>
			<option value="#survey1">Consortium Self-Assessment Survey</option>
			<option value="#survey2">HQ Self-Assessment Survey</option>
			<option value="#survey3">Agency HQ Self-Assessment</option>
		</select>
	</form>
	-->
	<div id="box20">
	<form name="org_selection" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<!-- country combobox -->
		<span><p>Organization:<select id="country" name="country">
		<option value="1" selected>Org 1</option>
		<option value="2">Org 2</option>
		<option value="3">CareOrg</option>
		<option value="4">Org 4</option>
		</select><br></p></span>
		<!-- state combobox is chained by country combobox-->
		<span><p>Country:<select name="state" id="state" style="display:none"></select><br></p></span>
		<!-- city combobox is chained by state combobox-->
		<span><p>Branch:<select name="city" id="city" style="display:none"></select><br></p></span>
		<!-- report combobox is chained by state combobox-->
		<select multiple="multiple" name="report" id="report" style="display:none"></select> <input value="View Report" type="button" id="link" name="link" style="display:none"><br>
	</form>
	</div>
	<!-- place for sidebar org drop down -->
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