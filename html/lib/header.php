<?php

global $ch_gsettings;
//you can use $ch_gsettings to display global variables

?><!DOCTYPE html>

<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $ch_gsettings['current_page']['title']; ?></title>

  <link href="css/app.css" rel="stylesheet" />
</head>
<body style="background-image: url(img/bg-pattern.png);">

<div class="page-container">

	<header class="page-header">




		<div class="row logo-menu-wrap">
			<a href="#!" class="header-logo"><img src="img/header-logo.png" alt=""></a>

			<a href="#!" class="menu-trigger"><span></span></a>

			<div class="menu-bkg">
				<div class="menus-wrapper">

					<nav class="main-menu" role="navigation">
						<ul class="menu">
							<li>
								<a href="#!" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Über uns</a>
								<ul class="dropdown-menu sm-nowrap" aria-labelledby="dropdownMenu1" role="group" aria-hidden="true" aria-expanded="false">
									<li><a href="#!" class="dropdown-item">menu item</a></li>
									<li><a href="#!" class="dropdown-item">menu item</a></li>
									<li><a href="#!" class="dropdown-item">menu item</a></li>
									<li><a href="#!" class="dropdown-item">menu item</a></li>
								</ul>
							</li>
							<li><a href="#!">Aktivitäten</a></li>
							<li><a href="#!">Hütten</a></li>
							<li><a href="#!">Kletteranlagen</a></li>
							<li><a href="#!">Service</a></li>
							<li><a href="#!">Gruppen Stuttgart</a></li>
							<li><a href="#!">Bezirksgruppen</a></li>
						</ul>
					</nav>

					<div class="top-nav-wrapper">
						<ul class="top-nav">
							<li><a href="#!">Kontakt</a></li>
							<li><a href="#!">Login</a></li>
							<li><a href="#!">Impressum</a></li>
						</ul>
						<a href="#!" class="facebook-link"></a>
					</div>

				</div>
			</div>
		</div>

	</header><!--/.page-header-->



	<!-- BOX-FIXED-RIGHT -->
	<div class="box-fixed-right">
		<a href="#!" data-toggle="modal" data-target="#myModal" class="search-trigger"><span class="icon"></span></a>


		<div class="title-wrap">Alpin- <br>Zentrum:</div>

		<ul class="az">
			<li class="az-1">
				<span class="icon"><i></i></span>
				<span class="text">Verleih</span>
			</li>
			<li class="az-2">
				<span class="icon"><i></i></span>
				<span class="text">Hütten buchen</span>
			</li>
			<li class="az-3">
				<span class="icon"><i></i></span>
				<span class="text">Bücher Karten</span>
			</li>
			<li class="az-4">
				<span class="icon"><i></i></span>
				<span class="text">Touren Kurse</span>
			</li>
			<li class="az-5">
				<span class="icon"><i></i></span>
				<span class="text">Vorträge</span>
			</li>
		</ul>

		<div class="border-arrow"><img src="img/white-blue-line-arrow.png" alt=""></div>
	</div>


	<!-- BOX-FIXED-BOTTOM -->
	<div class="box-fixed-bottom">
		<ul>

			<li><a href="#!" class="item-1"><span class="icon"><i></i></span></a></li>
			<li><a href="#!" class="item-2"><span class="icon"><i></i></span></a></li>
			<li><a href="#!" class="item-3">
				<span class="icon"><i></i></span>
				<span class="text">Mitglied werden</span>
			</a></li>

		</ul>
	</div>





	<!-- SEARCH-POPUP -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <button type="button" class="close close-button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

				<div class="form-wrapper">
					<form action="#">
						<input type="text" id="search-input" name="search-input">
						<button type="submit" class="btn-grey" id="submit-search" name="submit-search">Suche</button>
					</form>
				</div>
	    </div>
	  </div>
	</div>