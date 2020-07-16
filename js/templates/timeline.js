function Timeline() {
    this.args = arguments;
    this.template = '<div id="timeline"></div>';
    this.ptag = 'TIMELINE';
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
    }
}