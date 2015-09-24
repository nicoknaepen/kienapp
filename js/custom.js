(function ($) {
  $(document).ready(function(){ 
    // --------------
    // prepare events
    // --------------
    // click add new family member button
    $('.numbers > .col-md-1').click(function() {
      if ($(this).hasClass('empty')) {
        $('.selected').addClass('listed').removeClass('selected');
//        $('.numbers > .col-md-1').removeClass('selected');
        $(this).removeClass('empty');
        $(this).addClass('selected');
      }
      else if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).addClass('listed');
      }
      else if ($(this).hasClass('listed')) {
        $(this).removeClass('listed');
        $(this).addClass('empty');
      }
      else {
        $('.selected').addClass('listed').removeClass('selected');
        //$('.numbers > .col-md-1').removeClass('.selected');
        $(this).addClass('selected');
      }
      return false;
    });  
    $('.btn-empty-board').click(function() {
      if (confirm('Wil u het bord leeg maken?')) {
        $('.numbers > .col-md-1').removeClass('listed');
        $('.numbers > .col-md-1').removeClass('selected');
        $('.numbers > .col-md-1').removeClass('empty');
        $('.numbers > .col-md-1').addClass('empty');
      }
    });
    $('button.scaler').click(function() {
      $('body').attr('class', $(this).attr('data-class'));
    });
    // click edit family member link
  });
})(jQuery);
