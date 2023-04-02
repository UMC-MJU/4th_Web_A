const logoList = document.querySelectorAll('.btn_login, .small_logo, .btn_join, .btn_customer, .btn_howto, .btn_world, .search_logo, .pre_btn, .next_btn, .btn_1, .btn_2, .btn_3, .btn_4, .btn_5, .btn_6, .btn_7, .btn_8, .btn_9, .btn_10, .btn_11, .slide');

logoList.forEach(logo => {
  logo.addEventListener('mouseover', () => {
    logo.classList.add('active');
  });

  logo.addEventListener('mouseout', () => {
    logo.classList.remove('active');
  });
});

const slider = document.querySelector('.header_event');
const slides = document.querySelector('.header_slider');
const prevBtn = document.querySelector('.pre_btn');
const nextBtn = document.querySelector('.next_btn');
let slideIndex = 0; // 슬라이드 인덱스

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 1;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > 1) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});



