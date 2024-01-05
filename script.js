
// Show Navigation Bar
function show() {
    const menuElement = document.querySelector('.menu');
    menuElement.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.src = menuElement.classList.contains('active') ? 'Images/navbar-assets/closemenu.svg' : 'Images/navbar-assets/hamburger-menu.svg';
}


// Initial nav bar animation using GSAP
gsap.to("#nav", {
    top: 0,
    duration: 1,
    ease: "power2.out"
});
gsap.registerPlugin(ScrollTrigger);
// Scroll-based animation using GSAP
gsap.to("#nav", {
    scrollTrigger: {
        trigger: "#nav",
        start: "bottom bottom", // Change "top center" to "top bottom"
        end: "top top",
        scrub: true,
        // markers: true, // For debugging, you can remove this in production
        toggleClass: { targets: "#nav", className: "hidden" }
    }
});

gsap.to(".main-hero-img", {
    y: -150, // Adjust the vertical parallax effect as needed
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// arrow wight
document.addEventListener('DOMContentLoaded', function () {
    const reviewButtons = document.querySelectorAll('.review-btn');

    reviewButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const reviewElement = button.parentNode.nextElementSibling;
        const paragraph = reviewElement.querySelector('.paragraph');
        const arrowIcon = button.querySelector('.arrow-clients');
        const clientdetails = reviewElement.querySelectorAll('.clients-details');

        // minimum width
        const minwindowwidth = 1280;
        if (window.innerWidth < minwindowwidth) {
            
        }
        // Toggle the 'active' class for the review element
        reviewElement.classList.toggle('active');

        gsap.to(
            clientdetails, {
                borderTopRightRadius: reviewElement.classList.contains('active') ? '0px' : '10px',
                borderBottomRightRadius: reviewElement.classList.contains('active') ? '0px' : '10px',
                duration: 0.6,
            }
        )

        // Toggle the rotation of the arrow icon using GSAP
        gsap.to(
            arrowIcon, {
                rotate: reviewElement.classList.contains('active') ? 180 : 0, duration: 0.6 });

        // Toggle sliding in/out for the paragraph using GSAP
        gsap.to(reviewElement, {
        opacity: reviewElement.classList.contains('active') ? 1 : 0,
        visibility: reviewElement.classList.contains('active') ? 'visible' : 'hidden',
        duration: 0.6
        });

        // Toggle sliding in/out for the paragraph using GSAP
        gsap.to(paragraph, {
        // maxWidth: reviewElement.classList.contains('active') ? '400px' : '0',
        opacity: reviewElement.classList.contains('active') ? 1 : 0,
        duration: 0.5,
        visibility: reviewElement.classList.contains('active') ? 'visible' : 'hidden'
        });
    });
    });
});
