$(document).ready(function () {
    /*MODALBOX*/
    $('body').on('click', '.open-modal', function () {
        var modalBtn = $(this).data('target');
        $('#' + modalBtn).fadeIn(350);
        $('#' + modalBtn).find('.modalbox').fadeIn(300);
        $('body').addClass('notflow');
    });

    $('body').on('click', '.modalbox .dismiss', function () {
        $('.modal-wrap').fadeOut(200);
        $('.modal-wrap .modalbox').fadeOut(200);
        $('body').removeClass('notflow');
    });

    /*inputfile*/
    $('body').on('click', '.upload_file', function () {
        $(this).children('input[type="file"]').change(function () {
            if (this.value.match(/[^\\\/]+$/, '') != null) {
                var filename = this.value.match(/[^\\\/]+$/, '')[0];
                $(this).next('.file-name').html(filename);
            }
            else
                $(this).next('.file-name').html('');
        });
    });

    /*Tabs*/
    $('body').on('click', '.tabs .anchor', function () {
        var tab = $(this).data('tab');

        $(this).addClass('is-active');
        $(this).siblings().removeClass('is-active');

        if ($(this).hasClass('is-active')) {
            $('#' + tab).addClass('is-active');
            $('#' + tab).siblings().removeClass('is-active');
        }
    });

    $('body').on('click', '.tabs-anchors a', function () {
        var tabAnchors = $(this).data('tab');

        //active content
        $('.tab-content div').removeClass('is-active');
        $('#' + tabAnchors).addClass('is-active');

        if ($(this).is('#nextBtn')) {
            $('.tabs .is-active').next('li').addClass('is-active');
            $('.tabs .is-active').prev('li').removeClass('is-active');
        }
        else if ($(this).is('#prevBtn')) {
            $('.tabs .is-active').prev('li').addClass('is-active');
            $('.tabs .is-active').next('li').removeClass();
        }
    });

    /*Accordion*/
    $('body').on('click', '.colpase-all-btn', function () {
        var showList = $(this).data('show');

        if ($(this).hasClass('show')) {

            $(this).removeClass('show');

            $('#' + showList + ' ' + 'header').addClass('is-active');
            $('#' + showList + ' ' + '.collapsible').show()

        } else {

            $(this).addClass('show');

            $('#' + showList + ' ' + 'header').removeClass('is-active');
            $('#' + showList + ' ' + '.collapsible').hide()
        }

    });

    $('body').on('click', '.item-list > header', function () {

        $(this).next('.collapsible').slideToggle(150);

        // var next_title = $(this).parent().siblings().children();
        // var next_element = $(this).parent().siblings().children().next();              

        // if(next_title.hasClass('is-active')){

        //     next_title.removeClass('is-active');
        //     next_element.slideUp(250)

        // } 
        if ($(this).hasClass('is-active')) {

            $(this).removeClass('is-active');

        } else {
            $(this).addClass('is-active');
        }
    });

    // Tablet-Mobile Navigation
    $('body').on('click', '#nav-opt', function () {
        $('#main-nav #tm-nav').slideToggle(100);
    });

    //tooglebtn
    $('body').on('click', '.tooglebtn', function () {
        $(this).children('.drop').slideToggle(100);
    });

    $(document).mouseup(function (e) {
        var $dropdown = $(".tooglebtn .drop");

        if (
            e.target.className !== $dropdown &&
            !$(e.target).parents(".tooglebtn").length
        ) {
            $dropdown.css("display", "none");
        }
    });
});