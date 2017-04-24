(function (document, window , $) {
  	$(document).ready(function() {
  		
  		function activeTab(obj){
  			// Xóa class active tất cả các tab
  			$('.tab-wrap a').removeClass('active');
  			// thêm class active vào class đang click
  			$(obj).addClass('active');
  		}
  		// sự kiện click đổi tab
  		$('.tab-wrap a').click(function(){
  			activeTab(this);
  			return false;
  		});
  		//active tab đầu tiên khi web đc chạy
  		activeTab($('.tab-wrap a:first-child'));
  		//hiện nội tab đầu tiên khi web đc chạy
  		$(".tab-item").hide();
		$(".tab-item:first").show();
  		
		$(".tab-wrap a").click(function() {
			$(".tab-item").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});

    $('.bestsellers').slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 6,
              slidesToScroll: 6,
              prevArrow: '.bestsellers-wrap .prev',
              nextArrow: '.bestsellers-wrap .next',
              responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                  }
                },
              {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                     infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                }
              ]
            });
    var fixMenu = $(".nav-fixed");
    var goTop = $(".go-top");
    $(window).scroll(function(){
        if($(this).scrollTop() < 70){
            fixMenu.hide();
        }
        else{
          fixMenu.show();
        }
    });
     $(window).scroll(function(){
        if($(this).scrollTop() < 500){
            goTop.hide();
        }
        else{
          goTop.show();
        }
    });
    $('.cart-mobile-item').on('click', function(event) {
      event.preventDefault();
        $('.menu-mobile-wrap').slideDown();
    });
    $('.times').on('click', function() {
      $('.menu-mobile-wrap').slideUp();
    });
    $('.menu-li').on('click', function(event) {
      event.preventDefault();
        if($(this).hasClass('active')){
             $(this).children('.sub-menu').slideUp();
             $(this).removeClass('active')
        }
        else{
          $('.sub-menu').slideUp();
          $(this).children('.sub-menu').slideDown();
          $('.menu-li').removeClass('active');
          $(this).addClass('active');

        }
    });
  });
})( document, window, jQuery);