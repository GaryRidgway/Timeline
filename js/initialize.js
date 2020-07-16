$(document).ready(function() {
    var wrapper = new Wrapper(new Timeline(), new Events());
    $('body').html(
        wrapper.html()
    );
    wrapper.activate();
});