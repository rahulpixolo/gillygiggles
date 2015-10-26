jQuery(document).ready(function () {

    /***** Scroll Up *****/

    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.menu-top').addClass('menu-shrink');
        } else {
            $('.menu-top').removeClass('menu-shrink');
        }
    });

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    /********tab********/

    $(".tabclick").click(function () {
        $(".tab-pane").fadeOut();
        $("#" + $(this).attr('aria-controls')).fadeIn("slow");
        $(".activea").removeClass('activea');
        $(this).parent().addClass('activea');
    });
     $(".tabclick1").click(function () {
        $(".tab-pane1").fadeOut();
        $("#" + $(this).attr('aria-controls')).fadeIn("slow");
        $(".activea").removeClass('activea');
        $(this).parent().addClass('activea');
    });
   /* $("#freebies").show();*/
    $("#freebies").css("display", "block");
    $("#book").css("display", "block");
     $("#activity").css("display", "none");
     $("#colorpages").css("display", "none");
    /*$('#book').fadeIn();*/


    /***** Background slideshow *****/

    $('.top-content').backstretch([
      "assets/img/backgrounds/1.jpg"
    ], {
        duration: 3000,
        fade: 800
    });


    $('.video-content').backstretch([
      "assets/img/backgrounds/2.jpg"
    ], {
        duration: 3000,
        fade: 800
    });

    $('.challenges-content').backstretch([
      "assets/img/backgrounds/3.jpg"
    ], {
        duration: 3000,
        fade: 800
    });

    $('.topics-content').backstretch([
      "assets/img/backgrounds/4.jpg"
    ], {
        duration: 3000,
        fade: 800
    });

    $('.connect-content').backstretch([
      "assets/img/backgrounds/6.jpg"
    ], {
        duration: 3000,
        fade: 800
    });

    $('.testimonials-content').backstretch([
      "assets/img/backgrounds/7.jpg"
    ], {
        duration: 3000,
        fade: 800
    });


    /***** Subscription form *****/

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function (e) {
        e.preventDefault();
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function (json) {
                if (json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                } else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
    });

    /***** Contact form *****/

    /* $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function () {
         $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
     });
     $('.contact-form form').submit(function (e) {
         e.preventDefault();
         $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
         var postdata = $('.contact-form form').serialize();
         $.ajax({
             type: 'POST',
             url: 'assets/contact.php',
             data: postdata,
             dataType: 'json',
             success: function (json) {
                 if (json.emailMessage != '') {
                     $('.contact-form form .contact-email').addClass('contact-error');
                 }
                 if (json.subjectMessage != '') {
                     $('.contact-form form .contact-subject').addClass('contact-error');
                 }
                 if (json.messageMessage != '') {
                     $('.contact-form form textarea').addClass('contact-error');
                 }
                 if (json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
                     $('.contact-form form').fadeOut('fast', function () {
                         $('.contact-form').append('<p>Thanks for contacting us!</p>');
                     });
                 }
             }
         });
     });*/

    // Contact form
    var form = $('‪#main‬-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'number': $('input[name=number]').val(),
            'product': $('input[name=product]').val(),
            'message': $('‪#message‬').val()
        };
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://adenhanseo.com/mail.php', // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            },
            complete: function () {
                $('.form_status').html('<p>An Email has been sent</p>');
                $('input[name=name]').val('');
                $('input[name=email]').val('');
                $('input[name=number]').val('');
                $('input[name=product]').val('');
                $('#message').val('');
            }
        }).success(function (data) {
            console.log("success");
            $('.form_status').html('<p>Email has been sent</p>');
        });

        //help form
        var form = $('#help-contact-form');
        form.submit(function (event) {
            event.preventDefault();
            var formData = {
                'subject': $('input[name=subject]').val(),
                'message': $('#message').val()
            };
            var form_status = $('<div class="form_status"></div>');
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
                dataType: 'json',
                encode: true,

                beforeSend: function () {
                    form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
                }
            }).done(function (data) {
                form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
            });
        });
    });


});