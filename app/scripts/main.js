/* jshint devel:true */
$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

function setClass(el, className, present) {
  $(el)[present ? 'addClass' : 'removeClass'](className);
}

function isPhone() {
  return $(window).width() <= 420;
}

function goto(id, offset) {
  offset = offset || isPhone() ? -80 : -50
  $.scrollTo(id, 500, {offset: offset, easing: 'swing'});
}

// Initialize scrolling behaviors
$(function() {
  $(window).scroll(function updateBodyClasses() {
    var h = $(window).height() - 110;
    setClass('body', 'scrolling', window.scrollY >= h);

    if (window.scrollY < h / 2 && !isPhone()) {
      console.log(h);
      $('header').css('background-position-y', (window.scrollY / 10) * -1);
    }
  }).scroll();

  $(".fancybox").fancybox({scrolling: 'yes'});
});



