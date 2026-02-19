console.log('German Tech Modern - Initialized');

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');

    if (menuToggle && nav) {
        const overlay = document.createElement('div');
        overlay.classList.add('mobile-overlay');
        document.body.appendChild(overlay);

        const toggleMenu = () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('open');
            overlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        };

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('open')) toggleMenu();
            });
        });
    }
});

// Simple smooth scroll link handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('careerModal');
    const openBtn = document.getElementById('openCareerModal');
    const closeBtn = document.getElementById('closeCareerModal');
    const form = document.getElementById('careerForm');

    if (modal && openBtn && closeBtn) {
        openBtn.onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };

        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            alert('Curriculo enviado com sucesso! Entraremos em contato em breve.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
        };
    }
});


// Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials-grid');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let autoPlayInterval;
    const scrollAmount = 350; // Card width approximation

    // Auto Scroll Function
    const startAutoPlay = () => {
        // Clear any existing interval to prevent duplicates
        clearInterval(autoPlayInterval);

        autoPlayInterval = setInterval(() => {
            if (isDown) return; // Don't scroll if user is dragging

            // Check if we are near the end
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            if (slider.scrollLeft >= maxScroll - 10) {
                // If at end, loop back to start smoothly
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll one card width
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Start Auto Play initially
    startAutoPlay();

    // Pause on Hover (Better UX)
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        startAutoPlay();
    });

    // Mouse Events for Dragging
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        stopAutoPlay();
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        startAutoPlay();
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Speed multiplier
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch Support
    slider.addEventListener('touchstart', stopAutoPlay);
    slider.addEventListener('touchend', startAutoPlay);

    // Button Navigation Logic
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();

            // Check if we are at the start
            if (slider.scrollLeft <= 10) {
                // Loop to the end
                const maxScroll = slider.scrollWidth - slider.clientWidth;
                slider.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }

            // Restart autoplay after a delay to let user finish reading
            setTimeout(startAutoPlay, 5000);
        });

        nextBtn.addEventListener('click', () => {
            stopAutoPlay();

            // Check if we are near the end
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (slider.scrollLeft >= maxScroll - 10) {
                // Loop to the start
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }

            setTimeout(startAutoPlay, 5000);
        });

        // Pause auto-play when hovering buttons too
        prevBtn.addEventListener('mouseenter', stopAutoPlay);
        nextBtn.addEventListener('mouseenter', stopAutoPlay);
    }

    // Features Tabs Filtering Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const featurePills = document.querySelectorAll('.feature-pill');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-tab');

            // Filter items
            featurePills.forEach(pill => {
                // Reset animation
                pill.style.animation = 'none';
                pill.offsetHeight; /* trigger reflow */
                pill.style.animation = null;

                if (category === 'all' || pill.getAttribute('data-category') === category) {
                    pill.style.display = 'flex';
                    pill.style.opacity = '0';
                    // Match the multiple animations from CSS
                    pill.style.animation = 'fadeInOnly 0.5s forwards, float-pills 6s ease-in-out infinite var(--float-delay, 0s)';
                } else {
                    pill.style.display = 'none';
                }
            });
        });
    });

    // Counter Animation Logic
    const counters = document.querySelectorAll('.counter-value');
    const speed = 200; // Total segments of animation

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('.', '');
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target.toLocaleString('pt-BR');
        }
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
});

// Scroll Reveal Logic
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            } else {
                entry.target.classList.remove('reveal-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const scrollBtn = document.getElementById('scrollExplorer');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const target = document.getElementById('systems');
            if (target) {
                const headerOffset = 180; // Adjusted to match the image positioning
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    revealElements.forEach(el => revealObserver.observe(el));

    // Testimonials Active Card Tracking
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        const cards = testimonialsGrid.querySelectorAll('.testimonial-card');

        function updateActiveCard() {
            const gridRect = testimonialsGrid.getBoundingClientRect();
            const gridCenter = gridRect.left + gridRect.width / 2;

            let closestCard = null;
            let closestDistance = Infinity;

            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardCenter - gridCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            // Remove active class from all cards
            cards.forEach(card => card.classList.remove('active'));

            // Add active class to the closest card
            if (closestCard) {
                closestCard.classList.add('active');
            }
        }

        // Set initial active card
        updateActiveCard();

        // Update on scroll
        testimonialsGrid.addEventListener('scroll', updateActiveCard);

        // Update on window resize
        window.addEventListener('resize', updateActiveCard);
    }
});

// Career Form Handling
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your Public Key
    // Replace "YOUR_PUBLIC_KEY" with your actual key from EmailJS dashboard
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY");
    }

    const careerForm = document.getElementById('careerForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccessModal');

    if (careerForm) {
        careerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Gather form data
            const name = this.querySelector('input[placeholder="Nome"]').value;
            const email = this.querySelector('input[placeholder="E-mail"]').value;
            const phone = this.querySelector('input[placeholder="Telefone"]').value;
            const city = this.querySelector('input[placeholder="Cidade"]').value;
            const role = document.getElementById('careerRole').value;
            const message = this.querySelector('textarea').value;

            // EmailJS Parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone,
                city: city,
                role: role,
                message: message
            };

            // Send Email using EmailJS
            // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual IDs from EmailJS Dashboard
            if (typeof emailjs !== 'undefined') {
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
            }

            // Close the form modal first
            const careerModal = document.getElementById('careerModal');
            if (careerModal) {
                careerModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scroll
            }

            // Show Success Modal
            if (successModal) {
                successModal.style.display = 'flex';
                // Success modal handles scroll blocking if needed, but usually we want to keep it simple
            }

            // Reset form
            this.reset();
        });
    }

    if (closeSuccessBtn && successModal) {
        closeSuccessBtn.addEventListener('click', function () {
            successModal.style.display = 'none';
        });
    }

    // Close success modal on outside click
    window.addEventListener('click', function (e) {
        if (e.target == successModal) {
            successModal.style.display = 'none';
        }
    });
});
