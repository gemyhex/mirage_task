let slideStart = 1,
  slideNxt = 2;
$("document").ready(function () {
  $(".slider > div#1").fadeIn(500);
  startSlider();

  $(".slider .left").on("click", function () {
    newSlide = slideStart - 1;
    showSlide(newSlide);
  });
  $(".slider .right").on("click", function () {
    newSlide = slideStart + 1;
    showSlide(newSlide);
  });
});

function startSlider() {
  count = $(".slider > div").length;
  loop = setInterval(() => {
    if (slideNxt > count) {
      slideNxt = 1;
      slideStart = 1;
    }
    $(".slider > div").fadeOut(300);
    $(".slider > div#" + slideNxt).fadeIn(300);

    slideStart = slideNxt;
    slideNxt = slideNxt + 1;
  }, 8000);
}

function showSlide(id) {
  if (id > count) {
    id = 1;
  } else if (id < 1) {
    id = count;
  }
  $(".slider > div").fadeOut(300);
  $(".slider > div#" + id).fadeIn(300);
  slideStart = id;
  slideNxt = id + 1;
  startSlider();
}

function stopSlider(){
    window.clearInterval(loop);
}

$(".slider > div").hover(function(){
    stopSlider()
}, function(){
    startSlider()
});