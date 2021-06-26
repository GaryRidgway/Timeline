// Accepts any number of templates.
function Events() {
    this.args = arguments;
    this.template = '\
        <div id="events" class="sticky-scroll">\
            <div class="headboard"></div>\
                {{EVENTS_CONTAINER}}\
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

    const params = new URLSearchParams(window.location.search);
    let events_html ='';
    if (params.has('timeline_data')) {
        let timeline_data = events_data[params.get('timeline_data')];
        console.log(timeline_data);

        timeline_data.forEach(function(element) {
            console.log('ge');
            let event = new Event(element.title, element.year, element.description);
            events_html = events_html + event.html();
        });
    }

    console.log(events_html);

    this.template = replace_pattern_in_string(this.template, '{{EVENTS_CONTAINER}}', events_html);

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