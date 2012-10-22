<!-- this file will serve as the default controller -->
<div id="header">
	<div class="inner">
		<h1 id="logo">CARE</h1>
		<h2 id="title" class="heading">CARE Reporting Portal</h2>
		<ul id="loginout">
			<li id="welcome" class="priveleged">Welcome, <span>Kwame</span></li>
			<li id="loginoutbtn"><a href="#">Login</a></li>
		</ul><!-- #loginout -->
	</div><!-- .inner -->
</div><!-- #header -->

<div id="wrapper">
	<div id="sidebar">
		<div class="inner">
			<?php require_once('./includes/sidebar.php'); ?>
		</div><!-- .inner -->
	</div><!-- #sidebar -->
	<div id="body">
		<div class="inner">
			<?php require_once("./views/admin-content.php"); ?>
		</div><!-- .inner -->
	</div><!-- #body -->
</div><!-- #wrapper -->

<div id="footer">
	<div class="inner">
		footer
	</div><!-- .inner -->
</div><!-- #header -->