//menu animation
$('body').click(function (e) {
    if (e.target.id == 'menu-pic') {
        $('#popout-menu').show();
    } else {
        $('#popout-menu').hide();
    }
});