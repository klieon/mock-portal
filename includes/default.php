<!-- this file will serve as the default controller -->
<div id="header">
	<div class="inner clearfix">
		<h2 id="title" class="heading">Reports Dashboard</h2>
		<ul id="loginout">
			<li id="loginoutbtn"><a href="#">Login</a></li>
		</ul><!-- #loginout -->
	</div><!-- .inner -->
</div><!-- #header -->

<div id="wrapper" class="clearfix">
	<div id="sidebar">
		<div class="inner">
			<?php require_once('./includes/sidebar.php'); ?>
		</div><!-- .inner -->
	</div><!-- #sidebar -->
	<div id="body" class="clearfix">
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