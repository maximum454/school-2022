@@include('./partials/swiper-bundle.min.js')

const swiperSchool2022 = new Swiper('.swiper-school-2022', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});