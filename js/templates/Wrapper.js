// Accepts any number of templates.
function Wrapper() {
    this.args = arguments;
    this.template = '\
        <div id="timeline-wrapper">\
            {{TIMELINE}}\
            {{EVENTS}}\
        </div>\
    ';
    this.ptag = 'WRAPPER';

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
        $('#timeline-wrapper').addClass('ready');

        $(window).resize(function() {
            event_padding_resize();
        });
        event_padding_resize();
    }
}