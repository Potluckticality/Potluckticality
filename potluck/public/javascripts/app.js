var template;
var isEditing = false;
var holdValue = '';

$.get('/api/events', function(data) {
    template = _.template($('#user-template').html());
    render(data);
});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

function render(events) {
    $('#all-events').html(template({events: events}));
}

function addEvent() {
    fetch('/api/events/new', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            text: $('#event').val()
        })
    }).then(res => res.json()).then(data => render(data.events)).then({events: $('#event').val('')});
}

