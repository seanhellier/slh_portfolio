//default
$('.nav-link').on('click', function () {
    if (!this.classList.contains("dropdown-toggle")) {
        $('.navbar-collapse').collapse('hide');
    }
});

//dropdown
$('.dropdown-menu>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//logo-name
$('.navbrand').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});