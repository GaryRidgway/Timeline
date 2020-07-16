// Accepts any number of templates.
function Events() {
    this.args = arguments;
    this.template = '\
        <div id="events" class="sticky-scroll">\
            <div class="headboard"></div>\
            <div class="event">\
                <div class="event-fret"></div>\
                <div class="event-topbox">\
                    <h2 class="event-title">Old Lephuakesh is destroyed</h2>\
                    <h3 class="event-year">Akaday the 10th of Ches in 3010</h2>\
                </div>\
            </div>\
            <div class="event">\
                <div class="event-fret"></div>\
                <div class="event-topbox">\
                    <h2 class="event-title">Tehlmar becomes the Red Revenant</h2>\
                    <h3 class="event-year">Janday the 3rd of Marpenoth in 3050</h2>\
                </div>\
            </div>\
            <div class="event">\
                <div class="event-fret"></div>\
                <div class="event-topbox">\
                    <h2 class="event-title">Aurelius is taken from Yhoria</h2>\
                    <h3 class="event-year">Akaday the 20th of Mirtul in 3046</h2>\
                </div>\
            </div>\
            <div class="event">\
                <div class="event-fret"></div>\
                <div class="event-topbox">\
                    <h2 class="event-title">Your Mom</h2>\
                    <h3 class="event-year">3052</h2>\
                </div>\
            </div>\
            <div class="event">\
                <div class="event-fret"></div>\
                <div class="event-topbox">\
                    <h2 class="event-title">Kurath Mal Hidalga is eternally bound</h2>\
                    <h3 class="event-year">Seleday the 11th of Ches in 3052</h2>\
                </div>\
            </div>\
            <div class="footboard"></div>\
        </div>\
    ';
    this.ptag = 'EVENTS';

    // This implements the other templates.
    if(this.args.length > 0) {
        for(let i = 0; i < this.args.length; i++) {
            let tmpl = this.args[i];
            if (tmpl.ptag) {
                rptag = '{{' + tmpl.ptag + '}}';
                this.template = replace_pattern_in_string(this.template, rptag, tmpl.html());
            }
        }
    }

    this.html = function() {
        return(this.template);
    }

    this.activate = function() {
        // Activate any subtemplates.
        if(this.args.length > 0) {
            for(let i = 0; i < this.args.length; i++) {
                let tmpl = this.args[i];
                tmpl.activate();
            }
        }

        // Do any code for this template.
        $('#events').scroll(function(){
            let events = $(this);
            events.removeClass('sticky-scroll');
            clearTimeout($.data(this, 'scrollTimer'));
            $('.focused').removeClass('focused');
            focus_event();
            $.data(this, 'scrollTimer', setTimeout(function() {
                events.addClass('sticky-scroll');
            }, 250));
        });

        $('#events .event').click(function() {
            let thisbar = $(this);
            $('#events').animate({
                scrollLeft: ($('#events').scrollLeft() + (thisbar.position().left - $(document).outerWidth()/2) + thisbar.outerWidth(true)/2)
            },250);
            $('.focused').removeClass('focused');
            focus_event();
        });

        // Add focus on center point.
        focus_event();
    }
}