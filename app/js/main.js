$(function(){

    $(".say__inner").slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
    });


    $('.services__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.services__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.services__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });


        $('.footer-btn-list').on('twoclick', function(){
          $('.footer-btn-list').removeClass('active');
        });
    

    var mixer = mixitup('.amazing__inner-box');
    
});