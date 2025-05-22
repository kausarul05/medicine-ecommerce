// menu bar js
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');

function openMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
}
function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
}
menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
// swiper js
var swiper = new Swiper(".bannerSlider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".categorySlider", {
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    spaceBetween: 16,
    breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1324: { slidesPerView: 8 },
    },
});

// popular section js
var swiper = new Swiper(".popularMySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// quantity add to cart and remove
document.querySelectorAll('.product-card').forEach(card => {
    const addBtn = card.querySelector('.add-cart-btn');
    const qtyBox = card.querySelector('.qty-control');
    const qtyText = card.querySelector('.qty');
    const decrease = card.querySelector('.decrease');
    const increase = card.querySelector('.increase');

    addBtn.addEventListener('click', () => {
        addBtn.classList.add('hidden');
        qtyBox.classList.remove('hidden');
        qtyText.textContent = 1;
    });

    increase.addEventListener('click', () => {
        let current = parseInt(qtyText.textContent);
        qtyText.textContent = current + 1;
    });

    decrease.addEventListener('click', () => {
        let current = parseInt(qtyText.textContent);
        if (current > 1) {
            qtyText.textContent = current - 1;
        } else {
            // back to "Add to cart"
            qtyBox.classList.add('hidden');
            addBtn.classList.remove('hidden');
        }
    });
});

// random add to cart button functionality for any of this simial add to cart
document.addEventListener("DOMContentLoaded", () => {
    // Delegate all events to the document
    document.body.addEventListener("click", (e) => {
        const target = e.target;

        // Handle Add to Cart
        if (target.classList.contains("add-to-cart-btn")) {
            const wrapper = target.closest(".add-to-cart-wrapper");
            wrapper.querySelector(".add-to-cart-btn").classList.add("hidden");
            wrapper.querySelector(".quantity-controls").classList.remove("hidden");
            wrapper.querySelector(".quantity-controls").classList.add("grid");
        }

        // Handle Increase
        if (target.classList.contains("increase-btn")) {
            const wrapper = target.closest(".add-to-cart-wrapper");
            const quantityEl = wrapper.querySelector(".quantity-value");
            let quantity = parseInt(quantityEl.textContent);
            quantityEl.textContent = quantity + 1;
        }

        // Handle Decrease
        if (target.classList.contains("decrease-btn")) {
            const wrapper = target.closest(".add-to-cart-wrapper");
            const quantityEl = wrapper.querySelector(".quantity-value");
            let quantity = parseInt(quantityEl.textContent);
            if (quantity > 1) {
                quantityEl.textContent = quantity - 1;
            } else {
                // Reset to "Add to cart"
                wrapper.querySelector(".add-to-cart-btn").classList.remove("hidden");
                wrapper.querySelector(".quantity-controls").classList.add("hidden");
                quantityEl.textContent = 1; // reset value
            }
        }
    });
});
