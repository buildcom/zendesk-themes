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

  $('.top-header a.login, .section-subscribe > a.dropdown-toggle, .article-subscribe > a').addClass('btn');

  $('.breadcrumbs li').each(function(_id, _it) {
    if (typeof $(_it).find('a').get(0) == 'undefined') {
      $(_it).addClass('active');
    }
  });

  if(typeof $('.table-responsive > table').get(0) != 'undefined') {
    $('.table-responsive table').addClass('table');
  }

  $('.powered-by-zendesk').addClass('container');

  /**
  * Text swaps
  */

  $('#query').attr('placeholder','Enter a question, keyword or topic…');
  $('a.submit-a-request.btn').text('Contact EdgeStar Support');
  
  /**
  * Work around to add clearfix on home page.
  */

  var $categoryCols = $('.home-section .category-column');
  var clearFix = '<div class="clearfix"></div>';

  $.each($categoryCols, function(idx) {
    var normalizer = idx + 1;
    if (normalizer % 2 == 0) {
      $(clearFix).insertAfter($categoryCols[idx]);
    }
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