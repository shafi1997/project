$(document).ready(function () {
            $(window).scroll(function () {
            $(".cl1").toggleClass("cl2", $(this).scrollTop() > 100)
        });
    });

    if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};




$(document).ready(function() {
     
		    $(".active").click(function() {
		       $(".search-box").toggle();
		       $("input[type='text']").focus();
		     });
 
 		});