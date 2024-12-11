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