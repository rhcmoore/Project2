$(document).ready(function() {

    $(newEventForm).on("submit", postEvent);

    function postEvent(event){

        event.preventDefault();

        var name = $("#name").val().trim();
        var date = $("#date").val();
        var description = $("#description").val();
        var max_attendees = $("#max-attendees").val().trim();
        var communityId = $("#newEventForm").data("id");
        var communityName = $("#newEventForm").data("name");

        if (!name || !date  || !description || !max_attendees) {
            return;
         }

        var newEvent ={
            name: name,
            date: date,
            description: description,
            max_attendees: max_attendees,
            communityId: communityId
        }

        $.post("/api/community/:community/event/new", newEvent, function(data) {
            window.location.href = "/community/"+ communityName + "/event/" + name + "?eventId="+ data.id;
        });

    }

    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    $.datetimepicker.setLocale('en');
    
    $("#date").datetimepicker({
    startDate: today,
    minDate : 0,
    dayOfWeekStart : 1,
    lang: 'en',
    value: today + "0:00",
    step: 30
    });

});