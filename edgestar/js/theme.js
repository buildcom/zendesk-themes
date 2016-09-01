/*
  Template Name: Holess
  Version: 1.0
  Author: Allies Interactive
  Website: http://www.diziana.com/
  Corporate Website : http://www.diziana.com
  Contact: support@diziana.com
  Follow: https://www.twitter.com/dizianaEngage
  Like: https://www.facebook.com/diziana.engage
  Purchase: Diziana.com
  License: You must have a valid license purchased only from
  diziana.com in order to legally use the theme for your project.
  Copyright: Â© 2016 Allies Interactive Services Pvt. Ltd. All Rights Reserved
*/

$(function(){
  $(".dropdown-menu li a").click(function(){
    $(this).parents(".btn-group").find('.selector').text($(this).text());
    $(this).parents(".btn-group").find('.selector').val($(this).text());
  });
});

jQuery(window).load(function() { // Make sure the whole site is loaded
  'use strict'; // Background attachment fixed function
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('section , div').addClass('bg-scroll');
  }
});

$(document).ready(function() {

  // Add btn class to string of classes
  var addBtnClass = '.top-header a.login, .section-subscribe > a.dropdown-toggle, .article-subscribe > a';
  $(addBtnClass).addClass('btn');

  // In breadcrumbs, make current page use active class
  $('.breadcrumbs li').each(function(_id, _it) {
    if (typeof $(_it).find('a').get(0) == 'undefined') {
      $(_it).addClass('active');
    }
  });

  if(typeof $('.table-responsive > table').get(0) != 'undefined') {
    $('.table-responsive table').addClass('table');
  }

  /**
  * Text swaps
  */

  // Swap text for home page search
  $('#query').attr('placeholder','Search help articles...');
  // Swap text for contact form at the top of the page
  $('a.submit-a-request.btn').text('Contact EdgeStar Support');
  
  /**
  * Custom icon. Super hacky.
  * As of now, no real way to distinguish between categories other than title and category ID
  */

  // Select all home page icons
  var $allHomePageIcons = $('.home-section-icon');
  // IDs that get custom icons
  var categoryIds = [201545343, 201545403, 201545383, 201545363, 201277426, 201590623,
                     200060525, 200060185, 201276073, 201342026, 201314606, 201575926];

  // Loop over all icons
  $.each($allHomePageIcons, function(idx) {
    // Store iterators id
    var iconData = $($allHomePageIcons[idx]).data('icon');
    // Based on the ID of the icon. If iconData is found in the array
    // Add a font awesome class.
    switch (categoryIds.indexOf(iconData) > -1) {
      // FAQs - STG - PROD
      case iconData === 201545343 || iconData === 200060525:
        $(this).addClass('fa-question')
        break;
      // Installation Guide - STG - PROD
      case iconData === 201545403 || iconData === 200060185:
        $(this).addClass('fa-wrench')
        break;
      // Troubleshooting - STG - PROD
      case iconData === 201545383 || iconData === 201276073:
        $(this).addClass('fa-file-text-o')
        break;
      // Support Videos - STG - PROD
      case iconData === 201545363 || iconData === 201342026:
        $(this).addClass('fa-video-camera')
        break;
      // General Information - STG - PROD
      case iconData === 201277426 || iconData === 201314606:
        $(this).addClass('fa-pencil')
        break;
      // About EdgeStar - STG - PROD
      case iconData === 201590623 || iconData === 201575926:
        $(this).addClass('fa-info')
        break;
      // If no ID found, give topic a generic icon
      default:
        $(this).addClass('fa-comments-o')
    }
  });

  /**
  * Work around to add clearfix on home page.
  */

  var $categoryCols = $('.home-section .col-sm-4.category-column');
  var clearFix = '<div class="clearfix"></div>';

  $.each($categoryCols, function(idx) {
    var normalizer = idx + 1;
    if (normalizer % 3 === 0) {
      $(clearFix).insertAfter($categoryCols[idx]);
    }
  });

  /**
  * Work around to add clearfix on category page.
  */

  var $sectionCols = $('.section.col-xs-12.col-sm-6');
  var clearFixAndHr = '<div class="clearfix"></div><hr class="hidden-xs">';

  $.each($sectionCols, function(idx) {
    var normalizer = idx + 1;
    if (normalizer % 2 === 0) {
      $(clearFixAndHr).insertAfter($sectionCols[idx]);
    }
  });

  /**
  * Set active class on form
  */

  $('.fs-panel-heading').click(function(){
    $(this).addClass('active');
  });

  /**
  * Social share popups
  */

  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  /**
  * Toggle the share dropdown in communities
  */

  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  /**
  * Click Events
  */

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  /**
  * Show form controls when the textarea receives focus or backbutton is used and value exists
  */
  var $answerbodyTextarea = $(".answer-body textarea"),
      $answerFormControls = $(".answer-form-controls"),
      $commentContainerTextarea = $(".comment-container textarea"),
      $commentContainerFormControls = $(".comment-form-controls");

  $answerbodyTextarea.one("focus", function() {
    $answerFormControls.show();
  });

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  if ($answerbodyTextarea.val() !== "") {
    $answerFormControls.show();
  }

  /**
  * Submit requests filter form in the request list page
  */

  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  /**
  * Submit requests filter form in the request list page
  */

  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  /**
  * Submit organization form in the request page
  */

  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  var x= new Date();
  var y= x.getFullYear();
  $('#year').html(y);
    
});