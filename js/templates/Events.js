// Accepts any number of templates.
function Events() {
    this.args = arguments;
    this.template = '\
        <div id="events" class="sticky-scroll">\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
            <div class="event"></div>\
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
            $.data(this, 'scrollTimer', setTimeout(function() {
                $('.event').removeClass('focused');
                let elem = document.elementFromPoint(window.innerWidth/2, Math.ceil($('#events').position().top + $('#events').outerHeight()/2));
                let jElem = $(elem);
                if(jElem.hasClass('event')) {
                    jElem.addClass('focused');
                }
                events.addClass('sticky-scroll');
            }, 250));
        });

        // Add focus on center point.
        let elem = document.elementFromPoint(window.innerWidth/2, Math.ceil($('#events').position().top))
        let jElem = $(elem);
        if(jElem.hasClass('event')) {
            jElem.addClass('focused');
        }

        $('#events .event').click(function() {
            let thisbar = $(this);
            $('#events').animate({
                scrollLeft: ($('#events').scrollLeft() + (thisbar.position().left - $(document).outerWidth()/2) + thisbar.outerWidth(true)/2)
            },500);
            setTimeout(function() {
                $('.event').removeClass('focused');
                let elem = document.elementFromPoint(window.innerWidth/2, Math.ceil($('#events').position().top + $('#events').outerHeight()/2));
                let jElem = $(elem);
                if(jElem.hasClass('event')) {
                    jElem.addClass('focused');
                }
            }, 501)
        });
    }
}