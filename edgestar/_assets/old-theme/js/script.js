/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  //Added by JF 06/21/16
  $('#query').attr('placeholder','Enter a question, keyword or topic....');
  
  //Added by JF 05/02/16
  $("a:contains('Submit a request')").text('Contact EdgeStar Support');
  //End Add by JF 05/02/16
  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });

});
