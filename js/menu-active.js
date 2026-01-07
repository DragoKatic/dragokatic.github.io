$(document).ready(function () {
    var path = window.location.pathname.split("/").pop(); // uzima ime fajla, npr. "seo.html"

    if (path === '') {
        path = 'index.html'; // ako je root (npr. domen bez fajla)
    }

    $('.navbar-nav .nav-link').each(function () {
        var href = $(this).attr('href');

        if (href === path) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});