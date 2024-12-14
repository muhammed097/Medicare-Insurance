        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // About Us Section Starts 
        // Number animation function
        const animateNumber = (element, target) => {
            let current = 0;
            const increment = target / 50; // Adjust for animation speed
            const animate = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    element.textContent = Math.round(current) + (target > 100 ? '' : '+');
                    requestAnimationFrame(animate);
                }
            };
            animate();
        };

        // Intersection Observer to trigger animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = document.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        const target = parseInt(number.getAttribute('data-target'));
                        animateNumber(number, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Observe the stats grid
        observer.observe(document.querySelector('.stats-grid'));
        // About Us Seciton Ends 
        // Faq
        const faqItems = document.querySelectorAll('.medicare-faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.medicare-faq__question');
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        // Faq
        // Scroll 
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the target section
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                if (!targetSection) return;
                
                // Calculate position accounting for header height
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.querySelector('.menu-toggle').classList.remove('active');
                }
            });
        });