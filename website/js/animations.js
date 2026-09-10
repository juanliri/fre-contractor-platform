/**
 * F.R.E. CONTRACTOR — ANIMATIONS ENGINE
 * Custom cursor, scroll reveal, counters, parallax, magnetic buttons, tilt cards
 */

const ANIM = {
    cursor: null,
    trail: null,
    cursorX: 0, cursorY: 0,
    trailX: 0, trailY: 0,

    init() {
        // Native cursor preferred for clean contractor UX
        this.initScrollReveal();
        this.initCounters();
        this.initParallax();
        this.initMagneticButtons();
        this.initTiltCards();
        this.initBrushDividers();
    },

    // ── CUSTOM PAINT CURSOR (DISABLED) ──────────────────────────────
    initCursor() {
        return;
    },

    // ── SCROLL REVEAL ─────────────────────────────────────────────
    initScrollReveal() {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Trigger counter if counter element
                    if (entry.target.hasAttribute('data-count')) {
                        this.animateCounter(entry.target);
                    }
                    // Trigger brush divider
                    const bp = entry.target.querySelector('.brush-path-animated');
                    if (bp) bp.classList.add('drawn');
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
        document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
        document.querySelectorAll('.brush-divider').forEach(el => io.observe(el));

        // Safety fallback: reveal all elements after timeout
        setTimeout(() => {
            document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
            document.querySelectorAll('[data-count]:not([data-counted])').forEach(el => this.animateCounter(el));
        }, 1500);
    },

    // ── NUMBER COUNTERS ───────────────────────────────────────────
    initCounters() {
        // Handled by IntersectionObserver above — called on reveal
    },

    animateCounter(el) {
        if (el.dataset.counted) return;
        el.dataset.counted = 'true';

        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 1800;
        const start = performance.now();

        const easeOut = t => 1 - Math.pow(1 - t, 3);

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(easeOut(progress) * target);
            el.textContent = prefix + value + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    },

    // ── PARALLAX ─────────────────────────────────────────────────
    initParallax() {
        const parallaxEls = document.querySelectorAll('[data-parallax]');
        if (!parallaxEls.length) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxEls.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.3;
                const rect = el.closest('.parallax-wrapper')?.getBoundingClientRect();
                if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
                    const offset = (scrolled - (scrolled + rect.top)) * speed;
                    el.style.transform = `translateY(${offset}px)`;
                }
            });
        }, { passive: true });
    },

    // ── MAGNETIC BUTTONS ─────────────────────────────────────────
    initMagneticButtons() {
        document.querySelectorAll('.btn-magnetic, .btn-primary').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    },

    // ── 3D TILT CARDS ─────────────────────────────────────────────
    initTiltCards() {
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * -10;
                const rotateY = (x - 0.5) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    },

    // ── BRUSH DIVIDER DRAW ────────────────────────────────────────
    initBrushDividers() {
        // Handled by IntersectionObserver above
    }
};

document.addEventListener('DOMContentLoaded', () => ANIM.init());
window.ANIM = ANIM;
