"use strict";

$(function () {
  console.log('Hello Bootstrap4'); // AOS

  AOS.init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 1200,
    // values from 0 to 3000, with step 50ms
    easing: 'ease',
    // default easing for AOS animations
    once: false,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  }); // Initialize Swiper

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next'
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal'
      }
    }
  }); // jQuery Datepicker

  var dateFormat = "mm/dd/yy",
      from = $("#from").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1
  }).on("change", function () {
    to.datepicker("option", "minDate", getDate(this));
  }),
      to = $("#to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1
  }).on("change", function () {
    from.datepicker("option", "maxDate", getDate(this));
  });
  from = $("#date-from").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1
  }).on("change", function () {
    to.datepicker("option", "minDate", getDate(this));
  }), to = $("#date-to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1
  }).on("change", function () {
    from.datepicker("option", "maxDate", getDate(this));
  });

  function getDate(element) {
    var date;

    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }

  $('#img-switch .small-img a').click(function (e) {
    var $imgSrc = $(this).attr('href');
    $('#img-switch .main-img img').attr('src', $imgSrc);
    return false;
  });
});
//# sourceMappingURL=all.js.map
