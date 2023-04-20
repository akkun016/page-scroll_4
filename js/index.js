$(function () {
  const section = $(".section-block");
  const nav = $(".header-nav__lists").find("a");

  let total = 0;
  let totalBottomLineArr = [];
  for (let i = 0; i < section.length; i++) {
    const block = section.eq(i);

    total += block.outerHeight();
    totalBottomLineArr.push(total);
  }


  nav.click(function (e) {
    e.preventDefault();

    const href = $(this).attr("href").replace('#', '');
    const target = $("#" + href);
    const targetHight = target.offset().top;

    window.scrollTo({
      top: targetHight,
      behavior: 'smooth'
    });
  })


  $(window).scroll(function () {
    window.setTimeout(function () {
      const screenTop = $(this).scrollTop();
    
      for (let int = 0; int < section.length; int++) {
        nav.eq(int).removeClass("active");
        if (int === 0 && screenTop < totalBottomLineArr[int]) {
          nav.eq(int).addClass("active");
        } else if (totalBottomLineArr[int- 1] <= screenTop && screenTop < totalBottomLineArr[int]) {
          nav.eq(int).addClass("active");
        }
      }
    }, 700);
  })
});