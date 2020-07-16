// Takes a string, a replacement pattern, and the replacement value to insert in place of the replacement pattern.
function replace_pattern_in_string(STRING, PATTERN, VALUE) {
  let regex_pattern = new RegExp(PATTERN, "g");
  return STRING.replace(regex_pattern, VALUE);
}

// Focuses the center event.
function focus_event() {
  let elem = document.elementFromPoint(window.innerWidth/2, Math.ceil($('#events').position().top + $('#events').outerHeight()/2));
  let jElem = $(elem);
  if(jElem.parent().hasClass('event')) {
      jElem.parent().addClass('focused');
  }
}

// Resizes padding on events.
function event_padding_resize() {
  let events_padding = ($('#timeline-wrapper').height()-$('#events').height())/2;
  
  $('#events').css('padding', events_padding + 'px 0px');
}