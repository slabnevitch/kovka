$(function () {
    $('input, textarea').placeholder();
});
$(document).ready(function () {
    $('#countdown_dashboard_1').countDown({
        targetDate: {
            'day': 01,
            'month': 08,
            'year': 2016,
            'hour': 23,
            'min': 59,
            'sec': 15
        }
    });
    $('#countdown_dashboard_2').countDown({
        targetDate: {
            'day': 15,
            'month': 09,
            'year': 2016,
            'hour': 17,
            'min': 34,
            'sec': 15
        }
    });
    $('#countdown_dashboard_3').countDown({
        targetDate: {
            'day': 15,
            'month': 09,
            'year': 2016,
            'hour': 17,
            'min': 34,
            'sec': 15
        }
    });

    var currentPosition = 0;
    var slideWidth = 1050;
    var slides = $('.slide');
    var numberOfSlides = slides.length;

    // Remove scrollbar in JS
    $('#slidesContainer').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
    .css({
        'float': 'left',
        'width': slideWidth
    });
    // Set #slideInner width equal to total width of all slides
    ///$('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshow')
    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .append('<span class="control" id="rightControl">Clicking moves right</span>');

    // Hide left arrow control on first load
    manageControls(currentPosition);

    // Create event listeners for .controls clicks
    $('.control').bind('click', function () {
        if ($(this).hasClass("entable")) {
            // Determine new position
            currentPosition = ($(this).attr('id') == 'rightControl') ? currentPosition + 1 : currentPosition - 1;

            // Hide / show controls
            manageControls(currentPosition);
            // Move slideInner using margin-left
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        };
    });

    // manageControls: Hides and Shows controls depending on currentPosition
    function manageControls(position) {
        // Hide left arrow if position is first slide
        if (position == 0) {
            $('#leftControl').removeClass("entable");
        } else {
            $('#leftControl').addClass("entable");
        }
        // Hide right arrow if position is last slide
        if (position == numberOfSlides - 1) {
            $('#rightControl').removeClass("entable");
        } else {
            $('#rightControl').addClass("entable");
        }
    }
    var currentPositionAkciy = 0;
    var slideWidthAkciy = 235;
    var slidesAkciy = $('.slideAkciy');
    var numberOfSlidesAkciy = slidesAkciy.length;

    // Remove scrollbar in JS
    $('#slidesContainerAkciy').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slidesAkciy
    .wrapAll('<div id="slideInnerAkciy"></div>')
    // Float left to display horizontally, readjust .slides width
    .css({
        'float': 'left',
        'text-align': 'center',
        'width': slideWidthAkciy
    });
    // Set #slideInner width equal to total width of all slides
    ///$('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshowAkciy')
    .prepend('<span class="controlAkciy" id="leftControlAkciy">Clicking moves left</span>')
    .append('<span class="controlAkciy" id="rightControlAkciy">Clicking moves right</span>');
    

    // Hide left arrow control on first load
    manageControlsAkciy(currentPositionAkciy);
    $("#slideInnerAkciy img").css("opacity","0");
    $("#slideInnerAkciy .slideAkciy:eq(0) img").css("opacity","1");

    function slidemove(){
        if (currentPositionAkciy<numberOfSlidesAkciy-1)
            currentPositionAkciy++;
        else 
            currentPositionAkciy=0;
        manageControlsAkciy(currentPositionAkciy);
        $('#slideInnerAkciy').css({
            'marginLeft': slideWidthAkciy * (-currentPositionAkciy)
        });

        $("#slideInnerAkciy img").css("opacity","0");
        var opesity = $("#slideInnerAkciy").css("marginLeft");
        if (opesity !== undefined){
            opesity = (opesity.substring(0, opesity.length - 2)*(-1))/slideWidthAkciy;
            $("#slideInnerAkciy .slideAkciy:eq("+currentPositionAkciy+") img").css("opacity","1");
        }

        
    }
setInterval(slidemove, 5000);//время за которое меняються  слайды/ 1с = 1000



    // Create event listeners for .controls clicks
    $('.controlAkciy').bind('click', function () {
        if ($(this).hasClass("entable")) {
            // Determine new position
            currentPositionAkciy = ($(this).attr('id') == 'rightControlAkciy') ? currentPositionAkciy + 1 : currentPositionAkciy - 1;

            // Hide / show controls
            manageControlsAkciy(currentPositionAkciy);
            // Move slideInner using margin-left
            $('#slideInnerAkciy').css({
                'marginLeft': slideWidthAkciy * (-currentPositionAkciy)
            });
            
            $("#slideInnerAkciy img").css("opacity","0");
            var opesity = $("#slideInnerAkciy").css("marginLeft");
			if (opesity !== undefined) {
                opesity = (opesity.substring(0, opesity.length - 2)*(-1))/300;
                $("#slideInnerAkciy .slideAkciy:eq("+currentPositionAkciy+") img").css("opacity","1");
            }


        };
    });

    // manageControls: Hides and Shows controls depending on currentPositionAkciy
    function manageControlsAkciy(position) {
        // Hide left arrow if position is first slide
        if (position == 0) {
            $('#leftControlAkciy').removeClass("entable");
        } else {
            $('#leftControlAkciy').addClass("entable");
        }
        // Hide right arrow if position is last slide
        if (position == numberOfSlidesAkciy - 1) {
            $('#rightControlAkciy').removeClass("entable");
        } else {
            $('#rightControlAkciy').addClass("entable");
        }
    }

    var currentPositionAkciy2 = 0;
    var slideWidthAkciy2 = 235;
    var slidesAkciy2 = $('.slideAkciy2');
    var numberOfSlidesAkciy2 = slidesAkciy2.length;

    // Remove scrollbar in JS
    $('#slidesContainerAkciy2').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slidesAkciy2
    .wrapAll('<div id="slideInnerAkciy2"></div>')
    // Float left to display horizontally, readjust .slides width
    .css({
        'float': 'left',
        'text-align': 'center',
        'width': slideWidthAkciy2
    });
    // Set #slideInner width equal to total width of all slides
    ///$('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshowAkciy2')
    .prepend('<span class="controlAkciy2" id="leftControlAkciy2">Clicking moves left</span>')
    .append('<span class="controlAkciy2" id="rightControlAkciy2">Clicking moves right</span>');


    // Hide left arrow control on first load
    manageControlsAkciy2(currentPositionAkciy2);
    $("#slideInnerAkciy2 img").css("opacity","0");
    $("#slideInnerAkciy2 .slideAkciy2:eq(0) img").css("opacity","1");

    function slidemove2(){
        if (currentPositionAkciy2<numberOfSlidesAkciy2-1)
            currentPositionAkciy2++;
        else 
            currentPositionAkciy2=0;
        manageControlsAkciy2(currentPositionAkciy2);
        $('#slideInnerAkciy2').css({
            'marginLeft': slideWidthAkciy2 * (-currentPositionAkciy2)
        });

        $("#slideInnerAkciy2 img").css("opacity","0");
        var opesity = $("#slideInnerAkciy2").css("marginLeft");
        if (opesity !== undefined) {
            opesity = (opesity.substring(0, opesity.length - 2)*(-1))/slideWidthAkciy2;
            $("#slideInnerAkciy2 .slideAkciy2:eq("+currentPositionAkciy2+") img").css("opacity","1");
        }


    }
setInterval(slidemove2, 5000);//время за которое меняються  слайды/ 1с = 1000



    // Create event listeners for .controls clicks
    $('.controlAkciy2').bind('click', function () {
        if ($(this).hasClass("entable")) {
            // Determine new position
            currentPositionAkciy2 = ($(this).attr('id') == 'rightControlAkciy2') ? currentPositionAkciy2 + 1 : currentPositionAkciy2 - 1;

            // Hide / show controls
            manageControlsAkciy2(currentPositionAkciy2);
            // Move slideInner using margin-left
            $('#slideInnerAkciy2').css({
                'marginLeft': slideWidthAkciy2 * (-currentPositionAkciy2)
            });

            $("#slideInnerAkciy2 img").css("opacity","0");
            var opesity = $("#slideInnerAkciy2").css("marginLeft");
            opesity = (opesity.substring(0, opesity.length - 2)*(-1))/300;
            $("#slideInnerAkciy2 .slideAkciy2:eq("+currentPositionAkciy2+") img").css("opacity","1");

        };
    });

    // manageControls: Hides and Shows controls depending on currentPositionAkciy2
    function manageControlsAkciy2(position) {
        // Hide left arrow if position is first slide
        if (position == 0) {
            $('#leftControlAkciy2').removeClass("entable");
        } else {
            $('#leftControlAkciy2').addClass("entable");
        }
        // Hide right arrow if position is last slide
        if (position == numberOfSlidesAkciy2 - 1) {
            $('#rightControlAkciy2').removeClass("entable");
        } else {
            $('#rightControlAkciy2').addClass("entable");
        }
    }


    /**/

    google_maps(); // Load google maps onload page

    function google_maps() {
        var latlng = new google.maps.LatLng(55.646677, 38.004717);
        var settings = {
            zoom: 15,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("g_maps"), settings);

        var zhks = new google.maps.LatLng(55.646677, 38.004717);
        var iconBase = 'http://profi-kovka.ru/img/';
        var marker = new google.maps.Marker({
            position: zhks,
            map: map,
            icon: iconBase + 'marker.png'
        });
    }


    var slider = $('.bxslider').bxSlider({
        mode: 'horizontal', 
        speed: 1000, 
        autoStart: true, 
        infiniteLoop: true
    });

    $('.soty3 a').click(function (event) {
        $.loaddata = $(this).data('cat');
        $.loadtitle = $(this).data('title');
        $('#cells h2').html($.loadtitle);

        

        $.ajax({
            type: "POST",
            url: "getfile.php",
            data: {cat: $.loaddata},
            success: function(data){
                //console.log(data)
                $("#cells .bxslider").html(data);
                slider.reloadSlider({mode: 'horizontal', speed: 1000, autoStart: true, infiniteLoop: true});
            }
        });

        
    });



    setInterval('header_timer();', 2750);



});
$.times = 1;
function header_timer() {
    $('header').css({
        'background': 'url(img/bg/' + $.times + '.jpg)',
        'background-size': 'cover'
    });
    $.times = $.times + 1;
    if ($.times > 4) {
        $.times = 4
    }
}