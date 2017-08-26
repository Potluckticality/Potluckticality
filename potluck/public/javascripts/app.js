var template;
var isEditing = false;
var holdValue = '';

// $.get('/api/events', function(data) {
//     template = _.template($('#user-template').html());
//     render(data);
// });

$(document).ready(function(){
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

