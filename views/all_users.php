<div id="all_users" class="priveleged" style="display: none;">
	<div id="acl_controls">
		<form action="" method="post">
			<p><input type="text" placeholder="name" name="name"></p>
			<p><input type="text" placeholder="email" name="email"></p>
			<p><span>Active <input type="radio" name="group1" value="active" checked></span><span> Non-Active<input type="radio" name="group1" value="nonactive"></span></p>
		</form>
		<ul id="user_controls">
			<li id="update"><input type="submit" name="update" value="update"></li>
			<li id="deactivate"><input type="submit" name="deactivate" value="deactivate"></li>
			<li id="delete"><input type="submit" name="delete" value="delete"></li>
		</ul><!-- #user_controls -->
		<div id="success">
			<h1>Your changes have been submitted.</h1>
			<p>Thank  you. You may now carry on.</p>
		</div><!-- #success -->
	</div><!-- #acl_controls -->
	<a class="acl_controls" href="acl_controls">Make Changes</a>
</div><!-- #all_users -->
