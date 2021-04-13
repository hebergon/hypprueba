$(document).ready(function(){
    $(window).load(function(){
        var $grid = $('.grid').isotope({
            itemSelector : '.grid-item',
            layoutMode : 'fitRows'
        });
        
        // store filter for each group
        var filters = {};
        
        
        $('.filters').on( 'click', '.button', function( event ) {
            var $button = $( event.currentTarget );
            // get group key
            var $buttonGroup = $button.parents('.button-group');
            var filterGroup = $buttonGroup.attr('data-filter-group');
            // set filter for group
            filters[ filterGroup ] = $button.attr('data-filter');
            // combine filters
            var filterValue = concatValues( filters );
            // set filter for Isotope
            $grid.isotope({ filter: filterValue });
        });
        
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function( event ) {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            var $button = $( event.currentTarget );
            $button.addClass('is-checked');
            });
        });
            
        // flatten object by concatting values
        function concatValues( obj ) {
            var value = '';
            for ( var prop in obj ) {
            value += obj[ prop ];
            }
            return value;
        }
    });
    //banner
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoHeight:true
    });
    //Lo más nuevo
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
$('.dropdown-toggle').click(function () {
    $(this).next('.dropdown-menu').slideToggle(300);
});

$('.dropdown-toggle').focusout(function () {
    $(this).next('.dropdown-menu').slideUp(600);
});
