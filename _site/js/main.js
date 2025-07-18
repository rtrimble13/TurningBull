  $(document).ready(function () {
    
    $('a.blog-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
      }
    })

    if (window.location.hash && window.location.hash == '#blog') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }

    if (window.location.pathname !== '/TurningBull/' && window.location.pathname !== '/TurningBull/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .blog-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    // Email subscription functionality
    initEmailSubscription();
  })

  function initEmailSubscription() {
    // Check if user has already interacted with subscription form
    const hasInteracted = localStorage.getItem('tb-subscription-interacted');
    
    // Handle form submission
    $('#subscription-form').on('submit', function(e) {
      e.preventDefault();
      
      const form = $(this);
      const email = $('#subscription-email').val().trim();
      const submitButton = $('.email-subscription__button');
      const buttonText = $('.email-subscription__button-text');
      const buttonLoading = $('.email-subscription__button-loading');
      const successMsg = $('.email-subscription__success');
      const errorMsg = $('.email-subscription__error');
      
      // Reset messages
      successMsg.addClass('hidden');
      errorMsg.addClass('hidden');
      
      // Validate email
      if (!isValidEmail(email)) {
        showError('Please enter a valid email address.');
        return;
      }
      
      // Show loading state
      submitButton.prop('disabled', true);
      buttonText.addClass('hidden');
      buttonLoading.removeClass('hidden');
      
      // Submit to Formspree
      $.ajax({
        url: form.attr('action'),
        method: 'POST',
        data: form.serialize(),
        dataType: 'json',
        success: function(response) {
          showSuccess();
          form[0].reset();
          localStorage.setItem('tb-subscription-interacted', 'subscribed');
        },
        error: function(xhr, status, error) {
          if (xhr.status === 200) {
            // Formspree returns 200 even on success sometimes
            showSuccess();
            form[0].reset();
            localStorage.setItem('tb-subscription-interacted', 'subscribed');
          } else {
            showError('Unable to subscribe. Please try again later.');
          }
        },
        complete: function() {
          // Reset button state
          submitButton.prop('disabled', false);
          buttonText.removeClass('hidden');
          buttonLoading.addClass('hidden');
        }
      });
    });
    
    // Handle close button
    $('.email-subscription__close').on('click', function() {
      $(this).closest('.email-subscription').fadeOut();
      localStorage.setItem('tb-subscription-interacted', 'dismissed');
    });
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function showSuccess() {
      $('.email-subscription__success').removeClass('hidden');
      setTimeout(function() {
        $('.email-subscription__success').addClass('hidden');
      }, 5000);
    }
    
    function showError(message) {
      $('.email-subscription__error .error-message').text(message);
      $('.email-subscription__error').removeClass('hidden');
      setTimeout(function() {
        $('.email-subscription__error').addClass('hidden');
      }, 5000);
    }
  }
