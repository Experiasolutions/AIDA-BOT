/**
 * AIDA Landing Page — Premium Scripts v2
 * Stars canvas, scroll animations, FAQ, mobile menu, navbar scroll effect
 */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Stars Canvas Background ────────────────────────────────────────
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.2 + 0.2,
                alpha: Math.random() * 0.7 + 0.1,
                speed: Math.random() * 0.3 + 0.05,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.pulse += s.speed * 0.02;
            const alpha = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    createStars(180);
    drawStars();
    window.addEventListener('resize', () => { resizeCanvas(); createStars(180); });


    // ── 2. Scroll Animations (Intersection Observer) ──────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));


    // ── 3. Navbar Scroll Effect ───────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });


    // ── 4. Mobile Menu Toggle ─────────────────────────────────────────────
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });


    // ── 5. Smooth Anchor Scroll ───────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const el = document.querySelector(targetId);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // ── 6. FAQ Accordion ──────────────────────────────────────────────────
    // (inline via HTML onclick, but also wire up here for accessibility)
    window.toggleFaq = function(el) {
        const item = el.parentElement;
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
    };


    // ── 7. Chat Demo Sequential Animation ────────────────────────────────
    // The third chat bubble animates in after a delay for a "live typing" feel
    // This is handled via CSS animation-delay on .typing-animation class

    // ── 8. Persona Card Tilt Effect ───────────────────────────────────────
    document.querySelectorAll('.persona-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

});
