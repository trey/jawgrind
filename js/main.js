$('section[data-type="background"]').each(function() {
    var $t = $(this);
    $(window).scroll(function() {
        var y = -($(window).scrollTop() / $t.data('speed'));
        var coords = '50% ' + y + 'px';
        $t.css({ backgroundPosition: coords });
    });
});