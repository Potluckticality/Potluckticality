$(document).ready(function(){
    $('select').material_select();
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

  $('.materialboxed').materialbox();
  
  $(".button-collapse").sideNav();

  $(".fade").hide(0).delay(500).fadeIn(3000);

  $('.bounce-up').delay(10000).addClass('animated').addClass('bounceInUp');
});
      

// function render(events) {
//     $('#all-events').html(template({events: events}));
// }

// function addEvent() {
//     fetch('/api/events/new', {
//         method: 'POST',
//         headers: {'Content-type': 'application/json'},
//         credentials: 'include',
//         body: JSON.stringify({
//             text: $('#event').val()
//         })
//     }).then(res => res.json()).then(data => render(data.events)).then({events: $('#event').val('')});
// }

// document.getElementById('even').addEventListener('click', function() {
//     $("#item").on('keypress blur', function(event) { 
//         holdValue = $('#item').val();
//         if (holdValue) {
//             if (event.keyCode === 13) {
//                 addToDo();
//             }
//         }
//     });
// });

