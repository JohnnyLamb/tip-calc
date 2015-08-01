// add scripts

$(document).on('ready', function() {


  $('#calculate').on('click', function(event){
    event.preventDefault();

    var $dollarAmount = $('#dollar-amount').val();
    var $tipPercent = $('#tip-percent').val();
    var answer = ($dollarAmount * $tipPercent).toFixed(2);

    $('#result').html(answer + " should be how much you tip.");

  });


});

