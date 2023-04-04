$(function () {
  const section = $(".section-block");
  const nav = $(".header-nav__lists").find("a");

  let total = 0;
  let totalHeightArr = [];
  for (let i = 0; i < section.length; i++) {
    const block = section.eq(i);

    total += block.outerHeight();
    totalHeightArr.push(total);
  }

  $(window).scroll(function () {
    let screenTop = $(this).scrollTop();
    
    for (let int = 0; int < section.length; int++) {
      nav.eq(int).removeClass("active");
      if (int === 0 && screenTop < totalHeightArr[int]) {
        nav.eq(int).addClass("active");
      } else if (totalHeightArr[int- 1] <= screenTop && screenTop < totalHeightArr[int]) {
        nav.eq(int).addClass("active");
      }
    }
  })
});