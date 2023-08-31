$(window).on('load', function () {
    $(".gate-left").addClass("left");
    $(".gate-logo").addClass("center");
    $(".gate-right").addClass("right");
    $('.gate-overlay').addClass('hide');
    setTimeout(function() { 
      $('.gate-wrap').addClass('hide');
    }, 2000);
});

$(window).on('load', function () {
  setTimeout(function() { 
    $(".nft-img").removeClass("skeleton");
    $(".nft-text-title").removeClass("skeleton");
    $(".nft-text-num").removeClass("skeleton");
    $(".nft-btn").removeClass("skeleton");
  }, 2000);
});

$('.item-buy').on('click', function (e) {
    $('.banner-btn').addClass('hover');
});

$('.banner').on('click', function (e) {
    $('.banner-btn').removeClass('hover');
});

$('.anim_to').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $('html, body').dequeue().stop().animate({scrollTop: $($this.attr('href')).offset().top - 40}, 1000);
});

$(document).ready(function () {
    $(".mobile-btn").click(function () {
        $(".mobile").fadeToggle(200);
    });
});
$('.mobile_overlay, .overlay').on('click', function () {
    $(".mobile").fadeToggle(200);
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$('.road-map-slider').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear'
});

$(document).ready(function () {
    var this1 = $(this);
    //var form_data = $(this).serialize();
    var $callback = $(".comming-soon-wrap");
    var $thanx = $(".thanx");
    $("#cb-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Enter email",
                email: "Incorrect email"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "mail.php",
                //data: form_data,
                data: $('#cb-form').serialize(),
                success: function () {
                    $callback.hide();
                    $thanx.show();
                    $('#cb-form')[0].reset();
                    setTimeout(function () {
                        $.fancybox.close();
                    }, 3000);
                    setTimeout(function () {
                        $callback.show();
                        $thanx.hide();
                    }, 3300);
                }
            });
            return false;
        }
    });
});