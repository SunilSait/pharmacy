// ===== MEDICARE — UTILITY SCRIPTS =====
// Auth page interactions, animations, counters, tabs, FAQ

(function () {
    'use strict';

    // ---- Password Toggle ----
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function () {
            const wrapper = this.closest('.input-wrapper');
            const input = wrapper ? wrapper.querySelector('input') : null;
            if (input) {
                const isText = input.type === 'text';
                input.type = isText ? 'password' : 'text';
                const icon = this.querySelector('i');
                if (icon) icon.className = isText ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
            }
        });
    });

    // ---- Auth Page Theme Toggle ----
    const darkToggles = document.querySelectorAll('.dark-toggle');
    darkToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('mc-dark-mode', isDark ? 'true' : 'false');
            const icon = btn.querySelector('i');
            if (icon) icon.className = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon';
        });
    });

    // ---- Auth Page RTL Toggle ----
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    rtlToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const html = document.documentElement;
            const isRTL = html.getAttribute('dir') === 'rtl';
            html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
            localStorage.setItem('mc-rtl', isRTL ? 'false' : 'true');
        });
    });

    // ---- Restore settings ----
    (function restoreSettings() {
        const html = document.documentElement;
        if (localStorage.getItem('mc-dark-mode') === 'true' ||
            (!localStorage.getItem('mc-dark-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            document.querySelectorAll('.dark-toggle i').forEach(i => i.className = 'fas fa-sun text-yellow-400');
        }
        if (localStorage.getItem('mc-rtl') === 'true') {
            html.setAttribute('dir', 'rtl');
        }
    })();

    // ---- Animate on scroll ----
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        elements.forEach(el => observer.observe(el));
    });

    // ---- Counter Animation ----
    function animateCounter(el) {
        const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const isInt = Number.isInteger(target);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = prefix + (isInt ? Math.round(current) : current.toFixed(1)) + suffix;
        }, duration / steps);
    }

    document.querySelectorAll('[data-counter]').forEach(el => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(el);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(el);
    });

    // ---- Tabs ----
    document.querySelectorAll('.tab-bar').forEach(tabBar => {
        const buttons = tabBar.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const target = btn.dataset.tab;
                // Find the nearest ancestor that contains the content panels
                const section = tabBar.closest('section') || tabBar.closest('div[class*="max-w"]') || document;
                section.querySelectorAll('[data-tab-content]').forEach(panel => {
                    if (target === 'all') {
                        panel.classList.remove('hidden');
                    } else {
                        panel.classList.toggle('hidden', panel.dataset.tabContent !== target);
                    }
                });
            });
        });
    });


    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = btn.querySelector('.faq-icon');
            const isOpen = !answer.classList.contains('hidden');

            // Close all
            document.querySelectorAll('.faq-item').forEach(fi => {
                fi.querySelector('.faq-answer').classList.add('hidden');
                const fi_icon = fi.querySelector('.faq-icon');
                if (fi_icon) fi_icon.style.transform = 'rotate(0deg)';
            });

            // Toggle current
            if (!isOpen) {
                answer.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ---- Prescription Form File Upload Preview ----
    const fileInput = document.getElementById('prescription-file');
    const fileLabel = document.getElementById('file-label');
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                fileLabel.textContent = file.name;
                fileLabel.classList.add('text-[#059669]');
            }
        });
    }

})();
