var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    freeMode: true, // Enables free movement of slides
    zoom: true,

});


let swiper_1 = new Swiper(".mySwiper-1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-1-pagination",
        clickable: true,
    },
});


// Counter Animation Function
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = Math.ceil(target / (duration / 50)); // Adjust increment based on duration
    const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(interval);
        }
        element.textContent = start;
    }, 50); // Update every 50ms
}

// Trigger Counter Animation on Page Load
window.onload = () => {
    animateCounter("years", 18, 10000);       // 18 years, 2 seconds
    animateCounter("menus", 100, 2000);     // 100 menus, 2 seconds
    animateCounter("staffs", 50, 2000);     // 50 staff, 2 seconds
    animateCounter("customers", 15000, 3000); // 15000 customers, 3 seconds
};