let nav = document.querySelector('.navigation-wrap');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on')
    } else {
        nav.classList.remove('scroll-on')

    }
};

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach((link) => {
    link.addEventListener("click", () =>{
        navCollapse.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1
        step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment,
                    obj.textContent = current;
                if (current == end) {
                    clearInterval(timer)
                }
            }, step);
    }
    counter('count1', 0, 100, 200);
    counter('count2', 0, 20, 300);
    counter('count3', 0, 300, 200);
    counter('count4', 0, 338, 200);
});