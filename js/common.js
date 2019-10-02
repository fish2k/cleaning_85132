// уууу жуквери...

var headerSlider        = $('.header-advantage')
  , headerCallback      = $('.header-callback')
  , headerBurger        = $('.header-burger')
  , headerNav           = $('.header-mobileNav')
  , headerNavClose      = $('.header-mobileNav_close')
  , giftSlider          = $('.section-gift')
  , giftButton          = $('.section-circle_button')
  , giftFormTitle       = $('.formTitle')
  , giftForm            = $('.section-form')
  , giftItem            = $('.section-circle')
  , giftSelected        = $('#giftSelected')
  , testimonials        = $('.testimonial')
  , worksSlider         = $('.works')
  , telephoneField      = $('#giftFormTel')
  , telephoneField2     = $('#formTel')
  , telephoneModal      = $('#modalTel')
  , formSelect          = $('.form-select')
  , formSelectOption    = $('.form-select_option')
  , selectField         = $('.input-select')
  , selectTrigger       = $('.select')
  , certsSlider         = $('.certs')
  , pageHtml            = $('html')
  , pageBody            = $('body')
  , modalLayout         = $('.modal-block')
  , modalBlock          = $('.modal-block_wrapper')
  , modalClose          = $('.modal-block_close')
  , detailSlider        = $('.header-detail_slider')
  , clientsSlider       = $('.clients-slider')
  , animationSpeed      = 600;

telephoneField.mask('+7 (999) 999-9999');
telephoneField2.mask('+7 (999) 999-9999');
telephoneModal.mask('+7 (999) 999-9999');

$(document).ready(function () {
  detailSlider.slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
  
  testimonials.slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<div class="testimonial-prev"></div>',
    nextArrow: '<div class="testimonial-next"></div>',
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
  
  headerSlider.slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
  
  giftSlider.slick({
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
  
  worksSlider.slick({
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<div class="works-prev"></div>',
    nextArrow: '<div class="works-next"></div>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '300px'
        }
      },
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '150px'
        }
      },
      {
        breakpoint: 475,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          centerPadding: '40px'
        }
      }
    ]
  });
  
  certsSlider.slick({
    slidesToShow: 2,
    prevArrow: '<div class="certs-prev"></div>',
    nextArrow: '<div class="certs-next"></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  clientsSlider.slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  var reasonsSlider = $('.reasons-slider'),
    currentWidth = $('body').innerWidth();
    
  if (currentWidth <= 768) {
    reasonsSlider.children().removeClass('col-md-6 col-sm-12');
    reasonsSlider.slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false
    });
  } else {
    reasonsSlider.children().addClass('col-md-6 col-sm-12');
    reasonsSlider.slick('unslick');
  }
});

giftItem.on('click', function () {
  var self = $(this),
      currentBtn = self.find('.section-circle_button');

  currentBtn.triggerHandler('click');

  setTimeout(function () {
    var targetOffset = giftForm.offset().top;

    pageHtml.animate({
      scrollTop: targetOffset - 50
    }, animationSpeed);
  });
});

giftButton.on('click', function () {
  var self = $(this),
      currentGift = self.data('caption'),
      nameField = $('#giftFormName');

  // if (!giftForm.is(':visible')) {
  //   giftForm.slideDown(animationSpeed);
  // }
  
  giftFormTitle.html('Вы выбрали <span>"' + currentGift + '" в подарок</span>');

  giftItem.removeClass('active');
  giftButton.text('Выбрать подарок');
    
  self.parent().parent().addClass('active');
  self.text('Вы выбрали этот подарок');
  
  giftSelected.val(currentGift);
  giftSelected.attr('value', currentGift);

  setTimeout(function () {
    nameField.focus();
  }, animationSpeed);
});

formSelectOption.each(function () {
  var self = $(this);

  self.on('click', function () {
    var self = $(this),
        currentValue = self.data('value');

    selectField.val(currentValue);
    selectField.attr('value', currentValue);
  });
});

selectTrigger.on('click', function () {
  formSelect.slideToggle(150);
});

headerCallback.on('click', function () {
  pageBody.addClass('event-onmodal')
  modalLayout.fadeIn();

  setTimeout(function () {
    modalBlock.slideDown();
  }, animationSpeed)
});

modalClose.on('click', function () {
  modalBlock.slideUp();

  setTimeout(function () {
    pageBody.removeClass('event-onmodal');
    modalLayout.fadeOut();
  }, animationSpeed)
});

headerBurger.on('click', function () {
  headerNav.toggleClass('showmenu');
});

headerNavClose.on('click', function () {
  headerNav.removeClass('showmenu');
});