$('.navbar-nav>li>a').on('click', function () {
    if (!this.classList.contains("dropdown-toggle")) {
        $('.navbar-collapse').collapse('hide');
    }
});

$('.navbar-nav>li>div>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('.navbar>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});