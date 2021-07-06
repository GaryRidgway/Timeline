// Accepts any number of templates.
function Event(title, year, description, eventNO) {
    this.template = '\
        <div id="event-' + eventNO +'"class="event">\
            <div class="event-fret"></div>\
            <div class="event-topbox">\
                <h2 class="event-title">' + title + '</h2>\
                <h3 class="event-year">' + year + '</h2>\
                <p>' + description + '</p>\
            </div>\
        </div>\
    ';

    this.html = function() {
        return(this.template);
    }
}
