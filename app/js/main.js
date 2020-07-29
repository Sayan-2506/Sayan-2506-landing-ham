$(function(){


  $('.tiger1').on('click', function(){
    $('.tiger1').toggleClass('active')
  });
  $('.tiger2').on('click', function(){
    $('.tiger2').toggleClass('active')
  });
  $('.tiger3').on('click', function(){
    $('.tiger3').toggleClass('active')
  });
  $('.tiger4').on('click', function(){
    $('.tiger4').toggleClass('active')
  });
  $('.tiger5').on('click', function(){
    $('.tiger5').toggleClass('active')
  });
  $('.tiger6').on('click', function(){
    $('.tiger6').toggleClass('active')
  });
  $('.tiger7').on('click', function(){
    $('.tiger7').toggleClass('active')
  });
  $('.tiger8').on('click', function(){
    $('.tiger8').toggleClass('active')
  });
  $('.tiger9').on('click', function(){
    $('.tiger9').toggleClass('active')
  });
  $('.tiger10').on('click', function(){
    $('.tiger10').toggleClass('active')
  });
  $('.tiger11').on('click', function(){
    $('.tiger11').toggleClass('active')
  });
  $('.tiger12').on('click', function(){
    $('.tiger12').toggleClass('active')
  });
  
    $(".say__inner").slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
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

        $('.menu__btn').on('click', function(){
          $('.menu_list').slideToggle()
        });
    

    var mixer = mixitup('.amazing__inner-box');
    
});